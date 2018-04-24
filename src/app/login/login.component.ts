import { Component, OnInit } from '@angular/core';


import { AuthService } from '../service/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private auth: AuthService ) {
    }

  ngOnInit() {
  }

  onSubmit(value: any){
  	console.log(value);
    this.auth.login(value);	
  	// var user = localStorage.getItem('user');
  	// var userJson= JSON.parse(user);

  }

}
