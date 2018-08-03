import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { ICredentials } from '@c8y/client';
import 'paper-loginscreen';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  message: string;

  loginForm = this.fb.group({
    tenant: [''],
    user: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: ['']
  });

  private storedAuthToken;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.tryLoginWithStoredCredentials();
  }

  tryLoginWithStoredCredentials() {
    this.loading = true;
    this.authService.loginWithStoredToken()
      .subscribe(this.redirect.bind(this));
  }

  login() {
    const { rememberMe, ...inputCredentials } = this.loginForm.value;

    this.loading = true;
    this.authService.login(inputCredentials, rememberMe)
      .subscribe(this.redirect.bind(this));
  }

  redirect({ message, loggedIn }) {
    this.setMessage(message);

    if (loggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this.authService.redirectUrl
                       ? this.authService.redirectUrl
                       : '/fiddle';

      // Set our navigation extras object
      // that passes on our global query params and fragment
      const navigationExtras: NavigationExtras = {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      };

      // Redirect the user
      this.router.navigate([redirect], navigationExtras);
    } else {
      this.loading = false;
    }
  }

  setMessage(message) {
    this.message = message;
  }

  logout() {
    this.authService.logout();
  }
}
