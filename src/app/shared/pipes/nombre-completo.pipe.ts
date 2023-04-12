import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/pages/tablas/tablas.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante, ...args: unknown[]): unknown {
    return  `${value.Nombre} ${value.Apellido}`;
  }

}
