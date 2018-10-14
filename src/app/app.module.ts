import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
// import { OutletComponent } from '@c8y/ngx-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    AppRoutingModule
  ],
  /**
   * TODO: Remove this workaround after bug in cumulocity-ui/packages/ngx-components/core/i18n/locale.provider.ts is fixed, i.e.
   * the value used for `LOCALE_ID` token (`localStorage.getItem('c8y_language')`) maybe null.
   */
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    AppComponent,
    // OutletComponent
  ]
})
export class AppModule {}
