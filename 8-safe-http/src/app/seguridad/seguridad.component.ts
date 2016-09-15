import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './seguridad.service';

@Component({
  selector: 'seguridad',
  templateUrl: 'seguridad.component.html'
})
export class SeguridadComponent implements OnInit {
    
    usuario:any = { email:'', password:''}

    constructor(private seguridadService: SeguridadService){

    }

    ngOnInit(){

    }

    registrarUsuario(){
        console.log('Enviando credenciales');
        this.seguridadService
            .registrar(this.usuario)
            .subscribe(r=>{console.log(r);})
    }
}