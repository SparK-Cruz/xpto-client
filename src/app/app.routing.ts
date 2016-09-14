import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'customers', loadChildren: 'app/customers/customer.module#CustomerModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);