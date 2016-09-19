import { Headers } from '@angular/http';
import { Auth } from '../auth/auth';
import { environment } from '../../environments/environment';

export class Backend {
  private static _auth: Auth = null;
  address: string = null;

  public get auth(): Auth{
    return Backend._auth;
  }
  public set auth(auth: Auth){
    Backend._auth = auth;
  }

  constructor() {
    this.address = environment.backendAddress;
  }

  public get headers(): Headers{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.auth !== null)
      headers.append('Authorization', 'Token '+this.auth.token);

    return headers;
  }
}