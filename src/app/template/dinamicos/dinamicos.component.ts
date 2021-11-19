import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Roberto',
    favoritos: [
      { id: 1, nombre: 'Halo' },
      { id: 2, nombre: 'DeathStranding' },
    ]
  }

  guardar() {
    console.log("Guardado");
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
