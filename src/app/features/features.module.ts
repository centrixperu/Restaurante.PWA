import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbUserModule,
  NbPopoverModule,
  NbMenuModule,
  NbSidebarModule,
  NbDialogModule,
  NbToastrModule,
  NbWindowModule,
  NbDatepickerModule,
  NbButtonModule,
  NbInputModule,
  NbCardModule,
  NbCheckboxModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbListModule,
  NbDialogRef,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
export const NB_CORE_PROVIDERS = [...DashboardModule.forRoot().providers];

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    DashboardModule,
    FormsModule,
    SharedModule,
    NbCardModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbPopoverModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,
    NbListModule,
  ],
  providers: [
    {
      provide: NbDialogRef,
      useValue: {},
    },
  ],
})
export class FeaturesModule {
  static forRoot(): ModuleWithProviders<FeaturesModule> {
    return {
      ngModule: FeaturesModule,
    };
  }
}
