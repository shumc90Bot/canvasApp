// Brush Width Scroll Bar
$('#brush-width').change(() => {
    strokeWidth = $('#brush-width').val();
    $("#brush-width-number").html($('#brush-width').val())
})

// Change Stroke Color

$('#colorStroke').change(() => {
 strokeColor = $(`#colorStroke`).val()
})

// Save Imgae function
$('#saveImg').click(() => {
    let saveImg = canvasReal.toDataURL();
    let a = document.createElement('a');
    a.download = 'untitled.jpeg';
    a.href = saveImg;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})


// Clear Canvas function
$("#clear").click(() => {
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
})