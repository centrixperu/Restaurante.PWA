import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './components/main/main.component';
import { NbListModule, NbPopoverModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
const PIPES = [
];

const COMPONENTS = [MainComponent];

const SERVICES = [];

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    NbSpinnerModule,
    NbPopoverModule,
    FormsModule,
    SharedModule,
    NbListModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    DashboardComponent,
  ]
})
export class DashboardModule {
  static forRoot(): ModuleWithProviders<DashboardModule> {
    return {
      ngModule: DashboardModule,
      providers: [...SERVICES, ...NbThemeModule.forRoot().providers],
    };
  }
}
