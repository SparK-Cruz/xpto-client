import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Backend } from '../backend/backend';
import { Auth } from './auth';
import { Login } from './login';

@Injectable()
export class AuthService {
  private endpoint = '/api/auth';

  private get url(): string {
    return this.backend.address + this.endpoint;
  }

  private get options(): any {
    return { headers: this.backend.headers };
  }

  constructor(private http: Http, private backend: Backend) { }

  public create(login: Login): Promise<Auth> {
    var self = this;
    var url = this.url;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.post(url, login, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            self.backend.auth = data.auth;
            resolve(data.auth);
          },
          (fail: any) => {
            reject(fail);
          }
        );
    });
  }

  public noop(): Promise<Auth> {
    var self = this;
    var url = this.url;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.put(url, {}, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            resolve(data.noop);
          },
          (fail: any) => {
            reject(fail);
          }
        );
    });
  }

  public delete(): Promise<Auth> {
    var self = this;
    var url = this.url;
    var options = this.options;

    return new Promise((resolve: Function, reject: Function) => {
      self.http.delete(url, options)
        .map(res => res.json())
        .subscribe(
          (data: any) => {
            self.backend.auth = null;
            resolve(data.auth);
          },
          (fail: any) => {
            reject(fail);
          }
        );
    });
  }
}