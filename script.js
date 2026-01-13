//your code here
const images = document.querySelectorAll(".image");

// Assign ids required by CSS
images.forEach((div, index) => {
  div.id = `div${index + 1}`;
});

let draggedElement = null;

images.forEach(div => {
  div.addEventListener("dragstart", dragStart);
  div.addEventListener("dragover", dragOver);
  div.addEventListener("drop", drop);
  div.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  draggedElement = this;

  // REQUIRED for drop to work
  e.dataTransfer.setData("text/plain", "");

  this.classList.add("selected");
}

function dragOver(e) {
  e.preventDefault(); // MUST be here
}

function drop(e) {
  e.preventDefault();

  if (!draggedElement || draggedElement === this) return;

  // Swap background images
  const draggedBg = draggedElement.style.backgroundImage;
  const targetBg = this.style.backgroundImage;

  draggedElement.style.backgroundImage = targetBg;
  this.style.backgroundImage = draggedBg;
}

function dragEnd() {
  this.classList.remove("selected");
  draggedElement = null;
}

