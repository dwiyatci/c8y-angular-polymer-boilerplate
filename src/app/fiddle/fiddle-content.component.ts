import { Component, OnInit } from '@angular/core';

import '@polymer/paper-checkbox';
import '@polymer/paper-input/paper-input.js';
import { AuthService } from '../login/auth.service';

@Component({
  templateUrl: './fiddle-content.component.html'
})
export class FiddleContentComponent implements OnInit {
  value: string;
  checked: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout()  {
    this.authService.logout();
  }
}
