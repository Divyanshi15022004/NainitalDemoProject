import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private router: Router) {}

  // ✅ Password validation rule
  isPasswordValid(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasUpperCase && hasSpecialChar;
  }
  login() {
    this.submitted = true;

    if (this.username === 'Divyanshi Nayal' && this.password === 'Hello@1234') {
      this.invalidLogin = false;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidLogin = true;
    }
  }
}
