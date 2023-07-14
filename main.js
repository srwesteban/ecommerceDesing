const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

// botones de mas y menos
let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

// agrear total de productos al carrito

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  drawProductInModal();
});

//  mostar el modal del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");

const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");
  if (lastValue === 0) {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  } else {
    drawProductInModal();
  }
  priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue *
    125}.00</span>`;
});

//borrar el contenido de el carrito

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");
  deleteProductBtn.addEventListener("click", () => {
    lastValue = 0;
    cartNotification.innerText = lastValue;
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
  });
}

function drawProductInModal() {
  productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
        <p class="cart-modal__product">Autumn Limited edition...</p>
        <p class="cart-modal__price">$125 x0 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="icon-delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;

  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue *
    125}.00</span>`;
}









//cambiar imagenes cuando se presionen las flechas

const imageContainer = document.querySelector(".gallery__image-container");
const previousBtnGallery = document.querySelector(".gallery__previous");
const nextBtnGallery = document.querySelector(".gallery__next");
let imgeIndex = 1;

previousBtnGallery.addEventListener("click", () => {
  changeImagePrevious(imageContainer);
});

nextBtnGallery.addEventListener("click", () => {
  changeImageNext(imageContainer);
});

function changeImageNext(imageContainer) {
  if (imgeIndex === 4) {
    imgeIndex = 1;
  } else {
    imgeIndex++;
  }
  imageContainer.style.backgroundImage = `url("../images/image-product-${imgeIndex}.jpg")`;
}
function changeImagePrevious(imageContainer) {
  if (imgeIndex === 1) {
    imgeIndex = 4;
  } else {
    imgeIndex--;
  }
  imageContainer.style.backgroundImage = `url("../images/image-product-${imgeIndex}.jpg")`;

}

//cambiar imagenes cuando se presionen las imagenes galeria normal

let galerySmallIcon = document.querySelectorAll('.gallery__thumbnails');
galerySmallIcon = [...galerySmallIcon];

galerySmallIcon.forEach(imagen=>{
  imagen.addEventListener('click', evento=>{
    console.log(evento.target.id);

    imageContainer.style.backgroundImage = `url("../images/image-product-${evento.target.id}.jpg")`;
  })

})








// mostrar modal gallery

const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  
  //imagesModal.style.display = "grid";
});

closeModalBtn.addEventListener("click", () => {
  imagesModal.style.display = "none";
});

// imagenes thumbanails

let thumbnails = document.querySelectorAll(".modal-gallery__thumbnails");
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", evento => {
    imageContainerModal.style.backgroundImage = `url("../images/image-product-${evento
      .target.id.slice(-1)}.jpg")`;
  });
});


//cambiar imagenes desde las flechas del modal
const imageContainerModal = document.querySelector('.modal-gallery__image-container')
const previousModalBtn = document.querySelector(".modal-gallery__previous");
const nextModalBtn = document.querySelector(".modal-gallery__next");

previousModalBtn.addEventListener("click", () => {
  changeImagePrevious(imageContainerModal);
});
nextModalBtn.addEventListener("click", () => {
  changeImageNext(imageContainerModal);
});

//mostar el navbar con el boton de hamburgesa

const burgerBtn = document.querySelector(".header__menu");
let modalNavbar = document.querySelector(".modal-navbar__background");
const modalNavbarClose = document.querySelector(".modal-navbar__close-icon");
burgerBtn.addEventListener("click", () => {
  modalNavbar.style.display = "block";
});

modalNavbarClose.addEventListener("click", () => {
  modalNavbar.style.display = "none";
});
