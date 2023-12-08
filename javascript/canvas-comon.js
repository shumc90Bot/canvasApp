/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let strokeWidth;
let strokeColor;

$(() => {
  $("#drawing-rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
  });
  $("#pen").click(() => {
    currentFunction = new Pen(contextReal);
  });
  $("#eraser").click(() => {
    currentFunction = new Eraser(contextReal);
  });
  currentFunction = new DrawingCircle(contextReal)
  $("#drawing-circle").click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
  });
  $("#drawing-text").click(() => {
    currentFunction = new DrawingText(contextReal, contextDraft);
  })
  currentFunction = new DrawingstraightLine(contextReal)
  $("#drawing-straightLine").click(() => {
    currentFunction = new DrawingstraightLine(contextReal, contextDraft);
  });
  currentFunction = new DrawingCurveLine(contextReal)
  $("#drawing-curveLine").click(() => {
    currentFunction = new DrawingCurveLine(contextReal, contextDraft);
  });

})

$("#canvas-draft").mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}
