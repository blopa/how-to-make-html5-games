var canvas = document.getElementById("myCanvas");
// console.log(canvas);
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";

var heroPosition = { x: 50, y: 50 };
var speed = 3;
context.fillRect(
  heroPosition.x,
  heroPosition.y,
  5,
  5
);

var itemPosition = {
  x: Math.floor(Math.random() * canvas.width),
  y: Math.floor(Math.random() * canvas.height),
};
context.fillRect(
  itemPosition.x,
  itemPosition.y,
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
      heroPosition.y = heroPosition.y - speed;
      break;
    }

    case 'ArrowDown': {
      heroPosition.y = heroPosition.y + speed;
      break;
    }

    case 'ArrowLeft': {
      heroPosition.x = heroPosition.x - speed;
      break;
    }

    case 'ArrowRight': {
      heroPosition.x = heroPosition.x + speed;
      break;
    }
  }

  context.fillRect(
    heroPosition.x,
    heroPosition.y,
    5,
    5
  );

  context.fillRect(
    itemPosition.x,
    itemPosition.y,
    5,
    5
  );

  if (
    heroPosition.x < itemPosition.x + 5
    && heroPosition.x > itemPosition.x - 5
    && heroPosition.y < itemPosition.y + 5
    && heroPosition.y > itemPosition.y - 5
  ) {
//    console.log("touch");
    context.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    context.fillRect(
      heroPosition.x,
      heroPosition.y,
      5,
      5
    );

    itemPosition = {
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
    };

    context.fillRect(
      itemPosition.x,
      itemPosition.y,
      5,
      5
    );
  }
}

