import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Front office',
    loadComponent: () =>
      import('./frontoffice/frontoffice.component')
        .then(m => m.FrontofficeComponent)
  },
  {
    path: 'backoffice',
    title: 'Back office',
    loadComponent: () =>
      import('./backoffice/backoffice.component')
        .then(m => m.BackofficeComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
