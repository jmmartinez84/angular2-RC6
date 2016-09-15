import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movimiento',
  templateUrl: 'movimiento.component.html',
  styleUrls: ['movimiento.component.css'] // su propio css
})
export class MovimientoComponent implements OnInit {
  /**  propiedades para representar el estado del modelo de la vista */
  categoriasIngreso: string[] = ['Nómina', 'Venta', 'Interés', 'Impuesto']
  categoriasGasto: string[] = ['Hipoteca', 'Compra', 'Interés', 'Impuesto']
  movimiento: MovimientoModel
  movimientos: MovimientoModel[] = []
  sentidoOrden: number = 1
  ingresos: number = 0
  gastos: number = 0
  balance: number = 0

  /** constructor   */
  constructor() { }

  /**  eventos del workFlow de componentes  */
  ngOnInit() {
    this.movimiento = {
      _id: new Date().toDateString(),
      tipo: "Ingreso",
      categoria: "Nómina",
      fecha: new Date(),
      importe: 0
    }
  }

  cambiarTipo(nuevoTipo:string){
    if(nuevoTipo==="Ingreso"){
      this.movimiento.tipo = "Ingreso";
      this.movimiento.categoria = "Nómina";
    }
    else{
      this.movimiento.tipo = "Gasto";
      this.movimiento.categoria = "Hipoteca";
    }
  }

  /** métodos con funcionalidad para el modelo de la vista  */
  guardarMovimiento() {
    if (this.movimiento.tipo === 'Ingreso')
      this.ingresos += this.movimiento.importe
    else
      this.gastos += this.movimiento.importe
    this.balance = this.ingresos - this.gastos
    this.movimientos.push(Object.assign({}, this.movimiento))
  }  
  ordenarPor(campo: string) {
    this.sentidoOrden = -1 * this.sentidoOrden
    this.movimientos.sort((a, b) => a[campo] < b[campo] ? this.sentidoOrden : -1 * this.sentidoOrden)
  }
  fecha(cadena) {
    return new Date(cadena)
  }
}
/**
 * Clase para representar el modelo de datos
 * debería ir en un fichero aparte
*/
export class MovimientoModel {
  _id: string;
  tipo: string
  categoria: string
  fecha: Date
  importe: number
}
