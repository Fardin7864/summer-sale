// Get all elements with the class "product"
const cards = document.querySelectorAll(".product");

// Loop through each product element and extract inner text
cards.forEach((card) => {
  card.parentElement.parentElement.addEventListener("click", function () {
    const productText = card.innerText;
    const cartLi = document.getElementById("cart-Lists");
    const li = document.createElement("li");
    li.innerText = productText;
    cartLi.appendChild(li);
  });
});

// Get all products price with class
const prices = document.querySelectorAll(".product-price");
// get total price
let totalPrice = document.getElementById("total-price");
let totalPriceNum = parseFloat(totalPrice.innerText);
// get total
let total = document.getElementById("total");
// totalPrice calculetions and purches btb design
prices.forEach((price) => {
  price.parentElement.parentElement.parentElement.addEventListener(
    "click",
    function () {
      const productPrice = parseFloat(price.innerText);
      totalPriceNum += productPrice;
      totalPrice.innerText = totalPriceNum.toFixed(2);
      total.innerText = totalPriceNum.toFixed(2);

      // purches btn activity
      if (totalPriceNum >= 1) {
        purchaseBtn.removeAttribute("disabled");
        purchaseBtn.classList.add("hover:bg-[#E559B9]");
      } else {
        purchaseBtn.setAttribute("disabled", true);
        purchaseBtn.classList.remove("hover:bg-[#E559B9]");
      }
    }
  );
});

// Discount section
// Coupon button
const couponBtn = document.getElementById("coupon-btn");
// coupon input
const couponInput = document.getElementById("coupon-input");
// calculeting discount with coupne btn
couponInput.addEventListener("keyup", () => {
  const inputValue = couponInput.value;
  if (inputValue === "SELL200" && totalPriceNum >= 200) {
    couponBtn.removeAttribute("disabled");
    couponBtn.classList.add("hover:bg-[#E559B9]");
  } else {
    couponBtn.setAttribute("disabled", true);
    couponBtn.classList.remove("hover:bg-[#E559B9]");
  }
});

// cart's total calculation
const totalValue = parseFloat(total.innerText);
couponBtn.addEventListener("click", () => {
  const discount = document.getElementById("discount");
  const discountAmount = parseFloat(totalPriceNum * 0.2).toFixed(2);
  discount.innerText = discountAmount;
  total.innerText = (totalPriceNum - discountAmount).toFixed(2);
  couponBtn.setAttribute("disabled", true);
  couponBtn.classList.remove("hover:bg-[#E559B9]");
  couponInput.value = "";
});
// Make Purchase button functionality
const purchaseBtn = document.getElementById("purchase");

// modal => go home button functionality
document.getElementById("go-home-btn").addEventListener("click", () => {
  location.href = "index.html";
});
