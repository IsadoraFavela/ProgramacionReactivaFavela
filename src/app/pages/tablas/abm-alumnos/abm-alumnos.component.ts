import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ControlErrorMessagesPipe } from 'src/app/shared/pipes/control-error-messages.pipe';


@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {
  
  nombreControl = new FormControl('', [Validators.required,
  
    Validators.minLength(3),
  ]);
  apellidoControl = new FormControl('', [Validators.required]);
  

  alumnosForm = new FormGroup({
    Nombre: this.nombreControl,
    Apellido: this.apellidoControl,
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}


  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }

 
}

