let Boxes = document.querySelectorAll(".childboxes");
let Winner = document.getElementById("Winner");
let reset = document.getElementById("btn");
let start = document.getElementById("start");

let TrueValue = true;

let CheckIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame() {
  Boxes.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.innerHTML == "") {
        if (TrueValue) {
          element.innerHTML = "O";
          element.style.color = "red";
        } else {
          element.innerHTML = "X";
          element.style.color = "green";
        }
        TrueValue = !TrueValue;

        // call the FindIndex function

        FindIndex();

        // reset all Elements

        reset.addEventListener("click", function () {
          element.innerHTML = "";
          Winner.innerHTML = "Start The Game";
        });
      }
    });
  });
}

function FindIndex() {
  for (let x in CheckIndex) {
    let pos1val = Boxes[CheckIndex[x][0]].innerHTML;
    let pos2val = Boxes[CheckIndex[x][1]].innerHTML;
    let pos3val = Boxes[CheckIndex[x][2]].innerHTML;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        Winner.innerText = `Congratulation  Winner is ${pos1val} 💪`;
        alert(`Congratulation  Winner is ${pos1val}`);
        Boxes.forEach((element) => {
          element.innerHTML = "";
        });
      }
    }
  }
}

start.addEventListener("click", startGame);
