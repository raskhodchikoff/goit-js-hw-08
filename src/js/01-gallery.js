import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Create markup

function createGalleryMarkup(items) {
  return items
    .map(item => {
      return `
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    `;
    })
    .join('');
}

// Add markup in DOM

gallery.innerHTML = createGalleryMarkup(galleryItems);

// SimpleLightbox

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
