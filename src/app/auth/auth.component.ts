import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './login';

@Component({
  selector: 'auth-form',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent {
  model: Login = new Login();
  message: string;

  constructor(private authService: AuthService, private router: Router) { }

  onConfirm(): void {
    var self = this;
    this.authService.create(this.model)
      .then((auth: any) => {
        self.router.navigateByUrl('/customers');
      })
      .catch((fail: any) => {
        self.message = fail.message;
      });
  }
}