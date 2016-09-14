import { Component, Output, EventEmitter } from '@angular/core';
import { CustomerFilter } from './customer-filter';

@Component({
  selector: 'customer-filter',
  templateUrl: 'customer-filter.component.html',
  styleUrls: ['customer-filter.component.css']
})
export class CustomerFilterComponent {
  model: CustomerFilter = new CustomerFilter();

  @Output()
  onChange: EventEmitter<CustomerFilter> = new EventEmitter<CustomerFilter>();

  onSubmit(): void {
    this.onChange.emit(this.model);
  }
}