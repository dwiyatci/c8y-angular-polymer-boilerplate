import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrigamiModule } from '@codebakery/origami';
// import { C8yComponentsModule } from '@c8y/ngx-components';

import { AboutComponent } from './about.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrigamiModule,
    // C8yComponentsModule
  ],
  declarations: [
    PageNotFoundComponent,
    AboutComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrigamiModule,
    // C8yComponentsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
