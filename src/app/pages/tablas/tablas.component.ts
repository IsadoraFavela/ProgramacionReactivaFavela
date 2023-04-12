import {Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

export interface Estudiante {
  ID: number;
  Nombre: string;
  Apellido: string;
  Edad: number;
  Fecha_registro: Date;
}




@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})





export class TablasComponent {

  
estudiantes : Estudiante[] = [
  {ID: 1, Nombre: 'Emmanuel', Apellido: 'Gonzalez', Edad:23, Fecha_registro: new Date()  },
  {ID: 2, Nombre: 'Daniel', Apellido: 'Garcia', Edad:25, Fecha_registro: new Date()},
  {ID: 3, Nombre: 'Alma', Apellido: 'Galvan', Edad:24, Fecha_registro: new Date() }, 
  {ID: 4, Nombre: 'Julian', Apellido: 'Saucedo', Edad:23, Fecha_registro: new Date()},
];
dataSource =  new MatTableDataSource(this.estudiantes);
  displayedColumns: string[] = ['ID', 'nombreCompleto', 'Edad', 'Fecha_registro', 'Acciones'];
 
  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}


  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        console.log(this.dataSource.data.length)
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            Fecha_registro: new Date(),
            ID: this.dataSource.data.length + 1,
            Edad: Math.floor(Math.random() * (60 - 20) + 20),
          }
        ];
      }
    })
  }
  editarABMAlumnos(i: number): void {

     
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
      console.log(valor);
      
       this.estudiantes[i]={ID: this.estudiantes[i].ID, Nombre: valor.Nombre, Apellido: valor.Apellido, Edad: this.estudiantes[i].Edad, Fecha_registro: this.estudiantes[i].Fecha_registro }
        this.dataSource.data = this.estudiantes
      
      }
    })
  }

  eliminarAlumno(i: number): void{
    
    this.estudiantes.splice(i, 1);
    this.dataSource.data = this.estudiantes
  }
}

