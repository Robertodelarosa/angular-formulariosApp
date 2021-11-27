import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSelectorsComponent } from './reactive-selectors/reactive-selectors.component';
import { multipleSelectorRoutingModule } from './multiple-selectors-routing.module';

@NgModule({
  declarations: [
    ReactiveSelectorsComponent
  ],
  imports: [
    CommonModule,
    multipleSelectorRoutingModule
  ]
})
export class MultipleSelectorsModule { }
