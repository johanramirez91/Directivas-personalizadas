import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validarCampo(campo: string): boolean {
    return (
      (this.formulario.get(campo)?.invalid || false) &&
      (this.formulario.get(campo)?.touched || false)
    );
  }
}
