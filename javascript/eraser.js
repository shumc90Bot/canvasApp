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
        this.context.lineWidth = strokeWidth;
        // Drawing the line here
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        // Turn on the eraser
        this.context.globalCompositeOperation = "destination-out";
        // Point eraser
        this.context.clearRect(coord[0], coord[1], strokeWidth, strokeWidth);
    }

    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }

    onMouseUp(coord) {
        // Turn off the eraser
        this.context.globalCompositeOperation = "source-over";
        // Save the drwan paht in undo.js' Undo stack
        saveStroke();
    }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        //
        this.context.lineTo(x, y);
        // Draw the line onto the page
        this.context.stroke();
    }
}