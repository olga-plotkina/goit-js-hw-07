import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const renderGallery = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}"> 
             <img class="gallery__image" 
                src="${preview}"
                data-source="${original}" 
                alt="${description}"> 
        </a>
    </div>
    `).join('');
};

galleryDiv.innerHTML = renderGallery(galleryItems);

// const imageRef = document.querySelector('.gallery__image');



const openModalOnclick = (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
    <img
    src="${event.target.dataset.source}">
    </div>
`, {closable: true});

    
    instance.show();

    if (basicLightbox.visible) {
        const modalRef = document.querySelector('.modal');
        modalRef.addEventListener('click', (event) => {
            instance.close()}); 
    }
}

galleryDiv.addEventListener('click', openModalOnclick);



