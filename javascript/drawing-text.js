class DrawingText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.textX = [];
        this.textY = [];
    }

    onMouseDown(coord, event) {
        this.contextReal.font = "25px Arial";
        this.textX.push(coord[0]);
        this.textY.push(coord[1]);
        $('#textInput').css({ "display": "block", "transform": "translateY(" + coord[1] + "px) translateX(" + coord[0] + "px)" });
        //If user click outside the input box, text will be printed on the canvas real
        if ((this.textX.length > 1) && (event.target.id != $('#textInput'))) {
            let inputText = $('#textInput').val();
            contextReal.fillText(inputText, this.textX[0], this.textY[0]);
            $('#textInput').css({ "display": "none" });
            $('#textInput').val('');
            this.textX = [];
            this.textY = [];
        }
    }
    onMouseUp() {
        // Save the drwan paht in undo.js' Undo stack
        saveStroke();
    }
}