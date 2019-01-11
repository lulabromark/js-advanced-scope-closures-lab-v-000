function produceDrivingRange(range) {
  return function (start, end) {
    let distance = Math.abs(start.slice(0, 2) - end.slice(0, 2));
    let inRange = Math.abs(range - distance);

    if (distance > range) {
      return `${inRange} blocks out of range`;
    }
    else {
      return `within range by ${inRange}`
    }
  }
}

function produceTipCalculator(percent) {
  return function (fare) {
    return percent * fare;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}