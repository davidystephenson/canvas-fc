import { MouseEvent } from 'react';

interface CanvasFcProps {
    width?: number;
    height?: number;
    draw?: (canvasContext: CanvasRenderingContext2D) => void;
    onClick?: ({ event, canvas }: {
        event: MouseEvent;
        canvas: HTMLCanvasElement;
    }) => void;
    className?: string;
}
declare function CanvasFc({ width, height, draw, onClick, className }: CanvasFcProps): JSX.Element;

export { CanvasFcProps, CanvasFc as default };
