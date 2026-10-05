import {CONFIG,dateISO} from "./config.js";
const key = name => CONFIG.storagePrefix+name;
const read = (name,fallback) => {try{const raw=localStorage.getItem(key(name));return raw?JSON.parse(raw):fallback}catch(e){console.warn("Falha ao ler armazenamento",e);return fallback}};
const write = (name,value) => {try{localStorage.setItem(key(name),JSON.stringify(value));return true}catch(e){console.error("Falha ao salvar",e);return false}};
function seedAppointments(){const today=new Date();const day=(offset)=>{const d=new Date(today);d.setDate(d.getDate()+offset);return dateISO(d)};return [
{id:"LC-DEMO-1001",name:"Marcos Oliveira",phone:"11987654321",serviceId:"corte",serviceName:"Corte",price:40,date:day(1),time:"10:00",status:"Confirmado",createdAt:new Date().toISOString(),demo:true},
{id:"LC-DEMO-1002",name:"Rafael Santos",phone:"11991234567",serviceId:"barba",serviceName:"Barba",price:35,date:day(2),time:"14:00",status:"Pendente",createdAt:new Date().toISOString(),demo:true},
{id:"LC-DEMO-1003",name:"João Pedro",phone:"11999887766",serviceId:"progressiva",serviceName:"Progressiva",price:50,date:day(-1),time:"15:30",status:"Concluído",createdAt:new Date().toISOString(),demo:true},
{id:"LC-DEMO-1004",name:"André Lima",phone:"11988776655",serviceId:"sobrancelha",serviceName:"Sobrancelha",price:10,date:day(3),time:"09:30",status:"Cancelado",createdAt:new Date().toISOString(),demo:true}
]}
export const Storage={
  init(){if(!localStorage.getItem(key("initialized"))){write("appointments",seedAppointments());write("services",CONFIG.defaultServices);write("blocks",[]);write("settings",CONFIG.defaultSettings);write("initialized",true)}},
  getAppointments(){return read("appointments",[])},saveAppointments(v){return write("appointments",v)},
  getServices(){return read("services",CONFIG.defaultServices)},saveServices(v){return write("services",v)},
  getBlocks(){return read("blocks",[])},saveBlocks(v){return write("blocks",v)},
  getSettings(){return read("settings",CONFIG.defaultSettings)},saveSettings(v){return write("settings",v)},
  reset(){["appointments","services","blocks","settings","initialized"].forEach(k=>localStorage.removeItem(key(k)));this.init()},
  key
};
Storage.init();
