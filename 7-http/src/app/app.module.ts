import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";


import { RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";

import {HomeModule} from "./home/home.module"
import {AcercaDeModule} from "./acerca-de/acerca-de.module"
import {SaludoModule} from "./saludo/saludo.module"

import {MovimientoComponent} from "./home/movimiento/movimiento.component"
import {AcercaDeComponent} from "./acerca-de/acerca-de.component"
import {SaludoComponent} from "./saludo/saludo.component"
import {MovimientoEditorComponent} from "./home/movimiento/editor/movimiento-editor.component"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },//ruta base
  { path: 'home', component: MovimientoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'about', redirectTo: 'acerca-de' }, //redirecciones
  { path: 'saludo', component: SaludoComponent },
  { path: 'saludo/:amigo', component: SaludoComponent },//parametros
  { path: 'movimientos/:id', component: MovimientoEditorComponent },
 ];

const routerModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HomeModule, AcercaDeModule, SaludoModule ,routerModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
