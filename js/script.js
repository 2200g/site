(function () {
  const IMAGE_DIR = '/pics/';
  const IMAGE_MIN = 1000;
  const IMAGE_MAX = 1022;
  const GALLERY_COUNT = 3;

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomImageSrc() {
    return IMAGE_DIR + randomInt(IMAGE_MIN, IMAGE_MAX) + '.jpg';
  }

  function buildGallery(container) {
    for (var i = 0; i < GALLERY_COUNT; i++) {
      var img = document.createElement('img');
      img.src = getRandomImageSrc();
      img.alt = 'random aesthetic pic';
      img.width = 237;
      img.height = 237;
      container.appendChild(img);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.getElementById('img-gallery');
    if (gallery) {
      buildGallery(gallery);
    }
  });
})();
