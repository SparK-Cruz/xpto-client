import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Backend } from '../backend/backend';
import { Customer } from './customer';
import { CustomerFilter } from './customer-filter';

@Injectable()
export class CustomerService{
  private endpoint = "/api/customers";

  private get url(): string{
    return this.backend.address + this.endpoint;
  }
  private get options(): any{
    return {headers: this.backend.headers};
  }

  constructor(private http: Http, private backend: Backend) { }

  public search(filter: CustomerFilter): Promise<Customer[]> {
    var self = this;
    var url = this.url + '/search';
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.post(url, filter, options)
        .map(res => res.json())
        .subscribe(
          (data: any)=>{
            resolve(<Customer[]> data.customers);
          },
          (fail: any)=>{
            reject(fail);
          }
        );
    });
  }

  public list(): Promise<Customer[]> {
    var self = this;
    var url = this.url;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.get(url, options)
        .map(res => res.json())
        .subscribe(
          (data: any)=>{
            resolve(<Customer[]> data.customers);
          },
          (fail: any)=>{
            reject(fail);
          }
        );
    });
  }

  public get(id: number): Promise<Customer> {
    var self = this;
    var url = this.url + '/' + id;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.get(url, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(<Customer> data.customer);
          },
          (fail: any) => {
            reject(fail);
          });
    });
  }

  public create(customer: Customer): Promise<Customer> {
    var self = this;
    var url = this.url;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.post(url, customer, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(<Customer> data.customer);
          },
          (fail: any) => {
            reject(fail);
          });
     });
  }

  public update(customer: Customer): Promise<Customer> {
    var self = this;
    var url = this.url + '/' + customer.id;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.put(url, customer, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(<Customer> data.customer);
          },
          (fail: any) => {
            reject(fail);
          });
    });
  }

  public delete(customer: Customer): Promise<Customer> {
    var self = this;
    var url = this.url + '/' + customer.id;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.delete(url, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(<Customer> data.customer);
          },
          (fail: any) => {
            reject(fail);
          });
    });
  }
}