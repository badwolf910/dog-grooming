var i = 0;
var images = [];
var time = 2400;

images[0] = 'images/dog1.jpg';
images[1] = 'images/dog2.jpg';
images[2] = 'images/dog3.jpg';
images[3] = 'images/dog4.jpg';
images[4] = 'images/dog-6.jpg';

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;
