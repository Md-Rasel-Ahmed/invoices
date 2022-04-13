let submitBtn = document.querySelector("#detail-submit-btn");
let buyerDetails = document.querySelector("#buyer-details-input");
let buyerInfo = document.querySelector("#buyer-info");
let tax = document.querySelector("#tax");
let grandTotal = document.querySelector("#grand-total");
let grandTotal2 = document.querySelector("#grand-total-2");
let itemName = document.querySelector("#item-name-input");
let itemPrice = document.querySelector("#item-price-input");
let itemQuantity = document.querySelector("#item-quantity-input");
let tableInfo = document.querySelector("#info-table");
let subTotal = document.querySelector("#sub-total");
submitBtn.addEventListener("click", () => {
  buyerInfo.innerText = buyerDetails.value;
  buyerDetails.value = "";
});
let addBtn = document.querySelector("#add-details-btn");
addBtn.addEventListener("click", () => {
  if (itemPrice.value <= 0 || itemName == "" || itemQuantity.value <= 0) {
    alert("Please Privide the valid input!");
    return;
  }
  items();
});
function items() {
  // let subtotalNum = parseInt(subTotal.textContent);
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = itemName.value;
  let td = document.createElement("td");
  td.innerText = itemPrice.value;
  let td2 = document.createElement("td");
  td2.innerText = itemQuantity.value;
  let td3 = document.createElement("td");
  td3.innerText = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
  tr.appendChild(th);
  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tableInfo.appendChild(tr);
  tableInfo.appendChild(tr);
  subTotal.innerText = parseInt(subTotal.innerText) + parseInt(td3.textContent);
  let subtotalNum = parseInt(subTotal.innerText);
  let finalTax = (subtotalNum * 20) / 100;
  tax.innerText = finalTax;
  grandTotal.innerText = subtotalNum - finalTax;
  grandTotal2.innerText = subtotalNum - finalTax;
  itemQuantity.value = "";
  itemName.value = "";
  itemPrice.value = "";
}
