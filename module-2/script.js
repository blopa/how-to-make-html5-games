var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";

// hero
var heroSize = 5;
var heroPosition = { x: 50, y: 50 };

// physics
var gravity = 2;
var acceleration = 0;
var maxAcceleration = 12;

// controls
var actionKey = "Space";
var actionKeyPressed = false;
window.onkeydown = function(event) {
  actionKeyPressed = event.code === actionKey;
}

window.onkeyup = function(event) {
  actionKeyPressed = false;
}

// pipes
var pipeWidth = 20
var holeSize = 80;
var initialHoles = [
  { x: 100, y: 50 },
  { x: 200, y: 50 },
  { x: 300, y: 50 },
  { x: 400, y: 50 },
];

// this runs 60 times per second
window.setInterval(function() {
  context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );



  heroPosition.y = Math.min(
    canvas.height - heroSize,
    heroPosition.y + (gravity - acceleration)
  );

  if (actionKeyPressed) {
    actionKeyPressed = false;
    acceleration = gravity;
  }

  if (acceleration) {
    acceleration = Math.min(
      acceleration + 1,
      maxAcceleration
    );
  }

  if (
    acceleration === maxAcceleration
    || heroPosition.y < 0
  ) {
    acceleration = 0;
  }

  initialHoles.forEach(function (hole) {
    hole.x = hole.x - 1;

    if (hole.x + pipeWidth <= 0) {
      hole.x = canvas.width;
    }

    // fill a full height line
    context.fillRect(
      hole.x,
      0,
      pipeWidth,
      canvas.height
    );

    // clear rect inside the pipe lines
    context.clearRect(
      hole.x,
      hole.y,
      holeSize,
      holeSize
    );
  });

  context.fillRect(
    heroPosition.x,
    heroPosition.y,
    heroSize,
    heroSize
  );
}, 1000 / 60);
