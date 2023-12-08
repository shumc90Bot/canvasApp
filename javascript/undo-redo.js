/**********************************************
 * Undo & Redo Functionality
 ***********************************************/

// Array to save drawn path
let undoStack = [];
let redoStack = [];

function saveStroke() {
    let lastMove = canvasReal.toDataURL();
    undoStack.push(lastMove);
    redoStack = [];
}

$("#undo").click(undo);

function undo() {
    if (undoStack.length === 0) {
        return;
    } else if (undoStack.length === 1) {
        contextReal.fillStyle = "#ffffff";
        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
    } else if (undoStack.length > 1) {
        contextReal.fillStyle = "#ffffff";
        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
        let undoImg = new Image();
        undoImg.src = undoStack[undoStack.length - 2];
        undoImg.onload = function () {
            contextReal.drawImage(undoImg, 0, 0);
        };
    }
    redoStack.push(undoStack.pop());
}

$("#redo").click(redo);

function redo() {
    if (redoStack.length === 0) {
        return;
    } else if (redoStack.length > 0) {
        contextReal.fillStyle = "#ffffff";
        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
        let redoImg = new Image();
        redoImg.src = redoStack[redoStack.length - 1];
        redoImg.onload = function () {
            contextReal.drawImage(redoImg, 0, 0);
        };
        undoStack.push(redoStack.pop());
    }
}
