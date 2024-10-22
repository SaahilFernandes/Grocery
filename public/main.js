let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
// span[1].onclick = () => { right_mover(); }
// span[0].onclick = () => { left_mover(); }

let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Iphone 14 pro max",
    tag: "14 pro max",
    price: 1190,
    inCart: 0,
    image: "images/14 pro max.jpeg",
  },
  {
    name: "Iphone 14",
    tag: "14",
    price: 999,
    inCart: 0,
    image: "images/14.jpeg",
  },
  {
    name: "Samsung flip z",
    tag: "flip z",
    price: 680,
    inCart: 0,
    image: "images/flip z.jpeg",
  },
  {
    name: "Samsung flod 3",
    tag: "flod 3",
    price: 1150,
    inCart: 0,
    image: "images/fold 3.jpeg",
  },
  {
    name: "Iphone 5s",
    tag: "iphonw 5s",
    price: 250,
    inCart: 0,
    image: "images/iphonw 5s.png",
  },
  {
    name: "MI 11 Ultra",
    tag: "mi 11 ultra",
    price: 450,
    inCart: 0,
    image: "images/mi 11 ultra.jpeg",
  },
  {
    name: "Motorola 5g",
    tag: "motorola",
    price: 350,
    inCart: 0,
    image: "images/motorola.png",
  },
  {
    name: "Google Pixel 5g",
    tag: "pixel",
    price: 850,
    inCart: 0,
    image: "images/pixel.png",
  },
  {
    name: "Samsung s22 Ultra",
    tag: "s22 ultra",
    price: 1120,
    inCart: 0,
    image: "images/s22 ultra.jpeg",
  },
  {
    name: "Realme GT2",
    tag: "realme gt2",
    price: 480,
    inCart: 0,
    image: "images/realme gt2.png",
  },
  {
    name: "Iwatch 7 series",
    tag: "Product-item6",
    price: 500,
    inCart: 0,
    image: "images/product-item6.jpg",
  },
  {
    name: "Iwatch series 8",
    tag: "Product-item7",
    price: 600,
    inCart: 0,
    image: "images/product-item7.jpg",
  },
  {
    name: "Iwatch ultra",
    tag: "Product-item8",
    price: 900,
    inCart: 0,
    image: "images/product-item8.jpg",
  },
  {
    name: "Samsung galaxy 5",
    tag: "Product-item9",
    price: 550,
    inCart: 0,
    image:"images/product-item9.jpg",
  },
  {
    name: "Iwatch SE",
    tag: "Product-item10",
    price: 430,
    inCart: 0,
    image: "images/product-item10.jpg",
  },
  {
    name: "Air fryer",
    tag: "air fryer",
    price: 90,
    inCart: 0,
    image: "images/air fryer.jpeg",
  },
  {
    name: "Cooler",
    tag: "cooler",
    price: 120,
    inCart: 0,
    image: "images/cooler.png",
  },
  {
    name: "Electric cooker",
    tag: "electric cooker",
    price: 45,
    inCart: 0,
    image: "images/electric cooker.png",
  },
  {
    name: "Hand mixer",
    tag: "hand mixer",
    price: 60,
    inCart: 0,
    image: "images/hand mixer.jpeg",
  },
  {
    name: "Heater",
    tag: "heater",
    price: 70,
    inCart: 0,
    image: "images/heater.png",
  },
  {
    name: "Microwave",
    tag: "microwave",
    price: 150,
    inCart: 0,
    image: "images/microwave.jpeg",
  },
  {
    name: "Speaker",
    tag: "speaker",
    price: 180,
    inCart: 0,
    image: "images/speaker.png",
  },
  {
    name: "Toaster",
    tag: "toaster",
    price: 65,
    inCart: 0,
    image: "images/toaster.jpeg",
  },
  {
    name: "TV",
    tag: "tv",
    price: 700,
    inCart: 0,
    image: "images/tv.jpeg",
  },
  {
    name: "Vacum cleaner",
    tag: "vacum cleaner",
    price: 95,
    inCart: 0,
    image: "images/vacum cleaner.jpeg",
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    if (document.querySelector(".cart span"))
      document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    if (document.querySelector(".cart span"))
      document.querySelector(".cart span").textContent = productNumbers - 1;
    console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    if (document.querySelector(".cart span"))
      document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    if (document.querySelector(".cart span")) document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="${
        item.image
      }" />
                <span class="sm-hide">${item.name}</span>
                <span class="price sm-hide">$${item.price}.00</span>
                <span class="quantity"><ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon><span>${
                  item.inCart
                }</span><ion-icon class="increase" name="arrow-dropright-circle"></ion-icon></span>
                <span class="total">$${item.inCart * item.price}.00</span>
            </div>`;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart}.00</h4>
            </div>
            `;
    deleteButtons();
    manageQuantity();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity = decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct =
        decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.textContent;

      console.log(currentProduct);
      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity = increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      console.log(
        increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.textContent
      );

      const productNameElement =
        increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.textContent;

      if (productNameElement) {
        currentProduct = productNameElement;
        console.log(currentProduct);

        if (cartItems[currentProduct]) {
          cartItems[currentProduct].inCart += 1;
          cartNumbers(cartItems[currentProduct]);
          totalCost(cartItems[currentProduct]);
          localStorage.setItem("productsInCart", JSON.stringify(cartItems));
          displayCart();
        } else {
          console.error("Product not found in cartItems");
        }
      } else {
        console.error("Product name element not found");
      }
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.querySelector(".sm-hide")?.textContent;

      console.log(productName);

      if (cartItems[productName]) {
        localStorage.setItem("cartNumbers", productNumbers - cartItems[productName].inCart);
        localStorage.setItem(
          "totalCost",
          cartCost - cartItems[productName].price * cartItems[productName].inCart
        );

        delete cartItems[productName];
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

        displayCart();
        onLoadCartNumbers();
      } else {
        console.error(`Product "${productName}" not found in cart.`);
      }
    });
  }
}

function clearall() {
  let cartItems = localStorage.getItem("productsInCart");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);
  localStorage.setItem("totalCost", 0);
  productNumbers = parseInt(productNumbers);
  localStorage.setItem("cartNumbers", 0);
  localStorage.setItem("productsInCart", null);
  cartItems = parseInt(cartItems);
  window.location.reload();

  onLoadCartNumbers();
  displayCart();
}
onLoadCartNumbers();
displayCart();
