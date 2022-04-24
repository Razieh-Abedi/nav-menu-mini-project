let product = event.target.parentElement;
let productImg = product.querySelector(".product-img").src;
let productName = product.querySelector(".product-name").innerText;
let productPrice = product.querySelector(".product-price").innerText;

document.querySelectorAll(".add-cart-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    addPurchaseQuantity();
    addPurchaseItem();
  });
});

function addPurchaseQuantity() {
  let purchaseQuantity = document.getElementById("purchase-quantity");
  ++purchaseQuantity.innerText;
  // purchaseQuantity.innerText++;
}
function addPurchaseItem() {
  let cartItem = `<ul class="item-list list-unstyled d-flex p-2">
      <li class="ps-4"><img src="${productImg}" alt="" /></li>
      <li class="ps-4"><span>${productName}</span></li>
      <li class="ps-4"><span>${productPrice}</span></li>
      <li class="ps-4"><span>product quantity</span></li>
      <li class="ps-4 delete-btn"><i class="bi bi-trash"></i></li>
    </ul>
    <a href=""> <button>View shopping cart</button></a>`;
  document.querySelector(".cart-items").innerHTML += cartItem;
}
