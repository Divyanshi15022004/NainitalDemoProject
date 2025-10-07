   
 import { Component } from '@angular/core';

 @Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
 })
 export class SignupComponent {
 
   username: string = '';
   email: string = '';
   password: string = '';
   phone: string = '';
 
   constructor() {}
 
   
   isPasswordValid(password: string): boolean {
     const hasLowerCase = /[a-z]/.test(password);
     const hasUpperCase =/[A-Z]/.test(password);
     const hasSpecialChar = /[!@#$%^&*]/.test(password);
     return password.length >= 8 && hasLowerCase && hasSpecialChar && hasUpperCase;
   }
 
   
   onlyNumberKey(event: KeyboardEvent): boolean {
     const charCode = event.which ? event.which : event.keyCode;
     if (charCode < 48 || charCode > 57) {
       event.preventDefault();
       return false;
     }
     return true;
   }
 
   
   signup() {
     if (
       this.username.length <= 20 &&              
       this.email.length <= 20 &&                 
       /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(this.email) &&
       this.isPasswordValid(this.password) &&
       /^[0-9]{10}$/.test(this.phone)
     ) {
       
       console.log('User Data:', {
         username: this.username,
         email: this.email,
         password: this.password,
         phone: this.phone
       });
     }
   }
 }