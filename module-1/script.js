var canvas = document.getElementById("myCanvas");
// console.log(canvas);
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";

var heroPosition = { x: 50, y: 50 };
context.fillRect(
  heroPosition.x,
  heroPosition.y,
  5,
  5
);


window.onkeydown = function(event) {
//  console.log(event);
  context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  switch (event.key) {
    case 'ArrowUp': {
      heroPosition.y = heroPosition.y - 1;
      break;
    }

    case 'ArrowDown': {
      heroPosition.y = heroPosition.y + 1;
      break;
    }

    case 'ArrowLeft': {
      heroPosition.x = heroPosition.x - 1;
      break;
    }

    case 'ArrowRight': {
      heroPosition.x = heroPosition.x + 1;
      break;
    }
  }

  context.fillRect(
    heroPosition.x,
    heroPosition.y,
    5,
    5
  );
}
