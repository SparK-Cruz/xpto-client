import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerFilter } from './customer-filter';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  currentCustomer: Customer = null;
  error: any = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  onNew(): void {
    this.currentCustomer = new Customer();
    this.currentCustomer.id = 0;
    this.currentCustomer.enabled = true;
  }

  onSelect(customer: Customer): void {
    this.currentCustomer = <Customer> Object.create(customer);
  }

  onFilter(filter: CustomerFilter): void {
    var self = this;
    this.customerService.search(filter)
      .then((customers: Customer[]) => {
        self.customers = customers;
      })
      .catch((fail: any) => {
        self.error = fail;
      });
  }

  loadCustomers(): void {
    var self = this;
    this.customerService.list()
      .then((customers: Customer[]) => {
        self.customers = customers;
      })
      .catch((fail: any) => {
        self.error = fail;
      });
  }
}