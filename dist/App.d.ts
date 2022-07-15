import { MouseEvent } from 'react';

declare function App({ width, height, draw, onClick, className }: {
    width?: number;
    height?: number;
    draw?: (canvasContext: CanvasRenderingContext2D) => void;
    onClick?: ({ event, canvas }: {
        event: MouseEvent;
        canvas: HTMLCanvasElement;
    }) => void;
    className?: string;
}): JSX.Element;

export { App as default };
