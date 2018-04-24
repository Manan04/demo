import {HttpClient , HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Router } from '@angular/router' ;

import {config} from "../app.config";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient  , private route:Router) {}
  getuser(){

  }
  resetPassword(credentials){
    var user = JSON.parse(localStorage.getItem('user'));
    var head  = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
  	
  	this.http.post(config.serverApiUrl + 'pwreset' ,credentials ,{
    headers: head} )
  	.subscribe(
  		data=>{
  			console.log(data);
  			return data;
  		},
  		err=> {
  			if (err.error instanceof Error) {
		        // A client-side or network error occurred. Handle it accordingly.
		        console.log('An error occurred:', err.error.message);
		      } else {
		        // The backend returned an unsuccessful response code.
		        // The response body may contain clues as to what went wrong,
		        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
		      }
  		});
  }

  register(credentials){
    var head  = new HttpHeaders();
    var user = JSON.parse(localStorage.getItem('user'));
    head.append('token', user['token']);
    head.append('userId', user['id']);
  	

  	this.http.post(config.serverApiUrl + 'users' ,credentials ,{
    headers: head } )
  	.subscribe(
  		data=>{
  			console.log(data);
  			return data;
  		},
  		err=> {
  			if (err.error instanceof Error) {
		        // A client-side or network error occurred. Handle it accordingly.
		        console.log('An error occurred:', err.error.message);
		      } else {
		        // The backend returned an unsuccessful response code.
		        // The response body may contain clues as to what went wrong,
		        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
		      }
  		});
  }
  listAllUser(sortKey, order , page , size , searchValue , userrole){
    var user = JSON.parse(localStorage.getItem('user'));
    var head  = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
    this.http.get(config.serverApiUrl + 'users' +
     '?sort='+ sortKey +","+ order + "&page=" + page +
     '&size=' + size + '&search=' + searchValue + '&'+userrole,{
    headers: head} )
    .subscribe(
      data=>{
        console.log(data);
        return data;
      },
      err=> {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
      });
  }
  singleUser(userid){
    var user = JSON.parse(localStorage.getItem('user'));
    var head  = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
    this.http.get(config.serverApiUrl + 'users' +
     '/'+ userid,{
    headers: head } )
    .subscribe(
      data=>{
        console.log(data);
        return data;
      },
      err=> {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
      });
  }
  deleteUser(credentials){
    var user = JSON.parse(localStorage.getItem('user'));
    var head  = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
    this.http.delete(config.serverApiUrl + 'users',{
    headers: head} )
    .subscribe(
      data=>{
        console.log(data);
        return data;
      },
      err=> {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
      });
  }
  editUser(credentials){
    var user = JSON.parse(localStorage.getItem('user'));
    var head = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
    this.http.put(config.serverApiUrl + 'users' ,credentials ,{
    headers: head} )
    .subscribe(
      data=>{
        console.log(data);
        return data;
      },
      err=> {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
      });
  }
 
  login(credentials) {
  	// var user ;
    this.http
  .post(config.serverApiUrl +'login', credentials)
  // See below - subscribe() is still necessary when using post().
  .subscribe(
  	data => {
  		console.log(data);
  		localStorage.setItem('user', JSON.stringify(data));
  		console.log("the user json is " );
	  	console.log(data);
	  	console.log (data['token']);
	  	// console.log(token);
	  	 if(data['token']){
	  	 	this.route.navigate(['/dashboard']);
	  	 }
	  	 else {
	  	 	alert("not authorized");
	  	 }
  	},
    err => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  	
  
	}
	loggedIn() {
  		var user = JSON.parse(localStorage.getItem('user'));
  		if(user['token'] != undefined){
  			return true;
  		}
  		else {
  			return false;
  		}
	}
	logOut(){
		var user = JSON.parse(localStorage.getItem('user'));
    var head = new HttpHeaders();
    head.append('token', user['token']);
    head.append('userId', user['id']);
		this.http.post(config.serverApiUrl + 'logout' ,user['token'] ,{
    headers: head} )
  	.subscribe(
  		data=>{
  			console.log(data);
  			localStorage.clear();
  			this.route.navigate(['/login']);
  		},
  		err=> {
  			if (err.error instanceof Error) {
		        // A client-side or network error occurred. Handle it accordingly.
		        console.log('An error occurred:', err.error.message);
		      } else {
		        // The backend returned an unsuccessful response code.
		        // The response body may contain clues as to what went wrong,
		        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
		      }
  		});
		
	}
}