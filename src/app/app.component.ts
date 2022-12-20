import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize, fromEvent, map, Subject } from 'rxjs';
import { ConsultasServicesService } from './consultas-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  buscar: any;
  ConsultaDocumentos: any;

  mac: String[] = [];

  pages: number = 1;

  constructor(private services: ConsultasServicesService) { }
  
  ngOnInit(): void {
    this.services.mostrarTodo().subscribe(res => {
      
      this.ConsultaDocumentos = Object.values(res);
      console.log(this.ConsultaDocumentos);

      /*for (let i = 0; i <this.ConsultaDocumentos.DIRECCION_MAC_EQUIPO.length; i++) {
        this.mac[i] = this.ConsultaDocumentos.DIRECCION_MAC_EQUIPO[i];
        
      }

      console.log(this.mac);*/
  
    });

  }


}
