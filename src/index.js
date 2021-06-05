import "./styles.css";

// Input for Plane Seating arrangement
const planeSeating = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4]
];

// Input for no of passengers to be seated
let noOfPassenger = 30;
// To get final result of seating arrangement
let planeSeats = [];
// to get total no of Window-W, Aisle-A, Middle-M in a plane
let totalSeats = {};
document.write("Initial Plane Seating Arrangement");
document.write("<br>");
document.write("<br>");
// Seating arrangement with differentiating Window-W, Aisle-A, Middle-M in a plane
planeSeating.forEach((item, index) => {
  planeSeats[index] = [];
  for (let i = 1; i <= item[1]; i++) {
    planeSeats[index][i] = [];
    for (let j = 1; j <= item[0]; j++) {
      // Setting up window seating for first and last row of a plane
      if (index === 0 && j === 1) {
        planeSeats[index][i][j] = "W";
      } else if (index === item.length + 1 && item[0] === j) {
        planeSeats[index][i][j] = "W";
      }
      // Setting up Aisle seating for rest of plane apart from middle
      else if (j === 1 || j === item[0]) {
        planeSeats[index][i][j] = "A";
      } else {
        planeSeats[index][i][j] = "M";
      }
      totalSeats[planeSeats[index][i][j]] = totalSeats[planeSeats[index][i][j]]
        ? ++totalSeats[planeSeats[index][i][j]]
        : 1;
      document.write(planeSeats[index][i][j] + " ");
    }
    document.write("<br>");
  }
  document.write("<br>");
});
document.write("<hr>");
document.write("Passanger Plane Seating Arrangement");
document.write("<br>");
document.write("<br>");
// Calculatin from which number seating should starts from each Seating Type
let passengerSeatsStarsfrom = {
  A: 1,
  W: noOfPassenger - totalSeats["A"] > 0 ? totalSeats["A"] + 1 : 0,
  M:
    noOfPassenger - totalSeats["A"] - totalSeats["W"] > 0
      ? totalSeats["A"] + totalSeats["W"] + 1
      : 0
};

// Replacing Seating Type with the apropriate passangers
let arrangedSeat = [];
planeSeats.forEach((ele, index) => {
  arrangedSeat[index] = [];
  ele.forEach((item, i) => {
    arrangedSeat[index][i] = [];
    item.forEach((element, j) => {
      if (
        element === "A" &&
        passengerSeatsStarsfrom?.A &&
        passengerSeatsStarsfrom?.A <=
          (passengerSeatsStarsfrom?.M
            ? passengerSeatsStarsfrom?.M - 1
            : noOfPassenger)
      ) {
        arrangedSeat[index][i][j] = passengerSeatsStarsfrom?.A;
        passengerSeatsStarsfrom["A"] = passengerSeatsStarsfrom?.A + 1;
      }
      if (
        element === "W" &&
        passengerSeatsStarsfrom?.W &&
        passengerSeatsStarsfrom?.W <=
          (passengerSeatsStarsfrom?.M
            ? passengerSeatsStarsfrom?.M - 1
            : noOfPassenger)
      ) {
        arrangedSeat[index][i][j] = passengerSeatsStarsfrom?.W;
        passengerSeatsStarsfrom["W"] = passengerSeatsStarsfrom?.W + 1;
      }
      if (
        element === "M" &&
        passengerSeatsStarsfrom?.M &&
        passengerSeatsStarsfrom?.M <= noOfPassenger
      ) {
        arrangedSeat[index][i][j] = passengerSeatsStarsfrom?.M;
        passengerSeatsStarsfrom["M"] = passengerSeatsStarsfrom?.M + 1;
      }
      arrangedSeat[index][i][j] = arrangedSeat[index][i][j]
        ? arrangedSeat[index][i][j]
        : "NA";
      document.write(arrangedSeat[index][i][j] + " ");
    });
    document.write("<br>");
  });
  document.write("<br>");
});
