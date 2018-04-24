import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';


import{AuthRoutingModule} from './auth-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthService} from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
