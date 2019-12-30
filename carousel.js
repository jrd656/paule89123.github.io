var photoIndex = 0;
var photos = document.querySelectorAll(".photo");

function showPhoto(index) {
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  photos[index].style.display = "block";
}

showPhoto(photoIndex);

function changePhoto(n) {
  photoIndex += n;
  if (photoIndex == photos.length) {
    photoIndex = 0;
  }
  if (photoIndex < 0) {
    photoIndex = photos.length-1;
  }
  showPhoto(photoIndex);
}