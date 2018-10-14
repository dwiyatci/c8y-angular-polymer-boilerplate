import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@c8y/ngx-components';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
