import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(value: any){
  	console.log(value);
  	console.log(value.password);
  	console.log(value.retype_password);
     this.auth.register(value);

  	// var user = localStorage.getItem('user');
  	// var userJson= JSON.parse(user);

  }

}
