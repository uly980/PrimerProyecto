import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { collection, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
    usuario = new usuario(); 
    private firestore = inject (Firestore)
    
    constructor(public router: Router) { 
    }

    login(){
    let usuarioColeccion = collection(this.firestore, "usuario");
    let q = query(usuarioColeccion, where("user", "==", this.usuario.user), where("password", "==", this.usuario.password));
    collectionData(q).subscribe((datos:any)=>{
        if(datos.length > 0){
            this.usuario.idusuario = datos[0].idusuario;
            this.router.navigate(['/home'], {state: this.usuario});
        }
        else{
            alert("Usuario o contraseña incorrectos");
        }
    });
}

}

export class usuario{
    idusuario:string = "";
    user:string = "";
    password:string = "";
    nombre:string = "";

    constructor(){}
}