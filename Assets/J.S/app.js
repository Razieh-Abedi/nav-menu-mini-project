//////Add items to the cart///////
document.querySelectorAll(".add-cart-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    let product = event.target.parentElement.parentElement;
    addQuantity();
    addItem(product);
  });
});

let totalQuantity = document.getElementById("total-quantity");
function addQuantity() {
  ++totalQuantity.innerText;
}

function subtractProductQuantity() {
  totalQuantity.innerText -= pInfo.quantity;
}
function porductInfo() {
  let productImg = product.querySelector(".product-img").src;
  let productName = product.querySelector(".product-name").innerText;
  let productPrice = product.querySelector(".product-price").innerText;
  let productQuantity = document.getElementById("product-quantity").innerText;
  return {
    img: productImg,
    name: productName,
    price: productPrice,
    quantity: productQuantity,
  };
}

function addItem(product) {
  // let pInfo = porductInfo();
  document.querySelector(".bottom-cart").style.display = "flex";
  document.querySelector(".empty-cart").style.display = "none";
  // pInfo = +porductInfo.quantity == 1;

  let cartItem = `<div class="item-list d-flex p-2">
      <div class="ps-4 product-img"><img src="${porductInfo.img}" alt="" class="item-img"/></div>
      <div class="ps-4 product-name"><span>${porductInfo.name}</span></div>
      <div class="ps-4 product-price"><span>${porductInfo.price}</span></div>
      <div class="ps-4 product-quantity"><span>${porductInfo.quantity} </span></div>
      <div class="ps-4 delete-btn"><i class="bi bi-trash text-danger"></i></div>
      </div>`;
  document.querySelector(".cart-items").innerHTML += cartItem;

  setDeleteItem();
}

function setDeleteItem() {
  let deleteBtn = document.querySelectorAll(".delete-btn");

  deleteBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      let addedProduct = event.target.parentElement;

      subtractProductQuantity();
      if (totalQuantity.innerText <= 0) {
        document.querySelector(".bottom-cart").style.display = "none";
        document.querySelector(".empty-cart").style.display = "block";
      }
      addedProduct.remove();
    });
  });
}

/////////Delete selected items from the cart///////
