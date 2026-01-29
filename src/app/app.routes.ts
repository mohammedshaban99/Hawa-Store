import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Notfound } from './components/notfound/notfound';
import { Aboutus } from './components/aboutus/aboutus';
import { Users } from './components/users/users';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
{path:'home',component:Home,pathMatch:'full'},
{path:'login',component:Login,pathMatch:'full'},
{path:'register',component:Register,pathMatch:'full'},
{path:'about-us',component:Aboutus,pathMatch:'full'},
{path:'users',component:Users,pathMatch:'full'},
{path:'**',component:Notfound,pathMatch:'full'}
];
