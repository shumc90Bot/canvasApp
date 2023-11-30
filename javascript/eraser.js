/**********************************************
 * Eraser Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
class Eraser extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event) {
        this.strokeSize = 5;
        contextReal.clearRect(coord[0], coord[1], this.strokeSize, this.strokeSize)
    }
    onDragging(coord, event) {
        this.strokeSize = 5;
        contextReal.clearRect(coord[0], coord[1], this.strokeSize, this.strokeSize);
    }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}