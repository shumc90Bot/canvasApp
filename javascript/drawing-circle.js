/**********************************************
 * Drawing Circle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
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
    // Define a new path:
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, coord[0] - this.origX, 0, 2 * Math.PI);
    this.contextDraft.fillStyle = strokeColor;
    this.contextDraft.fill();
    this.contextDraft.stroke();
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
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, coord[0] - this.origX, 0, 2 * Math.PI);
    this.contextReal.fillStyle = strokeColor;
    this.contextReal.fill();
    this.contextReal.stroke();
    // Save the drwan path in Undo stack of undo.js
    saveStroke();
  }
  onMouseLeave() { }
  onMouseEnter() { }
}
