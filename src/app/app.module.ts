import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JWTInterceptorService } from './jwtinterceptor.service';
import { JWTUnAutherizedInterceptorService } from './jwtun-autherized-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: () => {
          return (sessionStorage.getItem('currentUserDetails') ? JSON.parse(sessionStorage.getItem('currentUserDetails') as string)?.token : null)
        }
      }
    })
  ],
  providers: [
     // wirte in order of excdeution of the interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTUnAutherizedInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
