import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Website';
  showLoginForm = false;

  toggleLogin() {
    this.showLoginForm = !this.showLoginForm;
  }
}

