import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registro', component: LoginComponent },
      { path: 'login', component: RegistroComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
