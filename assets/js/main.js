// BUSINESS SETUP: Replace these placeholders when the client confirms the details.
const SITE_CONFIG = {
  businessName: "AGRO STORE",
  whatsappNumber: "", // Nigeria format: 2348012345678 (digits only; no + and no leading 0)
  location: "Nigeria"
};

// DEMO CATALOGUE: Replace with the client's verified inventory, real photos and label details.
const products = [
  { name: "NPK Fertilizer", category: "Fertilizers", description: "Ask us for the available formulation, pack size and manufacturer information.", icon: "🌱" },
  { name: "Urea Fertilizer", category: "Fertilizers", description: "Contact us to confirm grade, packaging and current availability.", icon: "🌾" },
  { name: "Organic Soil Conditioner", category: "Fertilizers", description: "Ask for the product composition and the manufacturer's instructions.", icon: "🍃" },
  { name: "Herbicide", category: "Herbicides", description: "Ask for verified product details, registration status and approved label uses.", icon: "🌿" },
  { name: "Weed Control Product", category: "Herbicides", description: "Confirm approved use, target weeds and label precautions before purchase.", icon: "🧴" },
  { name: "Insecticide", category: "Crop protection", description: "Ask for registration details and label-approved target pests.", icon: "🛡️" },
  { name: "Fungicide", category: "Crop protection", description: "Confirm the crop, disease target and manufacturer label directions.", icon: "🍀" },
  { name: "Improved Seeds", category: "Seeds & supplies", description: "Ask about crop variety, seed source, pack size and planting season.", icon: "🌽" },
  { name: "Farm Sprayer", category: "Seeds & supplies", description: "Ask about equipment type, capacity and available accessories.", icon: "🚿" }
];

const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const categoryFilter = document.querySelector("#category-filter");

function makeWhatsAppLink(message) {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

function makeProductMessage(product) {
  return [
    "Hello, I visited your website and would like to enquire about:",
    "",
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    "",
    "Please confirm availability, pack size, current price and delivery options."
  ].join("\n");
}

function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const matches = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return matchesCategory && searchableText.includes(term);
  });

  if (!matches.length) {
    grid.innerHTML = '<div class="empty-state">No products match your search. Try another product name or category.</div>';
    return;
  }

  grid.innerHTML = matches.map(product => `
    <article class="product-card">
      <div class="product-art" aria-hidden="true">${product.icon}</div>
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a class="button button-primary" href="${makeWhatsAppLink(makeProductMessage(product))}" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp →</a>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll("[data-business-name]").forEach(element => {
  element.textContent = SITE_CONFIG.businessName;
});

document.querySelector("#contact-whatsapp").href = makeWhatsAppLink(
  "Hello, I visited your website and would like to make a product enquiry."
);
document.querySelector("#year").textContent = new Date().getFullYear();

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    categoryFilter.value = button.dataset.category;
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

renderProducts();