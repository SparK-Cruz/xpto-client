import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  redirectUrl: string;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    var self = this;
    this.redirectUrl = state.url;
    return new Observable((observer: any) => {
      self.authService.noop()
        .then((noop: any) => {
          observer.next(true);
          return true;
        })
        .catch((fail: any) => {
          self.router.navigate(['/auth']);
          observer.next(false);
          return false;
        })
        .then((permitted: boolean) => {
          observer.complete();
          return;
        });
    });
  }
}