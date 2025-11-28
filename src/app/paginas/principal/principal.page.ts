import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
   productos = [
        {
          id: 1,
          titulo: "Impresora multifunción",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/impresora.webp"
        },
        {
          id: 2,
          titulo: "Impresora multifunción",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/impresora.webp"
        },
        {
          id: 3,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.jpg"
        },


   ] 
   
   constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'],  { queryParams:  producto });
  }

}