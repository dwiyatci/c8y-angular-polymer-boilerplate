import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { C8yComponentsModule } from '@c8y/ngx-components';

import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // C8yComponentsModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // C8yComponentsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
