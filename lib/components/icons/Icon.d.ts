import { default as React } from 'react';
export interface IconComponentProps {
    name: string;
    className?: string;
    onClick?: React.MouseEventHandler<SVGElement>;
}
declare function IconComponent(props: IconComponentProps): import("react/jsx-runtime").JSX.Element | null;
export { IconComponent };
