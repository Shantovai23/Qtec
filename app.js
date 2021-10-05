const productElement = document.querySelector(".products");
const items = document.querySelector(".cart-iteams");
const leftItems = document.querySelector(".left-items");
const rightItems = document.querySelector(".right-items");
const test = document.querySelector(".test");

function fetchProducts() {
  products.map((product) => {
    productElement.innerHTML += `
     <div class="card card-shadow" style="width: 9rem;" onclick="addToCart(${
       product.id
     })" >
     <img src="${product.img}" class="card-img-top" alt="img-p">
     <div class="card-body">
      <h6 class="card-title">${product.name.substr(0, 12)}...</h6>
      </div>
    </div>
     `;
  });
}
fetchProducts();

let myCart = [];
function addToCart(id) {
  if (myCart.find((product) => product.id === id)) {
    alert("Sorry! product already in the cart");
  } else {
    const cartProduct = products.find((product) => product.id === id);
    myCart.push(cartProduct);
  }
  updateCart();
}

function updateCart() {
  CartItems();
  subtotal();
}
function CartItems() {
  items.innerHTML = "";
  myCart.map((item) => {
    items.innerHTML += `
    <div class='content py-2'>
    <span class='img-border'><img src="${item.img}"alt="img-p" style="width:30px;height:30px"></span>
    <span>${item.name}</span>
    <span>${item.price}</span>
    <span onclick="removeFromCart(${item.id})"><i class="far fa-trash-alt"></i></span>
    </div>
    `;
  });
}

function subtotal() {
  let sum = 0;
  if (myCart.length > 0) {
    myCart.map((product) => {
      sum += product.price;
    });
  }
  test.innerHTML = `
  <button class="btn" type="button"><span class='test3'>PAY</span><span class='test2'>BDT ${sum}</span></button>
 `;
  leftItems.innerHTML = `
  <p class='discount'>Discount</p>
  <p>SubTotal</p>
  <p>Tax(0)%</p>
  <p>Total</p>
  `;
  rightItems.innerHTML = `
  <p class='test'>BDT 0.00</p>
  <p>BDT ${sum}</p>
  <p>BDT 0.00</p>
  <p>BDT ${sum}</p>
  `;
}

function removeFromCart(id) {
  myCart = myCart.filter((item) => item.id !== id);
  updateCart();
}

//fetch products from API (personal testing)

//  function fetchfromApi(){
//   fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(data=>console.log(data))
// }
// fetchfromApi()
