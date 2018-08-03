import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FiddleContentComponent } from './fiddle-content.component';
import { FiddleRoutingModule } from './fiddle-routing.module';
import { FiddleComponent } from './fiddle.component';

@NgModule({
  imports: [
    SharedModule,
    FiddleRoutingModule
  ],
  declarations: [
    FiddleComponent,
    FiddleContentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiddleModule {}
