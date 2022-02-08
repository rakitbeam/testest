import { ITechFile } from '../../../../types/ITechFile';
import { ShipDefinition } from '../../../../types/ShipDefinition';
import { ShipType } from '../../../../types/ShipType';
import { UserSettings } from '../../../../userSettings/types/UserSettings';
import { isPossessingShip, isUnwantedShip, isWantedShip } from '../../../../userSettings/utils/userSettingsUtils';
import { getShipDefinitionById } from '../../../../utils/shipDefinitionUtils';
import { shipTypes } from '../../../../utils/shipTypeUtils';
import { IShipChance, IShipTypeChance, ITechFileChances } from '../types/IBlueprintChance';

export function getTechFileChances(techFile: ITechFile, userSettings: UserSettings): ITechFileChances {
    const shipTypeChances = Object.keys(shipTypes).map(shipType => getShipTypeChance(techFile, shipType as ShipType, userSettings));

    const blueprintChance = shipTypeChances
        .flatMap(shipTypeChance => shipTypeChance.shipChances)
        .map(blueprintChance => blueprintChance.blueprintChance)
        .reduce((sum, chance) => sum + chance, 0);

    const wishedBlueprintChance = shipTypeChances
        .flatMap(shipTypeChance => shipTypeChance.shipChances)
        .filter(shipChance => isWantedShip(shipChance.id, userSettings))
        .map(shipChance => shipChance.blueprintChance)
        .reduce((sum, chance) => sum + chance, 0);

    const unwishedBlueprintChance = shipTypeChances
        .flatMap(shipTypeChance => shipTypeChance.shipChances)
        .filter(shipChance => isUnwantedShip(shipChance.id, userSettings))
        .map(shipChance => shipChance.blueprintChance)
        .reduce((sum, chance) => sum + chance, 0);

    const moduleChance = shipTypeChances
        .map(shipTypeChance => shipTypeChance.moduleChance)
        .reduce((sum, chance) => sum + chance, 0);

    const subSystemChance = 0; // TODO implement

    const userTechPointChance = 1 - blueprintChance - subSystemChance;

    return {
        shipTypeChances,
        blueprintChance,
        moduleChance,
        wishedBlueprintChance,
        unwishedBlueprintChance,
        baseTechPointChance: techFile.chanceForTechPoint,
        finalTechPointChance: userTechPointChance,
    };
}

function getShipTypeChance(
    techFile: ITechFile,
    shipType: ShipType,
    userSettings: UserSettings
): IShipTypeChance {
    const containedBaseModels: ShipDefinition[] = techFile.ships
        .map(getShipDefinitionById)
        .filter(ship => ship.type === shipType && !ship.baseModelId);

    const baseModelsTotalWeight = containedBaseModels
        .map(ship => ship.weight)
        .reduce((sum, weight) => sum + weight, 0);

    const containedShips: ShipDefinition[] = containedBaseModels.flatMap(baseModel => [
        baseModel,
        ...baseModel.subModelIds?.map(getShipDefinitionById) ?? [],
    ]);

    const shipChances: IShipChance[] = containedShips
        .map(ship => getShipChances(ship, techFile.chanceByShipType[shipType], baseModelsTotalWeight, userSettings));

    const blueprintChance = shipChances
        .map(blueprintChance => blueprintChance.blueprintChance)
        .reduce((sum, chance) => sum + chance, 0);

    const hasModules = containedShips.some(ship => !!ship.modules && ship.modules.length > 0);
    const moduleChance = hasModules
        ? shipChances
            .map(chance => chance.moduleChance)
            .reduce((sum, chance) => sum + chance, 0)
        : 0;

    return {
        shipType,
        originalChance: techFile.chanceByShipType[shipType],
        blueprintChance,
        shipChances,
        hasModules,
        moduleChance,
    };
}

function getShipChances(
    ship: ShipDefinition,
    shipTypeChance: number,
    baseModelsTotalWeight: number,
    userSettings: UserSettings
): IShipChance {
    return !ship.baseModelId
        ? getBaseModelShipChance(ship, shipTypeChance, baseModelsTotalWeight, userSettings)
        : getSubModelShipChance(ship, shipTypeChance, baseModelsTotalWeight, userSettings);
}

function getBaseModelShipChance(
    ship: ShipDefinition,
    shipTypeChance: number,
    baseModelsTotalWeight: number,
    userSettings: UserSettings
): IShipChance {
    const baseChance = shipTypeChance * (ship.weight / baseModelsTotalWeight);
    const baseChanceTooltip = [
        '艦種確率×(重み/艦種内の重みの合計)',
        `${shipTypeChance} * (${ship.weight} / ${baseModelsTotalWeight})`,
    ];
    const possessed = isPossessingShip(ship.id, userSettings);

    return {
        id: ship.id,
        name: ship.name,
        weight: ship.weight,
        baseChance,
        baseChanceTooltip: baseChanceTooltip,
        blueprintChance: possessed ? 0 : baseChance,
        blueprintChanceTooltip: possessed ? ['取得済み'] : baseChanceTooltip,
        ...getModuleChance(ship, baseChance, possessed, userSettings),
    };
}

