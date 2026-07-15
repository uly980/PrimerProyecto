import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Receta } from "../home/home";
import Swal from 'sweetalert2';
import { QRCodeModule } from 'angularx-qrcode';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'reporte',
  standalone: true,
  imports: [FormsModule, CommonModule,QRCodeModule],
  templateUrl: './reporte.html',
  styleUrl: './reporte.css'
})

export class Reporte {

  @Input() reporteRecetas: Receta = new Receta();
  @Input() display: boolean = false;
  @Output() cerrar = new EventEmitter();


  constructor() {
        
  }

  
sellar(){
    Swal.fire({
      title: "Estas seguro de sellarla?",
      text: "No podras revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1fa71f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, sellala!"
    }).then((result) => {
        if (result.isConfirmed) {
          let elemento = document.getElementById('divpadre');
          let doc = new jsPDF('l','pt','a4');

          doc.html(elemento!,{
            html2canvas:{
              scale: 1
            },
            x: 15,
            y: 15,
            callback: function(doc){
              doc.save('Receta.pdf');
            }
          })
          Swal.fire({
          title: "Sellada!",
          text: "La receta ha sido sellada.",
          icon: "success",
          timer: 1000,
          position: "top-end",
          showConfirmButton: false
        });
        this.cerrar.emit();
      }
    });
  }
}