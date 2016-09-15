import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

@Component({
  selector: 'app-dos',
  template: '<p>Funciona</p>'
})
export class App2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [ BrowserModule],
  declarations: [App2Component],
  providers: [/* TODO: Providers go here */],
  bootstrap: [App2Component],
})
export class App2Module { }

platformBrowserDynamic().bootstrapModule(App2Module)
  .catch(err => console.error(err));