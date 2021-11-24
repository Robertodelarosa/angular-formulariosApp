import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.pattern(this.validatorService.nombreApellidoPattern)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this.validatorService.emailPattern)],
      [this.emailValidator]
    ],
    username: ['', [
      Validators.required,
      this.validatorService.noPuedeSerRollingTunder
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    password2: ['', [
      Validators.required,
    ]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Roberto delaRosa',
      email: 'test1@test.com',
      username: 'roberto117',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }

}
