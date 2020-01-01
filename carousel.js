let photoIndex = 1;
const carousel = document.querySelector(".carousel");
const photos = document.querySelectorAll(".photo");
const photoWidth = photos[0].getBoundingClientRect().width;
const prevBtn = document.querySelector("#leftArrowContainer");
const nextBtn = document.querySelector("#rightArrowContainer");
const pauseBtn = document.querySelector("#pause");
const playBtn = document.querySelector("#play");
let paused = false;

prevBtn.addEventListener("click", () => {
  changePhoto(-1);
  clearInterval(interval);
  interval = setInterval(changePhoto, 2500, 1);
  });

nextBtn.addEventListener("click", () => {
  changePhoto(1);
  clearInterval(interval);
  interval = setInterval(changePhoto, 2500, 1);
  });

carousel.addEventListener("transitionend", reset);
pauseBtn.addEventListener("click", pause);
playBtn.addEventListener("click", play);

function changePhoto(n) {
  if (photoIndex <= 0) {return}
  if (photoIndex >= photos.length-1) {return}

  photoIndex += n;
  carousel.style.transition = "580ms transform ease-in-out";
  const translationAmount = -photoWidth * photoIndex;
  carousel.style.transform = `translateX(${translationAmount}px)`;
}

// Reset the carousel position when the beginning or end of the carousel is reached:
function reset() {
  if (photoIndex === 0) {
    photoIndex = photos.length-2;
    const translationAmount = -photoWidth * photoIndex;
    carousel.style.transform = `translateX(${translationAmount}px)`;
    carousel.style.transition = "none";
  }
  if (photoIndex === photos.length-1) {
    photoIndex = 1;
    const translationAmount = -photoWidth * photoIndex;
    carousel.style.transform = `translateX(${translationAmount}px)`;
    carousel.style.transition = "none";
  }
}

// Set starting position of carousel:
const translationAmount = -photoWidth * photoIndex;
carousel.style.transform = `translateX(${translationAmount}px)`;

// Left and right keys:
document.onkeydown = function(event) {
  if (event.keyCode == 37) {
    changePhoto(-1);
    clearInterval(interval);
    interval = setInterval(changePhoto, 2500, 1);
  }
  if (event.keyCode == 39) {
    changePhoto(1);
    clearInterval(interval);
    interval = setInterval(changePhoto, 2500, 1);
  }
}

// Automatically start slideshow:
let interval = setInterval(changePhoto, 2500, 1);

function pause() {
  clearInterval(interval);
  paused = true;
}

function play() {
  if (paused === true) {
  interval = setInterval(changePhoto, 2500, 1);
  }
  paused = false;
}