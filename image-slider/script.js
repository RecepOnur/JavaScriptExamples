const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper span");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false,
  PrevPageX,
  PrevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener(
    "click",
    () =>
      (carousel.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth)
  );
});

const DragStart = (e) => {
  isDragStart = true;
  PrevPageX = e.pageX;
  PrevScrollLeft = carousel.scrollLeft;
};

const dragImage = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let PositionDiff = e.pageX - PrevPageX;
  carousel.scrollLeft = PrevScrollLeft - PositionDiff;
};

const DragStop = (e) => {
  isDragStart = false;
};

carousel.addEventListener("mousemove", dragImage);
carousel.addEventListener("mousedown", DragStart);
carousel.addEventListener("mouseup", DragStop);
