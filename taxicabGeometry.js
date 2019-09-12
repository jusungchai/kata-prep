const blocksAway = function (directions) {
  let deltaX = 0, deltaY = 0;
  let direction = (directions[0] == "right" ? "north" : "east");
  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] == "right") {
      if (direction == "north") {
        deltaX += directions[i + 1];
        direction = "east";
      }
      else if (direction == "south") {
        deltaX -= directions[i + 1];
        direction = "west";
      }
      else if (direction == "east") {
        deltaY -= directions[i + 1];
        direction = "south";
      }
      else {
        deltaY += directions[i + 1];
        direction = "north";
      }
    }
    else {
      if (direction == "north") {
        deltaX -= directions[i + 1];
        direction = "west";
      }
      else if (direction == "south") {
        deltaX += directions[i + 1];
        direction = "east";
      }
      else if (direction == "east") {
        deltaY += directions[i + 1];
        direction = "north";
      }
      else {
        deltaY -= directions[i + 1];
        direction = "south";
      }
    }
  }
  return { "east": deltaX, "north": deltaY };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));