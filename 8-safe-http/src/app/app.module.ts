import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";


import { RouterModule, Routes} from '@angular/router';
/** 
 * importación del módulo de comunicaciones... desde más arriba
 * */
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";

import {HomeModule} from "./home/home.module"
import {AcercaDeModule} from "./acerca-de/acerca-de.module"
import {SaludoModule} from "./saludo/saludo.module"

/**
 * nuevo módulo de seguridad
 */
import {SeguridadModule} from "./seguridad/seguridad.module"

import {MovimientoComponent} from "./home/movimiento/movimiento.component"
import {AcercaDeComponent} from "./acerca-de/acerca-de.component"
import {SaludoComponent} from "./saludo/saludo.component"
import {MovimientoEditorComponent} from "./home/movimiento/editor/movimiento-editor.component"
/**
 * nuevo componente de seguridad
 */
import {SeguridadComponent} from './seguridad/seguridad.component'

/**
 * Importación del servicio de utilidad
 */
import {HttpToolsService } from  "./shared/http-tools.service";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovimientoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'about', redirectTo: 'acerca-de' }, 
  { path: 'saludo', component: SaludoComponent },
  { path: 'saludo/:amigo', component: SaludoComponent },
  { path: 'movimientos/:id', component: MovimientoEditorComponent },
  { path: 'seguridad', component: SeguridadComponent }// ruta para la página de login
 ];

const routerModule = RouterModule.forRoot(routes);
/**
 * registro como provider del servicio de utilidad 
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, AcercaDeModule, SaludoModule, routerModule, SeguridadModule, HttpModule],
  providers :[HttpToolsService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
