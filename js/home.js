import {CONFIG,money,escapeHTML} from "./config.js";
import {Storage} from "./storage.js";
const serviceList=document.querySelector("#service-list");
serviceList.innerHTML=Storage.getServices().map(s=>`<article class="service-card"><span class="service-icon">${escapeHTML(s.icon||"✦")}</span><h3>${escapeHTML(s.name)}</h3><span class="service-price">${money(s.price)}</span><a href="agendamento.html?service=${encodeURIComponent(s.id)}">Agendar serviço ↗</a></article>`).join("");
document.querySelector("#product-list").innerHTML=CONFIG.products.map(p=>`<article class="product-card"><span>LECORTES / PRODUTO</span><h3>${escapeHTML(p.name)}</h3><strong>${money(p.price)}</strong></article>`).join("");
document.querySelector("#year").textContent=new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");if(toggle)toggle.textContent="☰"}));
