import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IShipDefinition, ISystemModule } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { ShipId } from '../../shipIds';

const m1: ISystemModule = {
    id: 'M1',
    name: '艦首武器システム「スターオブサンダーボルト」',
    description: '対小型武装',
    parts: [{
        text: [
            'HR-1850型　長レール電磁加速砲',
            '対小型艦：',
            '・直接、実弾、対艦：27353、攻城：5744',
        ],
        skillSlots: 6,
        skills: [
            // TODO find out
        ],
    }],
    category: 'M',
    categoryNumber: 1,
    defaultModule: true,
};

const m2: ISystemModule = {
    id: 'M2',
    name: '艦首投射武器システム「スターオブサンダーボルト」',
    description: '対大型武装',
    parts: [{
        text: [
            'HT-1-850型　高エネルギーランチャー',
            '対大型艦：',
            '・投射、エネルギー、対艦：29885、攻城：5705',
            'クリティカル',
        ],
        skillSlots: 6,
        skills: [
            // TODO find out
        ],
    }],
    category: 'M',
    categoryNumber: 2,
};

const m3: ISystemModule = {
    id: 'M3',
    name: '「サンダーファイヤースター」弓高エネルギー兵器システム',
    description: '対大型武装',
    parts: [{
        text: [
            'HI-1250T型　試験型超高エネルギーイオン砲',
            '対大型艦：',
            '・投射、エネルギー、対艦：39744、攻城：3312',
        ],
        skillSlots: 6,
        skills: [
            // TODO find out
        ],
    }],
    category: 'M',
    categoryNumber: 3,
};

const a1: ISystemModule = {
    id: 'A1',
    name: '高速対艦武器システム',
    parts: [{
        text: [
            'HG-1220型 速射砲群',
            '対小型：',
            '・直射、実弾、対艦：14076、対空：8445、攻城：1407',
            '反撃対空',
        ],
        skillSlots: 6,
        // skills: [
        // ],
    }],
    category: 'A',
    categoryNumber: 1,
    defaultModule: true,
};

const a2: ISystemModule = {
    id: 'A2',
    name: '中型対艦武器システム',
    description: '対小型武装',
    parts: [{
        text: [
            'HG-2280型　2連固定式重砲',
            '対小型艦：',
            '・直射、実弾、対艦：17884、攻城：1490',
        ],
        skillSlots: 6,
        skills: [
            // TODO find out
        ],
    }],
    category: 'A',
    categoryNumber: 2,
};

const b1: ISystemModule = {
    id: 'B1',
    name: 'アクティブ対空システム',
    parts: [{
        text: [
            'HM-4x60B型 中距離対空ミサイル群',
            '対空：',
            '・投射、実弾、対艦：5175、対空：3105',
            '対空支援',
        ],
        skillSlots: 4,
        // skills: [
        // ],
    }],
    category: 'B',
    categoryNumber: 1,
    defaultModule: true,
};

const b2: ISystemModule = {
    id: 'B2',
    name: '範囲要撃システム',
    description: '対空武装、ミサイル迎撃',
    parts: [{
        text: [
            'HP-1008型　対ミサイルパルス群',
            '対空：',
            '・直射、エネルギー、対空：2300',
            '迎撃効果',
        ],
        // skillSlots: 4,
        // skills: [
        // ],
    }],
    category: 'B',
    categoryNumber: 2,
};

const c1: ISystemModule = {
    id: 'C1',
    name: '艦載軍需生産統合システム',
    parts: [{
        text: [
            'AOF-300 移動式特殊弾薬合成工場',
            '大型弾薬合成工場。モジュール化設計により艦船に搭載可能となり、全艦の武器に特殊弾薬を提供できる。',
            '特殊弾薬：',
            '全艦の武器に15ラウンドの間特殊弾薬を提供し、特殊弾薬に換装した武器のダメージ15%アップ',
            '連鎖破壊：',
            'メイン武器システムが破壊された時、本システムモジュールも破壊され無効化し、誘爆して10%のHPを失う',
        ],
        skillSlots: 3,
        // skills: [
        // ],
    }],
    category: 'C',
    categoryNumber: 1,
    defaultModule: true,
};

const d1: ISystemModule = {
    id: 'D1',
    name: 'Weapon Coordination Center', // TODO JA
    parts: [{
        text: [
            'HNI-260 Weapon Activation Device', // TODO JA
        ],
        // skillSlots: 4,
        // skills: [
        // ],
    }],
    category: 'D',
    categoryNumber: 1,
};

