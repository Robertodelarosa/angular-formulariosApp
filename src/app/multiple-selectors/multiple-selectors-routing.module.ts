import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveSelectorsComponent } from './reactive-selectors/reactive-selectors.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveSelectorsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class multipleSelectorRoutingModule { }
