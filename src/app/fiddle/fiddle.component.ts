import { Component } from '@angular/core';
import { FiddleService } from './fiddle.service';

@Component({
  template:  `
    <h3>Fiddle</h3>
    <router-outlet></router-outlet>
  `
})
export class FiddleComponent {
  constructor(fiddleService: FiddleService) {}
}
