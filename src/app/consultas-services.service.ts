import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasServicesService {
  
  constructor(private http: HttpClient) { }
  

  public mostrarTodo() {
    return this.http.get("http://localhost/conexionOraclePhp/app/controller/mainController.php");
  }

 
}


