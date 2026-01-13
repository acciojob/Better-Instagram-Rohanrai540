//your code here
let draggedImg = null;

const drags = document.querySelectorAll(".drag");

drags.forEach(drag => {

  drag.addEventListener("mousedown", () => {
    draggedImg = drag.querySelector("img");
  });

  drag.addEventListener("mouseup", () => {
    draggedImg = null;
  });

  drag.addEventListener("mousemove", () => {
    // Needed only for Cypress mouse simulation
  });
});

// swap images on drop
drags.forEach(drag => {
  drag.addEventListener("mouseup", () => {
    if (!draggedImg) return;

    const targetImg = drag.querySelector("img");
    if (targetImg === draggedImg) return;

    const temp = draggedImg.src;
    draggedImg.src = targetImg.src;
    targetImg.src = temp;
  });
});


