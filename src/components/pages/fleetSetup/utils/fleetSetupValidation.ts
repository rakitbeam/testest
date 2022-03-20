import { IFleetSetup, ReinforcementType } from '../types/IFleetSetup';

export function validateFleetSetupForPropertyErrors(fleetSetup: IFleetSetup): Record<string, string> {
    const errorMap: Record<string, string> = {};
    if (fleetSetup.name.length === 0) {
        errorMap['name'] = '必須項目';
    }
    if (!Number.isFinite(fleetSetup.maxReinforcement) || fleetSetup.maxReinforcement < 0) {
        errorMap['maxReinforcement'] = '無効な値';
    }
    if (!Number.isFinite(fleetSetup.maxCost) || fleetSetup.maxCost < 300 || fleetSetup.maxCost > 450) {
        errorMap['maxCost'] = '無効な値';
    }
    if (fleetSetup.maxCost > 400 && fleetSetup.maxReinforcement > 5) {
        errorMap['maxReinforcement'] = errorMap['maxReinforcement'] ?? '基地結合効果は１つまでです';
        errorMap['maxCost'] = errorMap['maxCost'] ?? '基地結合効果は１つまでです';
    }

    return errorMap;
}

interface ICountAndLimit {
    count: number;
    reinforcementCount: number;
    operationLimit: number;
}

export function validateFleetSetupForShipWarnings(fleetSetup: IFleetSetup): Record<string, string> {
    const errorMap: Record<string, string> = {};
    const shipCountMap: Record<string, ICountAndLimit> = {};

    fleetSetup.ships.filter(ship => ship.reinforcement !== 'ally').forEach(ship => {
        const key = ship.shipDefinition.id;
        if (!!shipCountMap[key]) {
            const entry = shipCountMap[key];
            shipCountMap[key] = {
                count: ship.reinforcement === null ? ship.count : entry.count,
                reinforcementCount: ship.reinforcement !== null ? ship.count : entry.reinforcementCount,
                operationLimit: ship.shipDefinition.operationLimit,
            };
            return;
        }

        shipCountMap[key] = {
            count: ship.reinforcement === null ? ship.count : 0,
            reinforcementCount: ship.reinforcement !== null ? ship.count : 0,
            operationLimit: ship.shipDefinition.operationLimit,
        };
    });

    Object.keys(shipCountMap).forEach(shipId => {
        const entry = shipCountMap[shipId];
        if ((entry.count + entry.reinforcementCount) > entry.operationLimit) {
            errorMap[getShipWarningKey(shipId, null)] = '増援と合わせて稼働上限を超えています。';
            errorMap[getShipWarningKey(shipId, 'self')] = '通常配備と合わせて稼働上限を超えています。';
        }
    });

    return errorMap;
}

export function getShipWarningKey(shipId: string, reinforcement: ReinforcementType | null): string {
    return `${shipId}_${reinforcement ?? 'initial'}`;
}
