/**********************************************
 * Drawing Circle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
class DrawingCircle extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.fillStyle = strokeColor;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        // Manipulating the context draft
        this.contextDraft.fillStyle = strokeColor;
        // Allows you to actually draw out your squares
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
        this.contextDraft.checkAndDraw(
            this.origX,
            this.origY,
            coord[0],
            coord[1]
        );
    }

    onMouseMove() { }

    // Committing the element to the canvas
    onMouseUp(coord) {
        // Clearing the rectangle first
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        // Commit that drawing to context real
        // Without this commit, it won't actually draw
        this.contextDraft.checkAndDraw(
            this.origX,
            this.origY,
            coord[0],
            coord[1]
        );
    }
    onMouseLeave() { }
    onMouseEnter() { }
}