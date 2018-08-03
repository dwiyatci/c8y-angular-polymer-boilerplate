import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../login/auth-guard.service';
import { FiddleContentComponent } from './fiddle-content.component';
import { FiddleComponent } from './fiddle.component';

const fiddleRoutes: Routes = [
  {
    path: '',
    component: FiddleComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: FiddleContentComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(fiddleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FiddleRoutingModule {}
