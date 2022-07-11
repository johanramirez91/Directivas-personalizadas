import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  color: string = 'red';
  texto: string = 'Campo requerido';
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

  cambiarColor(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }

  cambiarMensaje() {
    this.texto = Math.random().toString();
  }
}
