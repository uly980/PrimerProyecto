import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { collection, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';
import { usuario } from '../login/login';
import { Reporte } from '../reporte/reporte';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, CommonModule, Reporte],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class HomeComponent {

  private firestore = inject (Firestore)

  carro:string = "Azul";
  modelo:string = "Ford";
  recetas:Receta = new Receta();
  listadoReceta: Receta[] = new Array();
  usuario = new usuario();
  parametroreceta:Receta = new Receta();
  displayreporte:boolean = false;


  private platformId = inject(PLATFORM_ID);


  constructor(){
    if (isPlatformBrowser(this.platformId)) {
      this.usuario.idusuario = history.state.idusuario;
      let usuarioColeccion = collection(this.firestore, "usuario");
      let q = query(usuarioColeccion, where("idusuario", "==", this.usuario.idusuario));
      collectionData(q).subscribe((datos)=>{
        datos.forEach((item:any)=>{
          this.usuario.nombre = item.nombre;
        })
      });
    }
    this.consultaReceta();
  }

  guardarReceta() {
      if (this.recetas.idreceta === "") {
        this.recetas.idreceta = this.generarTextoAleatorio(10);
      }
      
      let ruta = doc(this.firestore, "Receta", this.recetas.idreceta);
      setDoc(ruta, JSON.parse(JSON.stringify(this.recetas))).then(() => {
        this.recetas = new Receta(); 
      });
    }


  consultaReceta(){
    let RecetaColeccion = collection(this.firestore, "Receta");
    let q = query(RecetaColeccion);
    collectionData(q).subscribe((datos)=>{
      this.listadoReceta = new Array();
      datos.forEach((item:any)=>{
        let receta = new Receta();
        receta.setData(item);
        this.listadoReceta.push(receta);
      })
    });
  }

  generarTextoAleatorio(numero: number){
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const largo = letras.length;
    for(let i = 0; i < numero; i++){
      result += letras.charAt(Math.floor(Math.random()*largo))
    }
    return result;
  }

  eliminarReceta(recetas:Receta){
    recetas.estatus = false;
    let ruta = doc(this.firestore, "Receta", recetas.idreceta);
    setDoc(ruta, JSON.parse(JSON.stringify(recetas))).then(()=>{
      alert("Receta eliminada correctamente");
    });
  }

  editarReceta(recetas: Receta) {
      let copia = JSON.parse(JSON.stringify(recetas));
      this.recetas = new Receta();
      this.recetas.setData(copia);
  }

  imprimirReceta(recetas: Receta) {
    this.parametroreceta = recetas;
    this.displayreporte = true;
  }

  ocultarReceta(){
    this.displayreporte = false;
  }
}
export class Receta{
  idreceta:string = "";
  nombrereceta:string = "";
  ingredientes:string = "";
  tiempo:number = 0;
  descripcion:string = "";
  porciones:number = 0;
  imagenURL:string = "";
  estatus:boolean = true;
  clasificacion:string = "";

  setData(data:any){
    this.idreceta = data.idreceta;
    this.nombrereceta = data.nombrereceta;
    this.ingredientes = data.ingredientes;
    this.tiempo = data.tiempo;
    this.descripcion = data.descripcion;
    this.porciones = data.porciones;
    this.imagenURL = data.imagenURL;
    this.estatus = data.estatus == undefined ? true : data.estatus;
    this.clasificacion = data.clasificacion == undefined ? "" : data.clasificacion;
  }
}
