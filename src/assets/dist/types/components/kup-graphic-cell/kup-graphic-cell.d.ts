import { GraphicElement, Color } from './kup-graphic-cell-declarations';
export declare class KupGraphicCell {
    value: string;
    height: number;
    width: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    graphic_element_marker_splitter: string;
    graphic_element_splitter: string;
    background_color: string;
    default_color: Color;
    onValueChange(): void;
    componentDidLoad(): void;
    private draw;
    private drawGraphicCell;
    isShapeMarker(value: string): boolean;
    isBgColorMarker(value: string): boolean;
    isHeightMarker(value: string): boolean;
    isDecoratorMarker(value: string): boolean;
    getDim(dimPixel: number, dimPerc: number): number;
    getNewStarXFromBar(startX: number, elem: GraphicElement): number;
    getNewStarXFromCircle(startX: number, circle: GraphicElement): number;
    getNewStarXFromTril(startX: number, triLeft: GraphicElement): number;
    getNewStarXFromTrir(startX: number, triRight: GraphicElement): number;
    drawArc(x: number, radius: number, color: Color): void;
    drawRect(x: number, y: number, width: number, height: number, color: Color): void;
    drawTri(x1: number, y1: number, x2: number, y2: number, color: Color): void;
    drawArrow(sep: string): void;
    drawGrid(sep: string): void;
    drawSeparator(sep: string): void;
    render(): any;
}
