import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
},
{
  path: 'auth',
  children: [
    {
      path: '',
      component: LoginComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
