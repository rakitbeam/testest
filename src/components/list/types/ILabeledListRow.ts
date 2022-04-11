import { ReactNode } from 'react';

export interface ILabeledListRow {
    key: string;
    value: ReactNode | ((verticalAlignment: boolean) => ReactNode);
    label: string;
    onClick?: () => void;
}