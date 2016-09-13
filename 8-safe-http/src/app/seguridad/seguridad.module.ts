import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { SeguridadService } from './seguridad.service'
import { SeguridadComponent }   from './seguridad.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [],
  declarations: [SeguridadComponent],
  providers: [SeguridadService]
})
export class SeguridadModule { }
