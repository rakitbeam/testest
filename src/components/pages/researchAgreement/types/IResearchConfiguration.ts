import { ResearchManufacturer } from '../../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../../types/ResearchTacticType';
import { IShipDefinition } from '../../../../types/ShipDefinition';

export interface IResearchConfiguration {
    filterState: IResearchFilterState;
    shipChances: IShipResearchChance[];
    totalShipChance: number;
    totalModuleChance: number;
    wishedShipChance: number;
    unwishedShipChance: number;
    techPointChance: number;
}

export interface IResearchFilterState {
    manufacturerFilter: ResearchManufacturer | null;
    strategyTypeFilter: ResearchStrategyType | null;
    tacticTypeFilter: ResearchTacticType | null;
}

export interface IShipResearchChance {
    shipDefinition: IShipDefinition;
    chance: number;
    formula: string;
    possessed: boolean;
    wished: boolean;
    unwished: boolean;
}