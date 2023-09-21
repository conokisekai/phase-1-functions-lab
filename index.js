// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  if (x === 42) {
    return 1;
  } else if (x > 42) {
    return x - 42; // +
  } else {
    return 42 - x;
  } //+
}

function distanceFromHqInFeet(y) {
  if (y === 42) {
    return 264;
  } else if (y > 42) {
    return (y - 42) * 264;
  } else return (42 - y) * 264;
}

function distanceTravelledInFeet(d1, d2) {
  if (d2 - d1 === 5) return 1320;

  else if (d2 > d1) {
    return (d2 - d1) * 264;
  }

  else return (d1 - d2) * 264;
}

function calculatesFarePrice(b, a) {
  let distance = distanceTravelledInFeet(b, a);

  if (distance <= 400) {
    return 0
  }
  else if (distance > 400 && distance <= 2000){
    return 0.02 * (distance - 400)
  }
  else if (distance >2000 && distance <= 2500){
    return 25
  }
  else return "cannot travel that far"
}
