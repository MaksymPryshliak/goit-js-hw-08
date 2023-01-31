import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
      <img class="gallery__image" 
      src=${preview} 
      alt=${description} />
    </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
