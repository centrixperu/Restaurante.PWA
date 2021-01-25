import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { FeaturesComponent } from './features.component';


const routes: Routes = [

  {
  path: '',
  component: FeaturesComponent,
  children: [
    {
        path: 'home',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
