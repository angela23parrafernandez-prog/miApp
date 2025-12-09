import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import { ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent,]
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
          titulo: "Disco duro",
          precio:120,
          descripcion:"Disco duro externo portátil de 1TB, ideal para almacenamiento adicional y copias de seguridad, con conexión USB 3.0 para transferencias rápidas.",
          imagen:"assets/img/dis.webp"
        },
        {
          id: 3,
          titulo: "Laptop HP",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com2.jpg"
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
          titulo: "Computadora de escritorio",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com.jpg"
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
        {
          id: 11,
          titulo: "Disco duro",
          precio:120,
          descripcion:"Disco duro externo portátil de 1TB, ideal para almacenamiento adicional y copias de seguridad, con conexión USB 3.0 para transferencias rápidas.",
          imagen:"assets/img/dis.webp"
        },
        {
          id: 12,
          titulo: "Laptop HP",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com2.jpg"
        },
        {
          id: 13,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 14,
          titulo: "Disco duro",
          precio:120,
          descripcion:"Disco duro externo portátil de 1TB, ideal para almacenamiento adicional y copias de seguridad, con conexión USB 3.0 para transferencias rápidas.",
          imagen:"assets/img/dis.webp"
        },
        {
          id: 15,
          titulo: "Laptop HP",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com2.jpg"
        },
        {
          id: 16,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 17,
          titulo: "Disco duro",
          precio:120,
          descripcion:"Disco duro externo portátil de 1TB, ideal para almacenamiento adicional y copias de seguridad, con conexión USB 3.0 para transferencias rápidas.",
          imagen:"assets/img/dis.webp"
        },
        {
          id: 18,
          titulo: "Laptop HP",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com2.jpg"
        },
        {
          id: 19,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
        {
          id: 20,
          titulo: "Disco duro",
          precio:120,
          descripcion:"Disco duro externo portátil de 1TB, ideal para almacenamiento adicional y copias de seguridad, con conexión USB 3.0 para transferencias rápidas.",
          imagen:"assets/img/dis.webp"
        },
        {
          id: 21,
          titulo: "Laptop HP",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/com2.jpg"
        },
        {
          id: 22,
          titulo: "Impresora ricoh",
          precio:150,
          descripcion:"Impresora multifunción HP DeskJet 2755e, ideal para el hogar y la oficina, con conectividad inalámbrica y funciones de impresión, escaneo y copia.",
          imagen:"assets/img/ricoh.webp"
        },
   ] 

    productosfiltrados = [...this.productos ];
   
   constructor(
    private router: Router,
    private modalCtrl: ModalController,
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


 async verimagengrande(producto: any){
    const modal = await this.modalCtrl.create({
           component: MasComponent, 
           componentProps: { imagen: producto.imagen, 
            titulo: producto.titulo },
            cssClass: 'estilo-modal'
    });
    await modal.present();
}


}