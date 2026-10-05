export const CONFIG = {
  businessName: "Barbearia Lecortes",
  whatsapp: "5511955986337",
  adminPassword: "lecortes2026",
  storagePrefix: "lecortes_mvp_",
  timeSlots: ["09:00","09:30","10:00","10:30","11:00","11:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],
  defaultServices: [
    {id:"corte",name:"Corte",price:40,icon:"✂"},
    {id:"sobrancelha",name:"Sobrancelha",price:10,icon:"⌁"},
    {id:"barba",name:"Barba",price:35,icon:"◈"},
    {id:"relaxamento",name:"Relaxamento",price:45,icon:"〰"},
    {id:"progressiva",name:"Progressiva",price:50,icon:"✦"},
    {id:"luzes",name:"Luzes",price:60,icon:"✧"},
    {id:"pintura",name:"Pintura",price:60,icon:"◉"}
  ],
  products: [{name:"Pomada",price:25},{name:"Shampoo anticaspa",price:35},{name:"Óleo para barba",price:50}],
  defaultSettings: {open:"09:00",close:"18:00",lunchStart:"12:00",lunchEnd:"13:00",weekdays:[1,2,3,4,5,6],specialDates:[]}
};
export const money = n => Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
export const dateISO = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
export const parseDate = s => {const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12)};
export const prettyDate = s => parseDate(s).toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});
export const escapeHTML = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
