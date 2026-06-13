interface IPropsLinkEditBlock {
    editor: any;
    onSetLink: (link: string, text?: string, openInNewTab?: boolean) => void;
    open?: boolean;
    target?: string;
    onClose?: () => void;
}
declare function LinkEditBlock(props: IPropsLinkEditBlock): import("react/jsx-runtime").JSX.Element;
export default LinkEditBlock;
