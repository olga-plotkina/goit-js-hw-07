import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

const renderGallery = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => 
    `<a class="gallery__item" href="${original}"> 
             <img class="gallery__image" 
                src="${preview}"
                alt="${description}"> 
    </a>
    `).join('');
};

galleryDiv.innerHTML = renderGallery(galleryItems);


let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});




// console.log(lightbox.captionData);