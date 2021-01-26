import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AuthJWTInterceptor } from '../app/core/interceptor/auth-jwt.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import {
  NbMenuModule,
  NbSidebarModule,
  NbDialogModule,
  NbToastrModule,
  NbWindowModule,
  NbDatepickerModule,
} from '@nebular/theme';
import localeEsPE from '@angular/common/locales/es-PE';
import { AuthModule } from './features/auth/auth.module';
registerLocaleData(localeEsPE, 'es-Pe');

const NB_MODULES = [
  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDialogModule.forRoot(),
  NbDialogModule,
  NbWindowModule,
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NB_MODULES,
    SharedModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AuthModule,
    AppRoutingModule,
    NbToastrModule.forRoot(),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthJWTInterceptor , multi: true },
    { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: function () { return false; } },
    { provide: LOCALE_ID, useValue: 'es-Pe' },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
