let count = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCount = document.getElementById("cart-count");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    alert("Product added to cart!");
  });
});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});