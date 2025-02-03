var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("magenta");
colorCircles[2] = document.getElementById("pink");
colorCircles[3] = document.getElementById("purple");
colorCircles[4] = document.getElementById("orange");
colorCircles[5] = document.getElementById("yellow");
colorCircles[6] = document.getElementById("cyan");
colorCircles[7] = document.getElementById("blue");
colorCircles[8] = document.getElementById("green");
colorCircles[9] = document.getElementById("black");

var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

var brushSize = 20; 

let brushShape = 'square'; 
let currentBrushShape = brushShape;

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#0F0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
        else if (e.target.id=="orange"){
			targetColor="#FFA500"
		}
        else if (e.target.id=="purple"){
			targetColor="#800080"
		}
        else if (e.target.id=="pink"){
			targetColor="#FFC0CB"
		}
        else if (e.target.id=="black"){
			targetColor="#000"
		}
		for (var i =0; i<=5; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}
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