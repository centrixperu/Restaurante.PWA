import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AuthJWTInterceptor } from '../app/core/interceptor/auth-jwt.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthJWTInterceptor , multi: true },
    // { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: function () { return false; } },
    { provide: LOCALE_ID, useValue: 'es-Pe' },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
