import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

galleryContainer.addEventListener("click", onImagesContainerClick);

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

function onImagesContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src = "${selectedImage}" width = "600" height = "400">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(e) {
    if (e.code !== "Escape") return;

    instance.close();
  }
}
