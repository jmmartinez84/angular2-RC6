import { Component, OnInit } from '@angular/core';

import { MovimientosService } from './shared/movimientos.service'
import { MovimientoModel } from './shared/movimiento.model'

@Component({
  selector: 'movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  movimientoSeleccionado = null // para comunicar los subcomponentes  
  
  constructor(private movimientosService: MovimientosService) {
    
  }

  ngOnInit() {
    
  }

  alSeleccionarMovimiento(movimiento: MovimientoModel) {
    this.movimientoSeleccionado = movimiento
  }
}

