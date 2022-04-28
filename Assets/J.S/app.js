//////Add items to the cart///////
document.querySelectorAll(".add-cart-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    let product = event.target.parentElement.parentElement;
    addPurchaseQuantity();
    addPurchaseItem(product);
  });
});

let purchaseQuantity = document.getElementById("purchase-quantity");
function addPurchaseQuantity() {
  ++purchaseQuantity.innerText;
  // purchaseQuantity.innerText++;
}

function subtractPurchaseQuantity() {
  // let purchaseQuantityNo = purchaseQuantity.innerText;
  let itemQuantity = document.querySelector(".item-quantity");
  purchaseQuantity.innerText -= itemQuantity.innerText;
}
function porductInfo() {
  let productImg = product.querySelector(".product-img").src;
  let productName = product.querySelector(".product-name").innerText;
  let productPrice = product.querySelector(".product-price").innerText;

  return {
    name,
    img,
    price,
  }
  
}

function addPurchaseItem(product) {
  // console.log(product);
 
  let pInfo=porductInfo()
  document.querySelector(".bottom-cart").style.display = "flex";
  document.querySelector(".empty-cart").style.display = "none";

  let itemQuantity=1
  let cartItem = `<div class="item-list list-unstyled d-flex p-2">
      <div class="ps-4"><img src="${productImg}" alt="" class="purchaseItemImg"/></div>
      <div class="ps-4"><span>${productName}</span></div>
      <div class="ps-4"><span>${productPrice}</span></div>
      <div class="ps-4">
        <span class="item-quantity">${itemQuantity} </span>
      </div>
      <div class="ps-4 delete-btn">
        <i class="bi bi-trash text-danger delete-icon"></i>
      </div>
      </div>`;
  document.querySelector(".cart-items").innerHTML += cartItem;

  setDeleteItem();
}

function setDeleteItem() {
  let deleteBtn = document.querySelectorAll(".delete-btn");

  deleteBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      let addedProduct = event.target.parentElement.parentElement;
     
      subtractPurchaseQuantity();
      if (purchaseQuantity.innerText <=0 ) {
        document.querySelector(".bottom-cart").style.display = "none";
        document.querySelector(".empty-cart").style.display = "block";
      }
      addedProduct.remove();

     
    });
  });
}

/////////Delete selected items from the cart///////
