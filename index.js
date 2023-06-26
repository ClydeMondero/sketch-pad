function renderPad(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      row.appendChild(square);
    }
    sketchPad.appendChild(row);
  }
}

function draw() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
}

function erase() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "white";
    });
  });
}

function resizePad() {
  size = prompt("Enter new sketch-pad size");

  if (size > 40) {
    alert("Sketch-pad size is too big!");
    return;
  }

  sketchPad.replaceChildren();

  renderPad(size);
}

function clearPad() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

const sketchPad = document.querySelector(".sketch-pad");

let size = 16;

renderPad(size);

const pencil = document.querySelector("#pencil");

pencil.addEventListener("click", draw);

const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", erase);

const clear = document.querySelector("#clear");

clear.addEventListener("click", clearPad);

const resize = document.querySelector("#resize");
resize.addEventListener("click", resizePad);
