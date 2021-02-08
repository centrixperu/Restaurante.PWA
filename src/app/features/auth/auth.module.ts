import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { NbPasswordAuthStrategy, NbAuthModule,NbAuthJWTToken } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule
} from '@nebular/theme';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, AuthComponent, SignInComponent, SignUpComponent, CarouselComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NgbModule,
    ShowHidePasswordModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'Data.Token',
          },
          baseEndpoint: environment.apiBaseServiceUrl,
          login: {
            endpoint: '/Auth/Autenticar',
            method: 'post',
            redirect: {
              success: '/home',
              failure: null,
            },
            defaultErrors: ['Usuario y/o contraseña incorrectos. Intente nuevamente.'],
            defaultMessages: ['Has ingresado exitosamente.'],
          },
          logout: {
            endpoint: '/api/Login/Salir',
            method: 'post',
            redirect: {
                success: '/auth/login',
                failure: null,
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          rememberMe: false,
          showMessages: {
            success: true,
            error: true,
          },
        },
        logout: {
          redirectDelay: 0,
          strategy: 'email',
        },
      },
    }),
  ]
})
export class AuthModule { }
