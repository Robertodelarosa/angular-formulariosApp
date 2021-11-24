import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerRollingTunder(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'rollingtunder') {
      return { noRollingTunder: true }
    }
    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.pattern(this.nombreApellidoPattern)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]],
    username: ['', [
      Validators.required,
      this.noPuedeSerRollingTunder
    ]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Roberto delaRosa',
      email: 'robertodelarosa117@gmail.com',
      username: 'roberto117'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }

}
