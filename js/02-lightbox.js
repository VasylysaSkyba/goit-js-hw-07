import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      data-sourse = "${original}"
      alt="${description}"
       />
   </a>
</li>`;
    })
    .join("");
  return markup;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
