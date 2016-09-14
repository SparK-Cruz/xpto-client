import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerListComponent } from './customer-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'customers', component: CustomerListComponent }
]);