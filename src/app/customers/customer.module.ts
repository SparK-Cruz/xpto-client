import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './customer.routing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerFilterComponent } from './customer-filter.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerFilterComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
