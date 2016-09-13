
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovimientosService } from '../shared/movimientos.service';
import { MovimientoModel } from '../shared/movimiento.model';

@Component({
  selector: 'movimiento-lista',
  templateUrl: 'movimiento-lista.component.html',
  styleUrls: ['movimiento-lista.component.css','../movimiento.component.css'] 
})
export class MovimientoListaComponent implements OnInit {
  sentidoOrden: number = 1
  constructor(private movimientosService: MovimientosService) { }
  @Output() seleccionarMovimiento: EventEmitter<MovimientoModel> = new EventEmitter()
  
  ngOnInit() {
  }
  // funciones de utilidad
  ordenarPor(campo: string) {
    this.sentidoOrden = -1 * this.sentidoOrden
    this.movimientosService.ordenarPor(campo, this.sentidoOrden)
  }
  fecha(cadena) {
    return new Date(cadena)
  }

  // métodos de acción  
  borrar(movimientoParaBorrar: MovimientoModel) {
    this.movimientosService.borrarMovimiento(movimientoParaBorrar)
  }
  seleccionar(movimientoSeleccionado: MovimientoModel) {
    // emisión del evento con su argumento
    this.seleccionarMovimiento.emit(movimientoSeleccionado)
  }
}