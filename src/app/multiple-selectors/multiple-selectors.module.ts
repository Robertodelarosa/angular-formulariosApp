import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSelectorsComponent } from './reactive-selectors/reactive-selectors.component';
import { multipleSelectorRoutingModule } from './multiple-selectors-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveSelectorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    multipleSelectorRoutingModule
  ]
})
export class MultipleSelectorsModule { }
