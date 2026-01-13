//your code here
const images = document.querySelectorAll(".image");

// assign ids div1 to div6 (required by CSS)
images.forEach((div, index) => {
  div.id = `div${index + 1}`;
});

let draggedElement = null;

// add drag events
images.forEach(div => {
  div.addEventListener("dragstart", dragStart);
  div.addEventListener("dragover", dragOver);
  div.addEventListener("drop", drop);
  div.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  draggedElement = this;
  this.classList.add("selected");
}

function dragOver(e) {
  e.preventDefault(); // allow drop
}

function drop(e) {
  e.preventDefault();

  if (draggedElement === this) return;

  // swap background images
  const bg1 = draggedElement.style.backgroundImage;
  const bg2 = this.style.backgroundImage;

  draggedElement.style.backgroundImage = bg2;
  this.style.backgroundImage = bg1;
}

function dragEnd() {
  this.classList.remove("selected");
}
