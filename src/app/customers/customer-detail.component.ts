import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [CustomerService]
})
export class CustomerDetailComponent {
  @Input()
  customer: Customer;

  @Output()
  onChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  message: string;

  onSave(customer: Customer): void {
    var self = this;

    var method: string = "update";
    if (this.customer.id == 0)
      method = "create";

    this.message = "";

    this.customerService[method](this.customer)
      .then((saved: Customer) => {
        self.message = "Salvo com sucesso!";
        customer.id = parseInt(<any> saved.id);
        self.onChange.emit(customer);
        if (method == "create"){
          self.customer = new Customer();
          self.customer.id = 0;
          self.customer.enabled = true;
        }
      })
      .catch((fail: any) => {
        self.message = fail.message;
      });
  }

  constructor(private customerService: CustomerService) { }
}