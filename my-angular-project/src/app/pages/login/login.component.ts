import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    const { EmailId, Password } = this.loginObj;
    if(EmailId !='' && Password != ''){
      alert("Login Success");
      localStorage.setItem('angular17token', JSON.stringify(this.loginObj))
      console.log("Login")
      this.router.navigateByUrl('/dashboard')
    }else {
      alert("Login Failed")
    }
    
  }
}

export class Login { 
    EmailId: string;
    Password: string;
    constructor() {
      this.EmailId = '';
      this.Password = '';
    } 
}
