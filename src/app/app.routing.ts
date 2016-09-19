import { load } from './async-ng-module-loader';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { AuthGuard } from './backend/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { CustomerListComponent } from './customers/customer-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'customers',
    component: CustomerListComponent,
    canActivate: [AuthGuard]
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);