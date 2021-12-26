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

// points
var points = 0;

// pipes
function getRandomNum() {
  var rand = Math.floor(
    Math.random() * canvas.height
  );

  return Math.min(canvas.height - holeSize, rand);
}

var pipeWidth = 20
var holeSize = 80;
var initialHoles = [
  { x: 100, y: 50 },
  { x: 200, y: 100 },
  { x: 300, y: getRandomNum() },
  { x: 400, y: getRandomNum() },
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
      hole.y = getRandomNum();
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

    if (
      heroPosition.x < hole.x + pipeWidth
      && heroPosition.x > hole.x
    ) {
      if (heroPosition.y < hole.y + holeSize
        && heroPosition.y > hole.y
      ) {
        points = points + 1;
      } else {
        points = 0;
      }
    }
  });

  context.fillRect(
    heroPosition.x,
    heroPosition.y,
    heroSize,
    heroSize
  );

  context.font = "30px Arial";
  context.fillText(points, 25, 25);
}, 1000 / 60);
