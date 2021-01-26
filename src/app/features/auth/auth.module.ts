import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, AuthComponent],
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
