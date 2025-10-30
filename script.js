const toggleBtn = document.getElementById("theme-toggle");
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.background = "#3b2f2f";
    document.body.style.color = "#f8f1e4";
    toggleBtn.textContent = "🌞";
  } else {
    document.body.style.background = "#f8f1e4";
    document.body.style.color = "#4b3f2f";
    toggleBtn.textContent = "🌙";
  }
});

const navLinks = document.getElementById("nav-links");
const mobileNavBtn = document.getElementById("mobile-nav-toggle");

mobileNavBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const addButtons = document.querySelectorAll(".add-to-cart");
const cartDiv = document.getElementById("cart-items");
let cart = [];

addButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;

    cart.push({ name, price });
    displayCart();
  });
});

function displayCart() {
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.price}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      displayCart();
    };

    div.appendChild(removeBtn);
    cartDiv.appendChild(div);
  });
}

document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase! 🏡");
    cart = [];
    displayCart();
  }
});

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  successMsg.classList.remove("hidden");
  form.reset();
});

document.getElementById("cta").addEventListener("click", () => {
  document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
});
