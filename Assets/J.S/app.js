//////Add items to the cart///////
document.querySelectorAll(".add-cart-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    let product = event.target.parentElement.parentElement;
    addQuantity();
    addItem(product);
    // calculateTotalPrice();
  });
});

let totalQuantity = document.getElementById("total-quantity");
function addQuantity() {
  ++totalQuantity.innerText;
}

function subtractProductQuantity() {
  let productQuantity = document.querySelector(".product-quantity");
  totalQuantity.innerText -= productQuantity.innerText;
}

function porductInfo() {
  let productImg = product.querySelector(".product-img").src;
  let productName = product.querySelector(".product-name").innerText;
  let productPrice = product.querySelector(".product-price").innerText;
  return {
    img: productImg,
    name: productName,
    price: productPrice,
    // quantity: productQuantity,
  };
}

function addItem(product) {
  let pInfo = porductInfo();
  document.querySelector(".bottom-cart").style.display = "flex";
  document.querySelector(".empty-cart").style.display = "none";
  let productQuantity = 1;
  let cartItem = `<div class="item-list d-flex p-1">
      <div class="ps-2"><img src="${pInfo.img}" alt="" class="item-img"/></div>
      <div class="ps-2"><span>${pInfo.name}</span></div>
      <div class="ps-2"><span>${pInfo.price}</span></div>
      <div class="ps-2 product-quantity"><span>${productQuantity}</span></div>
      <div class="ps-2 delete-btn"><i class="bi bi-trash text-danger"></i></div>
      </div>`;
  document.querySelector(".cart-items").innerHTML += cartItem;

  setDeleteItem();
}
/////////Delete selected items from the cart///////
function setDeleteItem() {
  let deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      let addedProduct = event.target.parentElement.parentElement;
      subtractProductQuantity();
      if (totalQuantity.innerText <= 0) {
        document.querySelector(".bottom-cart").style.display = "none";
        document.querySelector(".empty-cart").style.display = "block";
      }
      addedProduct.remove();
    });
  });
}
////// Calculate the total price////
// function calculateTotalPrice() {
//   let price = pInfo.price * productQuantity;
//   let totalPrice = document.querySelector(".total-price");
//   totalPrice.innerText += price;
// }
