import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TablasComponent,
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule, MatTableModule,  MatFormFieldModule, MatInputModule, 
     MatButtonModule, SharedModule, MatDialogModule,
    ReactiveFormsModule,MatIconModule
  ],
  exports: [
    TablasComponent
  ]
})
export class TablasModule { }