const d2: ISystemModule = {
    id: 'D2',
    name: 'Fire-Control Calibration System', // TODO JA
    parts: [{
        text: [
            'HNA-240 Real-Time Target Calibration Module', // TODO JA
        ],
        // skillSlots: 4,
        // skills: [
        // ],
    }],
    category: 'D',
    categoryNumber: 2,
};

const e1: ISystemModule = {
    id: 'E1',
    name: '精密投射武器システム',
    description: '対小型武装',
    parts: [{
        text: [
            'HM-1x220A型　中距離対艦ミサイル',
            '対小型艦：',
            '・投射、実弾、対艦：14069、対空：9787、攻城：1223',
            '反撃対空',
        ],
        skillSlots: 4,
        skills: [
            // TODO find out
        ],
    }],
    category: 'E',
    categoryNumber: 1,
};

const e2: ISystemModule = {
    id: 'E2',
    name: '大型発射体兵器システム',
    description: '対大型武装',
    parts: [{
        text: [
            'HT-1-450型　大型魚雷ランチャー',
            '対大型艦：',
            '・投射、実弾、対艦：12916、攻城：2086',
            'クリティカル',
        ],
        skillSlots: 4,
        skills: [
            // TODO find out
        ],
    }],
    category: 'E',
    categoryNumber: 2,
};

const f1: ISystemModule = {
    id: 'F1',
    name: '多目的武器システム',
    description: '対小型武装',
    parts: [{
        text: [
            'HG-1120A型　多目的対艦砲',
            '対小型艦：',
            '・直射、実弾、対艦：7590、対空：6072、攻城：759',
            '反撃対空',
        ],
        // skillSlots: 4,
        // skills: [],
    }],
    category: 'F',
    categoryNumber: 1,
};

const f2: ISystemModule = {
    id: 'F2',
    name: '多目的対空システム',
    description: '対空武装',
    parts: [{
        text: [
            'HG-1120B型　多目的対空砲塔',
            '対空：',
            '・直射、実弾、対空：4226',
            '反撃対空',
        ],
        // skillSlots: 4,
        // skills: [],
    }],
    category: 'F',
    categoryNumber: 2,
};

export const thunderboldStar: IShipDefinition[] = [
    {
        id: ShipId.THUNDERBOLT_STAR,
        name: 'スターオブサンダーボルト',
        type: ShipType.BATTLE_CRUISER,
        cost: 35,
        weight: 2,
        row: ShipRow.MIDDLE,
        operationLimit: 3,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.THUNDERBOLT_GROUP,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.STRATEGY_AND_SUPPORT],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        relatedShipIds: [
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW1,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW2,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW3,
        ],
        modules: [m1, m2, m3, a1, a2, b1, b2, c1, d1, d2, e1, e2, f1, f2],
    },
    {
        id: ShipId.THUNDERBOLT_STAR_TE_PREVIEW1,
        name: 'スターオブサンダーボルト-TE トライアル版',
        type: ShipType.BATTLE_CRUISER,
        cost: 35,
        weight: 0,
        row: ShipRow.MIDDLE,
        operationLimit: 3,
        source: ShipSource.CITY_TRADE,
        manufacturer: Manufacturer.THUNDERBOLT_GROUP,
        staticModules: true,
        modules: [m1],
        relatedShipIds: [
            ShipId.THUNDERBOLT_STAR,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW2,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW3,
        ],
    },
    {
        id: ShipId.THUNDERBOLT_STAR_TE_PREVIEW2,
        name: 'スターオブサンダーボルト-TE トライアル版 (M2+E1)',
        type: ShipType.BATTLE_CRUISER,
        cost: 35,
        weight: 0,
        row: ShipRow.MIDDLE,
        operationLimit: 3,
        source: ShipSource.CITY_TRADE,
        manufacturer: Manufacturer.THUNDERBOLT_GROUP,
        staticModules: true,
        relatedShipIds: [
            ShipId.THUNDERBOLT_STAR,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW1,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW3,
        ],
        modules: [m2, e1],
    },
    {
        id: ShipId.THUNDERBOLT_STAR_TE_PREVIEW3,
        name: 'スターオブサンダーボルト-TE トライアル版 (M3+A2+E2)',
        type: ShipType.BATTLE_CRUISER,
        cost: 35,
        weight: 0,
        row: ShipRow.MIDDLE,
        operationLimit: 3,
        source: ShipSource.CITY_TRADE,
        manufacturer: Manufacturer.THUNDERBOLT_GROUP,
        staticModules: true,
        relatedShipIds: [
            ShipId.THUNDERBOLT_STAR,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW1,
            ShipId.THUNDERBOLT_STAR_TE_PREVIEW2,
        ],
        modules: [m3, a2, e2],
    },
];