import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IShipDefinition } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { ShipId } from '../../shipIds';

export const mareSerenitatis: IShipDefinition[] = [
    {
        id: ShipId.MARE_SERENITATIS_A,
        name: 'マーレセレニタティス級　Ａ対艦型',
        type: ShipType.FRIGATE,
        cost: 5,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.SUSTAINED_COMBAT],
        researchTacticTypes: [ResearchTacticType.PROJECTILE_WEAPONS],
        subModelIds: [ShipId.MARE_SERENITATIS_B, ShipId.MARE_SERENITATIS_C],
    },
    {
        id: ShipId.MARE_SERENITATIS_B,
        name: 'マーレセレニタティス級　Ｂミサイル型',
        type: ShipType.FRIGATE,
        cost: 5,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.SUSTAINED_COMBAT],
        researchTacticTypes: [ResearchTacticType.PROJECTILE_WEAPONS],
        baseModelId: ShipId.MARE_SERENITATIS_A,
    },
    {
        id: ShipId.MARE_SERENITATIS_C,
        name: 'マーレセレニタティス級　Ｃ対空型',
        type: ShipType.FRIGATE,
        cost: 5,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.SUSTAINED_COMBAT],
        researchTacticTypes: [ResearchTacticType.PROJECTILE_WEAPONS],
        baseModelId: ShipId.MARE_SERENITATIS_A,
    },
];
