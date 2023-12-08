/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingCurveLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.cp1 = false;
      this.cp2 = false;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = strokeColor;
      if (!this.cp1 && !this.cp2) {
        this.origX = coord[0];
        this.origY = coord[1];
      } 

    }
  
    onDragging(coord, event) {
      // Manipulating the context draft
      this.contextDraft.fillStyle = strokeColor;
      if (!this.cp1 && !this.cp2) {
        this.contextDraft.clearRect(0, 0,canvasDraft.width,canvasDraft.height);
        // Define a new path:
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY)
        this.contextDraft.bezierCurveTo(this.origX,this.origY,this.origX, this.origY,coord[0],coord[1]); 
        // Draw it
        this.contextDraft.stroke();
    } else if (this.cp1 && !this.cp2){
        this.contextDraft.clearRect(0, 0,canvasDraft.width,canvasDraft.height);
        // Define a new path:
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY)
        this.contextDraft.bezierCurveTo(coord[0],coord[1],coord[0],coord[1],this.x2,this.y2); 
        // Draw it
        this.contextDraft.stroke();
    } else if (!this.cp1 && this.cp2){
      this.contextDraft.clearRect(0, 0,canvasDraft.width,canvasDraft.height);
      // Define a new path:
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY)
      this.contextDraft.bezierCurveTo(this.xcp1,this.ycp1,coord[0],coord[1],this.x2,this.y2); 
      // Draw it
      this.contextDraft.stroke();
  }
  }
  
    onMouseMove() {}
  
    // Committing the element to the canvas
    onMouseUp(coord) {
        // Clearing the rectangle first
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if (!this.cp1 && !this.cp2) {
        this.contextDraft.clearRect(0, 0,canvasDraft.width,canvasDraft.height);
        // Define a new path:
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX, this.origY)
        this.contextDraft.bezierCurveTo(this.origX,this.origY,this.origX, this.origY,coord[0],coord[1]); 
        // Draw it
        this.contextDraft.stroke();
        this.x2 = coord[0];
        this.y2 = coord[1];
        this.cp1 = true;
    } else if (this.cp1 && !this.cp2){
      this.contextDraft.clearRect(0, 0,canvasDraft.width,canvasDraft.height);
      // Define a new path:
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY)
      this.contextReal.bezierCurveTo(coord[0],coord[1],coord[0],coord[1],this.x2,this.y2); 
      // Draw it
      this.contextReal.stroke();
      this.xcp1 = coord[0]
      this.ycp2 = coord[1]
      this.cp1 = false
      this.cp2 = true
  } 
}
    onMouseLeave() {}
    onMouseEnter() {}
  }
  