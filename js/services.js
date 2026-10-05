import {Storage} from "./storage.js";
export const Services={
 all(){return Storage.getServices()},
 get(id){return this.all().find(s=>s.id===id)},
 addOrUpdate(service){const all=this.all(),i=all.findIndex(s=>s.id===service.id);if(i>=0)all[i]=service;else all.push(service);return Storage.saveServices(all)},
 remove(id){return Storage.saveServices(this.all().filter(s=>s.id!==id))}
};
