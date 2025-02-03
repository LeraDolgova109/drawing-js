var colorCircles = document.querySelectorAll(".colorPicker");
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

canvas.addEventListener("mousemove", drawOnCanvas);

var brushSize = 20; 
let brushShape = 'square'; 
let currentBrushShape = brushShape;

document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.classList.contains("colorPicker")) {
        targetColor = e.target.getAttribute("data-color");

        colorCircles.forEach(function (circle) {
            circle.style.width = "50px";
            circle.style.height = "50px";
        });

        e.target.style.width = "80px";
        e.target.style.height = "80px";
    }
});
brushSizeInput.addEventListener("input", function () {
    brushSize = brushSizeInput.value;
});

brushShapeSelector.addEventListener("input", function () {
    currentBrushShape = brushShapeSelector.value;
});

function drawOnCanvas(e){
	if (e.which==1){
		if (currentBrushShape === 'square') {
            canvasContext.fillStyle = targetColor; 
            canvasContext.beginPath();
            canvasContext.rect(e.offsetX - brushSize / 2, e.offsetY - brushSize / 2, brushSize, brushSize);
            canvasContext.fill();
        } else if (currentBrushShape === 'round') {
            canvasContext.fillStyle = targetColor; 
            canvasContext.beginPath();
            canvasContext.arc(e.offsetX, e.offsetY, brushSize / 2, 0, Math.PI * 2);
            canvasContext.fill();
        }
	}
    
}