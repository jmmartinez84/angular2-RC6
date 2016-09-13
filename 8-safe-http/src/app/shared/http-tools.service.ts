/**
 * clase con funciones de ayuda para utilizar en los demás servicios
 */
import { Injectable } from '@angular/core';
/** importaciones de clases y tipos */
import { Http, Response, RequestOptions, Headers } from '@angular/http';

/**
 * La libreria RxJS viene desglosada en operaciones
 * Hay que importarlas de forma individual
 */
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import { Router } from '@angular/router'

@Injectable()
export class HttpToolsService {

  private static _router: Router
  private static _token: any
  
  constructor(
    private router: Router
  ) {
    HttpToolsService._router=this.router
  }

  /**
   * Configuración de cabeceras
   * los envíos requieren siempre la misma configuración
   */
  configurarCabeceras() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sessionId': HttpToolsService._token
    })
    // llamar a este método en cada llamada, equivale a los interceptores de Angular1
    let options = new RequestOptions({ headers: headers })
    return options
  }

 
  /**
   * función para obtener los datos json de la respuesta http  
   */
  obtenerDatos(response) { 
      let datos: any = null;
      if (response.status < 400)
        datos = response.json();
      return datos; 
    }
  
  /**
   * Función para el tratamiento de errores
   */
  tratarErrores(error) {
    if (error.status == 401) {
      console.warn("Error de permisos");
      HttpToolsService._router.navigate(['seguridad'])
    }
    else {
      console.log(JSON.stringify(error));
    }
    // continuar con la cadena de subscripciones
    return Observable.throw(error._body)
  } 

  /**
   * función para usar despues de obtener credenciales 
   */
  guardarCredenciales(token) {
    console.log('Guardando token en memoria: ' + token);
    HttpToolsService._token = token
    // ir a la página principal
    HttpToolsService._router.navigate([''])
    return token
  }
}