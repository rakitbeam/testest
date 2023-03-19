import { enhancements, strategy } from '../../../enhancements/enhancements';
import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IDefaultShipStats, IShipDefinition, ISystemModule } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { modules } from '../../modules';
import { ShipId } from '../../shipIds';

const defaultModules: ISystemModule[] = [
    modules.static({
        id: 'w1',
        name: '機載爆薬投下システム',
        translatedName: {
            en: 'Airborne Bombardment System',
        },
        mainSystem: true,
        skills: [
            strategy.customStrategy('diveToss').withDescriptionKey('diveToss').withCost(18),
            // TODO cost
            enhancements.increaseDamage().withPercentageValue(10),
            enhancements.increaseDamage().withPercentageValue(10),
            enhancements.increaseHitRateVsLarge().withPercentageValue(15),
            enhancements.increaseMissileAndTorpedoHitRate().withPercentageValue(8, 10),
            enhancements.increaseCriticalDamageAndChance().withPercentageValue(25),
            enhancements.increaseCriticalDamage().withPercentageValue(45),
            enhancements.reduceCooldown().withPercentageValue(15),
            enhancements.reduceCooldown().withPercentageValue(15),
            enhancements.reduceLockOn().withPercentageValue(30),
        ],
        skillSlots: 7,
        dpmShip: 3792,
        dpmAntiAir: 0,
        dpmSiege: 1820,
    }),
    modules.commandSystem(),
    modules.armorSystem({
        skills: [
            // TODO cost
            enhancements.increaseHp().withPercentageValue(10),
            enhancements.increaseHp().withPercentageValue(10),
            enhancements.increaseHp().withPercentageValue(10),
            enhancements.increaseEnemyLockOn().withPercentageValue(40),
        ],
        skillSlots: 3,
    }),
    modules.propulsionSystem({
        skills: [
            // TODO cost
            enhancements.increaseEvasion().withPercentageValue(8),
            enhancements.increaseEvasion().withPercentageValue(8),
            enhancements.reduceBatOfAircraft().withPercentageValue(20),
        ],
        skillSlots: 2,
    }),
];

const defaultStats: IDefaultShipStats = {
    hp: 5400,
    armor: 2,
    shield: 0,
    speed: 2500,
    warpSpeed: 12500,
    dpmShip: 3792,
    dpmAntiAir: 0,
    dpmSiege: 1820,
};

export const sLevi: IShipDefinition[] = [
    {
        id: ShipId.S_LEVI9,
        name: 'S-レヴィ9',
        type: ShipType.CORVETTE,
        cost: 0,
        weight: 5,
        row: ShipRow.NONE,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.SUSTAINED_COMBAT, ResearchStrategyType.FIGHTER_AND_CORVETTE],
        researchTacticTypes: [ResearchTacticType.PROJECTILE_WEAPONS],
        modules: [
            ...defaultModules,
        ],
        defaultStats,
    },
    {
        id: ShipId.S_LEVI9_TE,
        name: 'S-レヴィ9-TE',
        type: ShipType.CORVETTE,
        cost: 0,
        weight: 0,
        row: ShipRow.NONE,
        operationLimit: 6,
        source: ShipSource.CITY_TRADE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        modules: [
            ...defaultModules,
        ],
        defaultStats,
    },
];
