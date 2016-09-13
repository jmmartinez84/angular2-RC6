import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'saludo',
  templateUrl: 'saludo.component.html'
})
export class SaludoComponent implements OnInit {
  amigo: string = "desconocido";

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      this.amigo = parametros['amigo'] || 'anónimo';
    });
   }
}