import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './login/auth-guard.service';
import { SelectivePreloadingStrategy } from './core/selective-preloading-strategy';
import { AboutComponent } from './shared/about.component';
import { PageNotFoundComponent } from './shared/not-found.component';

const appRoutes: Routes = [
  {
    path: 'fiddle',
    loadChildren: './fiddle/fiddle.module#FiddleModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/fiddle',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
        useHash: true,
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
