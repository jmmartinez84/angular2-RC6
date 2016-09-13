import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './seguridad.service';

@Component({
  moduleId: module.id,
  selector: 'cf-seguridad',
  templateUrl: 'seguridad.component.html'
})
export class SeguridadComponent implements OnInit {
    
    usuario:any = { email:'', password:''}

    constructor(private movimientosService: SeguridadService){

    }

    ngOnInit(){

    }

    registrarUsuario(){
        console.log('Enviando credenciales');
        this.movimientosService
            .registrar(this.usuario)
            .subscribe(r=>{console.log(r);})
    }
}