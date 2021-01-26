import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  {
      path: 'app',
      loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    }, 
  // { path: '', redirectTo: 'app', pathMatch: 'full' },
  // { path: '**', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
