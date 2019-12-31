let photoIndex = 1;
const carousel = document.querySelector(".carousel");
const photos = document.querySelectorAll(".photo");
const photoWidth = photos[0].getBoundingClientRect().width;
const prevBtn = document.querySelector("#leftArrowContainer");
const nextBtn = document.querySelector("#rightArrowContainer");

prevBtn.addEventListener("click", function(){changePhoto(-1)});
nextBtn.addEventListener("click", function(){changePhoto(1)});
carousel.addEventListener("transitionend", reset);

function changePhoto(n) {
  photoIndex += n;
  carousel.style.transition = "450ms transform ease";
  const translationAmount = -photoWidth * photoIndex;
  carousel.style.transform = `translateX(${translationAmount}px)`;
  console.log(photoIndex);
}

// Reset the carousel position when the beginning or end of the carousel is reached:
function reset() {
  if (photoIndex <= 0) {
    photoIndex = photos.length-2;
    const translationAmount = -photoWidth * photoIndex;
    carousel.style.transform = `translateX(${translationAmount}px)`;
    carousel.style.transition = "none";
  }
  if (photoIndex >= photos.length-1) {
    photoIndex = 1;
    const translationAmount = -photoWidth * photoIndex;
    carousel.style.transform = `translateX(${translationAmount}px)`;
    carousel.style.transition = "none";
  }
}

// Set starting position of carousel:
const translationAmount = -photoWidth * photoIndex;
carousel.style.transform = `translateX(${translationAmount}px)`;