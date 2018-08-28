import { Component } from '@angular/core';

@Component({
  template: `
    <h2>About</h2>
    <p>ø {{today | date:'full'}} | Glenn Dwiyatcita</p>
  `
})
export class AboutComponent {
  today = 1535469846496;
}
