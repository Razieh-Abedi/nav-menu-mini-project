document.querySelectorAll(".add-cart-btn").forEach((element) => {
  addEventListener("click", () => {
    addPurchaseQuantity();
    addPurchaseItem();
  });
});
function addPurchaseQuantity() {
  let purchaseQuantity = document.getElementById("purchase-quantity");
  ++purchaseQuantity.innerText;
  //   purchaseQuantity.innerText++;
}
function addPurchaseItem() {
  let cartItem = `<ul class="item-list list-unstyled d-flex p-2">
      <li class="ps-4"><img src="" alt="" />product image</li>
      <li class="ps-4"><span>product name</span></li>
      <li class="ps-4"><span>product price</span></li>
      <li class="ps-4"><span>product quantity</span></li>
      <li class="ps-4 delete-btn"><i class="bi bi-trash"></i></li>
    </ul>
    <a href=""> <button>View shopping cart</button></a>`;
  document.querySelector(".cart-items").innerHTML += cartItem;
}
