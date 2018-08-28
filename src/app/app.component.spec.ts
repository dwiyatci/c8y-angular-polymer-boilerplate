import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterLinkDirectiveStub } from '../testing/router-directive-link-stub';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('can get RouterLinks from template', async(() => {
    setup().then(({ routerLinks }) => {
      expect(routerLinks.length)
        .toEqual(3, 'should have 3 routerLinks');
      expect(routerLinks[0].linkParams)
        .toEqual('/');
      expect(routerLinks[1].linkParams)
        .toEqual('/fiddle');
      expect(routerLinks[2].linkParams)
        .toEqual('/about');
    });
  }));

  it('can click Fiddle link in template', async(() => {
    setup().then(({ fixture, linkDebugElts, routerLinks }) => {
      const fiddleLinkDebugElt = linkDebugElts[1]; // heroes link DebugElement
      const fiddleLink = routerLinks[1]; // heroes link directive

      expect(fiddleLink.navigatedTo)
        .toBeNull('should not have navigated yet');

      fiddleLinkDebugElt.triggerEventHandler('click', null);

      expect(fiddleLink.navigatedTo)
        .toEqual('/fiddle');
    });
  }));

  function setup() {
    return TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkDirectiveStub
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
      .then(() => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        const comp: AppComponent = fixture.componentInstance;

        fixture.detectChanges(); // trigger initial data binding

        // find DebugElements with an attached RouterLinkStubDirective
        const linkDebugElts: DebugElement[] = fixture.debugElement
          .queryAll(By.directive(RouterLinkDirectiveStub));

        // get attached link directive instances
        // using each DebugElement's injector
        const routerLinks: RouterLinkDirectiveStub[] = linkDebugElts.map(debugElt => debugElt.injector.get(RouterLinkDirectiveStub));

        return { fixture, comp, linkDebugElts, routerLinks };
      });
  }
});
