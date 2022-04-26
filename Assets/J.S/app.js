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
  let purchaseQuantityNo = purchaseQuantity.innerText;
  let itemQuantity = document.querySelector(".item-quantity").innerText;
  purchaseQuantityNo - itemQuantity;
}

function addPurchaseItem(product) {
  // console.log(product);
  let productImg = product.querySelector(".product-img").src;
  let productName = product.querySelector(".product-name").innerText;
  let productPrice = product.querySelector(".product-price").innerText;

  let cartItem = `<ul class="item-list list-unstyled d-flex p-2">
      <li class="ps-4"><img src="${productImg}" alt="" class="purchaseItemImg"/></li>
      <li class="ps-4"><span>${productName}</span></li>
      <li class="ps-4"><span>${productPrice}</span></li>
      <li class="ps-4"><span class="item-quantity>1</span></li>
      <li class="ps-4 delete-btn"><i class="bi bi-trash text-danger delete-icon"></i></li>
      </ul>
    <a href="" class="text-decoration-none"> <button class="view-cart-btn d-block m-auto border border-0 rounded">View shopping cart</button></a>`;
  document.querySelector(".cart-items").innerHTML += cartItem;
}
let deleteBtn = document.querySelectorAll(".delete.btn");
deleteBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let addedProduct = event.target.previousSiblingElements;
    console.log(addedProduct);
    deleteItem();
    subtractPurchaseQuantity();
  });
});
function deleteItem() {
  addedProduct.remove();
}
