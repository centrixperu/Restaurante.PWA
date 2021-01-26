import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {
  NbTabsetModule,
  NbMenuModule,
  NbAlertModule,
  NbActionsModule,
  NbLayoutModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbDatepickerModule,
  // NbDialogModule,
  NbWindowModule,
  NbToastrModule,
  NbChatModule,
  NbAccordionModule,
  NbInputModule,
  NbSpinnerModule,
  NbCardModule,
  NbPopoverModule,
  NbRadioModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbAutocompleteModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NbIconModule,
    NbThemeModule,
    NbSecurityModule,
    NbEvaIconsModule,
    NbCardModule,
    NbSelectModule,
    FormsModule,
    NbTabsetModule,
    NbTooltipModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...NbThemeModule.forRoot().providers],
    };
  }
}
