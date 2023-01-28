import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Front office',
    loadComponent: () =>
      import('./frontoffice/frontoffice.component')
        .then(m => m.FrontofficeComponent),
    canActivate: [AuthGuard],
    data: ['user']
  },
  {
    path: 'backoffice',
    title: 'Back office',
    loadComponent: () =>
      import('./backoffice/backoffice.component')
        .then(m => m.BackofficeComponent),
        canActivate: [AuthGuard],
        data: ['admin']
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
