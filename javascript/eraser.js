/**********************************************
 * Eraser Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
class Eraser extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        // Width of line
        this.strokeSize = 5;
        // Drawing the line here
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        // Turn on the eraser
        this.context.globalCompositeOperation = "destination-out";
    }

    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }

    onMouseUp(coord) {
        // Turn off the eraser
        this.context.globalCompositeOperation = "source-over";
    }
    onMouseLeave() {
        // Turn off the eraser
        this.context.globalCompositeOperation = "source-over";
    }
    onMouseEnter() { }

    draw(x, y) {
        //
        this.context.lineTo(x, y);
        // Draw the line onto the page
        this.context.stroke();
    }
}