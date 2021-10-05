import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  urlBase = "https://k6k3qur6vk.api.quickmocker.com/medicos/"

  constructor(private http: HttpClient) { }

    listMedicos(){
      return this.http.get(this.urlBase)
    }
    listMedicosbyEspecialidade(id:number){
      const  parameter = `${this.urlBase}?especialidade=${id}`
      return this.http.get(parameter)
    }
}
