import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar , IonFooter} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent,  IonFooter]
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
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 4,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 5,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 6,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 7,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 8,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 9,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
   ] 

    productosfiltrados = [...this.productos ];
   
   constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'],  { queryParams:  producto });
  }


  filtrar(event: any){
     const texto = (event.target.value || '').toLowerCase().trim();

     if (texto === '') { 
        this.productosfiltrados = [...this.productos ];
        return;
     }
     this.productosfiltrados = this.productos.filter( 
      p => p.titulo.toLowerCase().includes(texto) ||
       p.descripcion.toLowerCase().includes(texto) ||
       p.precio.toString().includes(texto)
     );
}


}