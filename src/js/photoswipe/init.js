import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe')
});
lightbox.init();

document.addEventListener("DOMContentLoaded", function() {
  // Get all images within an anchor tag on the page
  const images = document.querySelectorAll('a > img');

  images.forEach(img => {
      // Make sure image is fully loaded before getting dimensions
      if (img.complete) {
          addDimensionsToParentLink(img);
      } else {
          img.onload = () => {
              addDimensionsToParentLink(img);
          };
      }
  });
});

function addDimensionsToParentLink(img) {
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  const parentLink = img.parentElement;

  if (parentLink && parentLink.tagName === 'A') {
      parentLink.setAttribute('data-pswp-width', width);
      parentLink.setAttribute('data-pswp-height', height);
  }
}
