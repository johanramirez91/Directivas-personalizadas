import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = 'red';
  private _mensajeError: string = 'Este campo es requerido';
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set mensajeError(value: string) {
    this._mensajeError = value;
    this.setMensajeError();
  }

  htmlElement: ElementRef<HTMLElement>;

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensajeError();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensajeError(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensajeError;
  }
}
