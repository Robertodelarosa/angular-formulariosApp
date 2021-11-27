import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/pais';

@Component({
  selector: 'app-reactive-selectors',
  templateUrl: './reactive-selectors.component.html',
  styles: [
  ]
})
export class ReactiveSelectorsComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    continente: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  })

  continentes: string[] = []
  paises: Pais[] = []
  fronteras: PaisSmall[] = []

  constructor(private fb: FormBuilder, private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.continentes = this.paisesService.continentes;
    this.miFormulario.get('continente')?.valueChanges
      .pipe(
        // tap(() => this.miFormulario.get('pais')?.reset('')),
        switchMap(continente => this.paisesService.getPaises(continente)))
      .subscribe(paises => this.paises = paises);
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        // tap(() => console.log("Pase por aqui")),
        switchMap(cca2 => this.paisesService.getBordersConCca2(cca2)),
        switchMap(({ borders }) => this.paisesService.getPaisesFronteras(borders!))
      )
      .subscribe(fronteras => this.fronteras = fronteras)
  }

  guardar() {
    console.log(this.miFormulario.value)
  }
}
