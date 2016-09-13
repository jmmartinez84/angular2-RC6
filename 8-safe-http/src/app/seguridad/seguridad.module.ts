import { NgModule } from '@angular/core';

import { SeguridadService } from './seguridad.service'
import { SeguridadComponent }   from './seguridad.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [SeguridadComponent],
  providers: [SeguridadService],
})
export class SeguridadModule { }
