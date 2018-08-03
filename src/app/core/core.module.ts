import { NgModule, Optional, SkipSelf } from '@angular/core';
import { C8yDataModule } from '@c8y/ngx-data';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

@NgModule({
  imports: [
    C8yDataModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ],
  exports: [
    C8yDataModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