function getModuleChance(
    ship: ShipDefinition,
    baseChance: number,
    possessed: boolean,
    userSettings: UserSettings,
) {
    if (!possessed || !ship.modules || ship.modules.length === 0) {
        return {
            moduleChance: 0,
            moduleChanceTooltip: possessed ? [] : ['ベースモデルが必要'],
        };
    }

    const unpossesedModuleCount = ship.modules.length; // TODO implement

    return {
        moduleChance: baseChance * (unpossesedModuleCount / ship.modules.length),
        moduleChanceTooltip: [
            '追加モジュールには重みが無いと仮定した場合：',
            '⇒ベースモデルの艦種確率×(取得していないモジュール数/モジュール数の合計)',
            `⇒${formatFactor(baseChance)} * (${unpossesedModuleCount} / ${ship.modules.length})`,
        ],
    };
}

function getSubModelShipChance(
    ship: ShipDefinition,
    shipTypeChance: number,
    baseModelsTotalWeight: number,
    userSettings: UserSettings
): IShipChance {
    if (!ship.baseModelId) {
        throw new Error('Missing baseModelId');
    }

    const possessed = isPossessingShip(ship.id, userSettings);
    if (possessed) {
        return {
            id: ship.id,
            name: ship.name,
            weight: ship.weight,
            baseChance: 0,
            baseChanceTooltip: ['ベースモデルが必要'],
            blueprintChance: 0,
            blueprintChanceTooltip: ['取得済み'],
            moduleChance: 0, // TODO implement in case sub models get modules
            moduleChanceTooltip: [],
        };
    }

    const basePossessed = isPossessingShip(ship.baseModelId, userSettings);
    if (!basePossessed) {
        return {
            id: ship.id,
            name: ship.name,
            weight: ship.weight,
            baseChance: 0,
            baseChanceTooltip: ['ベースモデルが必要'],
            blueprintChance: 0,
            blueprintChanceTooltip: ['ベースモデルが必要'],
            moduleChance: 0,
            moduleChanceTooltip: [],
        };
    }

    const baseModelChances = getBaseModelShipChance(ship, shipTypeChance, baseModelsTotalWeight, userSettings);

    const subModelIds = getShipDefinitionById(ship.baseModelId).subModelIds ?? [];
    if (subModelIds.length === 1 && subModelIds[0] === ship.id) {
        return {
            id: ship.id,
            name: ship.name,
            weight: ship.weight,
            baseChance: 0,
            baseChanceTooltip: ['ベースモデルが必要'],
            blueprintChance: baseModelChances.baseChance,
            blueprintChanceTooltip: ['最後のサブモデル', '⇒ベースモデルの艦種確率'],
            moduleChance: 0,
            moduleChanceTooltip: [],
        };
    }

    const unpossessedSubModelsWeightSum = subModelIds
        .filter(id => !isPossessingShip(id, userSettings))
        .map(id => getShipDefinitionById(id).weight)
        .reduce((sum, weight) => sum + weight, 0);

    if (subModelIds.length < 2 || unpossessedSubModelsWeightSum === 0) {
        throw new Error('Invalid data');
    }

    return {
        id: ship.id,
        name: ship.name,
        weight: ship.weight,
        baseChance: 0,
        baseChanceTooltip: ['ベースモデルが必要'],
        blueprintChance: baseModelChances.baseChance * (ship.weight / unpossessedSubModelsWeightSum),
        blueprintChanceTooltip: [
            '取得していないサブモデルが複数ある場合：',
            '⇒ベースモデルの艦種確率×(重み/取得していないサブモデルの重みの合計)',
            `⇒${formatFactor(baseModelChances.baseChance)} * (${ship.weight} / ${unpossessedSubModelsWeightSum})`,
        ],
        moduleChance: 0,
        moduleChanceTooltip: [],
    };
}

export function formatChance(chance: number): string {
    return `${Number((chance * 100).toFixed(3))} %`;
}

export function formatFactor(chance: number): string {
    return `${Number((chance).toFixed(5))}`;
}

export function hasPositiveChance(shipTypeBlueprintChance: IShipTypeChance): boolean {
    return shipTypeBlueprintChance.originalChance > 0 || shipTypeBlueprintChance.blueprintChance > 0;
}
