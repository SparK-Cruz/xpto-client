import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Backend } from '../backend/backend';
import { User } from './user';

@Injectable()
export class UserService {
  private endpoint = "/api/users";

  private get url(): string{
    return this.backend.address + this.endpoint;
  }
  private get options(): any{
    return {headers: this.backend.headers};
  }

  constructor(private http: Http, private backend: Backend) { }

  public get(id: number): Promise<User> {
    var self = this;
    var url = this.url + '/' + id;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.get(url, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(<User> data.user);
          },
          (fail: any) => {
            reject(fail);
          }
        );
    });
  }
}