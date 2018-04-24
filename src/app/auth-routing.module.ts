import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard.service';

import{RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path:'',redirectTo:'/login' ,pathMatch:'full'
	},
	{
		path:'register',component:RegisterComponent , canActivate: [AuthGuard],
	},
	{
		path:'dashboard',component:DashboardComponent , canActivate: [AuthGuard],
	},
	{
		path:'login',component:LoginComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
