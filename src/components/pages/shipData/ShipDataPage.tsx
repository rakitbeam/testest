import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { ShipDataTable } from './ShipDataTable';
import { ShipFilterState } from '../../filter/types/ShipFilterState';
import { createInitialShipFilterState, applyShipFilter } from '../../filter/filterUtils';
import { ShipDataActionBar } from './ShipDataActionBar';
import { shipDefinitions } from '../../../data/shipDefinitions';
import { createInitialColumnConfig } from '../../columns/columnConfigUtils';
import { IColumnConfig } from '../../columns/types/IColumnConfig';
import { Container } from '../../container/Container';
import { NavigationBar } from '../../navigation/NavigationBar';
import { PageFooter } from '../../footer/PageFooter';

export const ShipDataPage = () => {
    const [shipFilter, setShipFilter] = useState<ShipFilterState>(createInitialShipFilterState);
    const [columnConfig, setColumnConfig] = useState<IColumnConfig>(() => createInitialColumnConfig({
        name: true,
        row: true,
        type: true,
        cost: true,
        operationLimit: true,
    }));
    const filteredShipDefinitions = useMemo(() => applyShipFilter(shipDefinitions, shipFilter), [shipFilter]);

    const disableContainer = Object.values(columnConfig).filter(set => set).length > 3;

    return (
        <>
            <NavigationBar currentRoute="/shipData" />
            <ShipDataActionBar
                shipFilter={shipFilter}
                columnConfig={columnConfig}
                onFilterChange={setShipFilter}
                onColumnConfigChange={setColumnConfig}
            />
            <Container disabled={disableContainer}>
                <Box p={1}>
                    <ShipDataTable shipDefinitions={filteredShipDefinitions} columnConfig={columnConfig} />
                </Box>
            </Container>
            <PageFooter disableContainer={disableContainer} />
        </>
    );
};

export default ShipDataPage;
