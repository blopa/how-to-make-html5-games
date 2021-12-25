var canvas = document.getElementById("myCanvas");
// console.log(canvas);
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";
// context.fillRect(0, 0, 50, 40);

canvas.onpointerdown = function(event) {
  canvas.onpointermove = function(event) {
    context.fillRect(
      event.layerX,
      event.layerY,
      5,
      5
    );
  }
}

canvas.onpointerup = function(event) {
  canvas.onpointermove = null;
}
