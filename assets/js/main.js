// Replace these placeholders when the client confirms the business details.
const CONFIG={businessName:"AGRO STORE",whatsappNumber:"",location:"Nigeria"};
// Sample catalogue placeholders: replace with the client's real stock and verified details.
const products=[
{name:"NPK Fertilizer",category:"Fertilizers",description:"Ask for available formulation, pack size and manufacturer information.",icon:"🌱",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"},
{name:"Urea Fertilizer",category:"Fertilizers",description:"Contact us to confirm grade, packaging and availability.",icon:"🌾",image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"},
{name:"Organic Soil Conditioner",category:"Fertilizers",description:"Ask for product composition and manufacturer instructions.",icon:"🍃",image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"},
{name:"Herbicide",category:"Herbicides",description:"Ask for verified product details, registration status and approved label uses.",icon:"🌿",image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"},
{name:"Weed Control Product",category:"Herbicides",description:"Confirm approved use, target weeds and label precautions.",icon:"🧴",image:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"},
{name:"Insecticide",category:"Crop protection",description:"Ask for registration details and label-approved target pests.",icon:"🛡️",image:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"},
{name:"Fungicide",category:"Crop protection",description:"Confirm the crop, disease target and manufacturer label directions.",icon:"🍀",image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"},
{name:"Improved Seeds",category:"Seeds & supplies",description:"Ask about crop variety, seed source and pack size.",icon:"🌽",image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"},
{name:"Farm Sprayer",category:"Seeds & supplies",description:"Ask about equipment type, capacity and accessories.",icon:"🚿",image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"}
];
const list=document.querySelector("#products-list"),search=document.querySelector("#search"),filter=document.querySelector("#filter");
function wa(message){const n=CONFIG.whatsappNumber.replace(/\D/g,"");return n?"https://wa.me/"+n+"?text="+encodeURIComponent(message):"https://wa.me/?text="+encodeURIComponent(message)}
function render(){const q=search.value.trim().toLowerCase(),c=filter.value;const found=products.filter(p=>(c==="All"||p.category===c)&&(p.name+" "+p.category+" "+p.description).toLowerCase().includes(q));list.innerHTML=found.length?found.map(p=>'<article class="product"><div class="product-art"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"></div><div class="product-body"><span class="pill">'+p.category+'</span><h3>'+p.name+'</h3><p>'+p.description+'</p><a class="btn" target="_blank" rel="noopener" href="'+wa("Hello, I visited your website and want to enquire about "+p.name+". Please confirm availability, pack size, current price and delivery options.")+'">Enquire on WhatsApp →</a></div></article>').join(""):'<div class="empty">No matching products. Try another search.</div>'}
document.querySelectorAll("[data-brand]").forEach(x=>x.textContent=CONFIG.businessName);
document.querySelector("#contactwa").href=wa("Hello, I visited your website and would like to make a product enquiry.");
document.querySelector("#year").textContent=new Date().getFullYear();
search.addEventListener("input",render);filter.addEventListener("change",render);
document.querySelectorAll("[data-cat]").forEach(b=>b.addEventListener("click",()=>{filter.value=b.dataset.cat;render();document.querySelector("#products").scrollIntoView({behavior:"smooth"})}));
const menu=document.querySelector("#menu"),nav=document.querySelector("#nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
render();
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
 document.querySelectorAll(".section, .photo-grid figure, .product, .benefits article, .contacts article").forEach(el => {
  el.classList.add("reveal");
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  }),{threshold:0.12});
  observer.observe(el);
 });
}
