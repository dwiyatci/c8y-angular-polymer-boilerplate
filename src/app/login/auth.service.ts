import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BasicAuth,
  FetchClient,
  ICredentials,
  Realtime,
  UserService,
  TenantService
} from '@c8y/client';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  loggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  private TOKEN_KEY = '_tcy8';

  constructor(
    private router: Router,
    private basicAuth: BasicAuth,
    private fetchClient: FetchClient,
    private realtime: Realtime,
    private tenantService: TenantService,
    private userService: UserService
  ) {}

  loginWithStoredToken(): Observable<any> {
    const token = this.getStoredToken();

    if (token) {
      return this.login({ token });
    }

    return of({ loggedIn: this.loggedIn });
  }


  login(credentials: ICredentials, rememberMe?: boolean): Observable<any> {
    // console.dir(credentials);
    const token = this.basicAuth.updateCredentials(credentials);
    // console.log(token);

    return from(Promise.all([
      this.tenantService.current(),
      this.userService.current()
    ]))
      .pipe(
        map(([tenantRes]) => {
          const { data: tenant } = tenantRes;

          this.basicAuth.updateCredentials({ tenant: tenant.name });

          this.storeToken(token, sessionStorage);
          if (rememberMe) {
            this.storeToken(token, localStorage);
          }

          this.loggedIn = true;

          return {
            loggedIn: this.loggedIn
          };
        }),
        catchError((errRes) => {
          this.loggedIn = false;

          return of({
            loggedIn: this.loggedIn,
            message: `An error occured. ${errRes.data.message || ''}`
          });
        })
      );
  }

  logout(): void {
    this.loggedIn = false;
    this.basicAuth.clearCredentials();
    this.realtime.disconnect();
    this.removeStoredToken();
    this.router.navigate(['/login']);
  }

  private getStoredToken() {
    return localStorage.getItem(this.TOKEN_KEY)
           || sessionStorage.getItem(this.TOKEN_KEY);
  }

  private storeToken(token, storage) {
    storage.setItem(this.TOKEN_KEY, token);
  }

  private removeStoredToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
