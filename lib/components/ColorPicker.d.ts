import { default as React } from 'react';
export interface ColorPickerProps {
    disabled?: boolean;
    colors?: string[];
    children: React.ReactNode;
    onChange?: (color: string | undefined) => void;
    value?: string;
    highlight?: boolean;
}
declare function ColorPicker(props: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
export { ColorPicker };
