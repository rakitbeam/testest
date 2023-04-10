import { ReactNode, useMemo, useState, ComponentProps } from 'react';
import { Canvas } from '@react-three/fiber';
import { DebugProvider } from './context/DebugContext';
import { GridSizeProvider } from './context/GridSizeContext';
import { ThreeCanvasContainer } from './ThreeCanvasContainer';
import { CursorProvider } from './context/CursorContext';
import { ZoomLevelProvider } from './context/ZoomLevelContext';
import { IMapData } from './types/IMapContent';
import { translateSizeToGrid } from './utils/coordinateUtils';
import { CameraControls } from './3d/CameraControls';
import { degreesToRadians } from '../../../utils/math';
import { getRendeOrder } from './utils/renderOrder';

interface IProps {
    mapData: IMapData;
    children: ReactNode;
}

const DEFAULT_MAP_SIZE = 9000;

export const MapProviders = (props: IProps) => {
    const { mapData, children } = props;
    const [debug, setDebug] = useState<boolean>(false);
    const gridSize = translateSizeToGrid(mapData.size ?? DEFAULT_MAP_SIZE);

    const camera = useMemo(() => {
        const initialCameraDistance = gridSize;
        const cameraOptions: ComponentProps<typeof Canvas>['camera'] = {
            position: [
                // map is rotated by 6° on z-axis, 45° on x-axis
                // => x = tan(rad(5°)) * y, z = y
                Math.tan(degreesToRadians(-5)) * initialCameraDistance,
                -1 * initialCameraDistance,
                initialCameraDistance,
            ],
            zoom: 2,
            up: [0, 0, 1],
            far: 10000,
        };
        return cameraOptions;
    }, [gridSize]);

    return (
        <CursorProvider>
            <ZoomLevelProvider>
                <DebugProvider value={debug}>
                    <GridSizeProvider value={gridSize}>
                        <ThreeCanvasContainer>
                            <Canvas
                                camera={camera}
                                onDoubleClick={() => setDebug(x => !x)}
                            >
                                <CameraControls />
                                <color attach="background" args={['#292828']} />
                                <ambientLight intensity={0.1} />
                                {children}
                                {debug && (
                                    <axesHelper args={[10]} position={[0, 0, 0]} renderOrder={getRendeOrder('axesHelper')} />
                                )}
                            </Canvas>
                        </ThreeCanvasContainer>
                    </GridSizeProvider >
                </DebugProvider >
            </ZoomLevelProvider>
        </CursorProvider>
    );
};
