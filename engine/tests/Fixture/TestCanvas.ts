import { createCanvas } from "canvas";

import { Container } from "../../src/Core/Container";
import { Canvas } from "../../src/Core/Canvas";

export class TestCanvas {
    canvas: Canvas;
    private container: Container;

    constructor(container: Container, width: number, height: number) {
        const newCanvas = createCanvas(width, height) as any;
        newCanvas.offsetHeight = newCanvas.height;
        newCanvas.offsetWidth = newCanvas.width;
        newCanvas.style = {
            backgroundColor: "",
        };
        this.container = container;
        this.canvas = container.canvas;
        this.canvas.loadCanvas(newCanvas as HTMLCanvasElement);
    }

    /**
     * If [[container]] is provided, then the new particle will be initialized with
     * this [[container]]. Otherwise the last-used [[container]] will be used.
     *
     * @param width
     * @param height
     * @param container
     */
    reset(width: number, height: number, container?: Container): void {
        if (container !== undefined) {
            this.container = container;
        }
        const newCanvas = createCanvas(width, height) as any;
        newCanvas.offsetHeight = newCanvas.height;
        newCanvas.offsetWidth = newCanvas.width;
        newCanvas.style = {
            backgroundColor: "",
        };
        this.canvas = this.container.canvas;
        this.canvas.loadCanvas(newCanvas as HTMLCanvasElement);
    }
}
