import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Notfound } from './components/notfound/notfound';
import { Aboutus } from './components/aboutus/aboutus';
import { Users } from './components/users/users';
import { Viewuser } from './components/viewuser/viewuser';
import { ContactUsComponent } from './components/contactus/contactus';
import { LearnMoreComponent } from './components/learnmore/learnmore';

export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch: 'full'},
{path:'home',component:Home,pathMatch:'full'},
{path:'login',component:Login,pathMatch:'full'},
{path:'register',component:Register,pathMatch:'full'},
{path:'about-us',component:Aboutus,pathMatch:'full'},
{path:'contact-us',component:ContactUsComponent,pathMatch:'full'},
{path:'learn-more',component:LearnMoreComponent,pathMatch:'full'},
{path:'users',component:Users,pathMatch:'full'},
{path:'view-user/:id',component:Viewuser,pathMatch:'full'},
{path:'**',component:Notfound,pathMatch:'full'}
];
