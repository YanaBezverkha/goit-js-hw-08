import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
  .map(
    img => `<li class="gallery__item">
<a class="gallery__link" href="${img.original}"">
  <img
    class="gallery__image"
    src="${img.preview}"
    alt="${img.description}"
  />
</a>
</li> `
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkUp);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function onCloseModal(event) {
  if (event.key === 'Escape') {
    instance.close();
  }
});