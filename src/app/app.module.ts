import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { UsersComponent } from './users/users.component';
import { ButtonComponent } from './button/button.component';
import { LoginComponent } from './login/login.component';
import { IndexMenuComponent } from './index-menu/index-menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';
import {CustomRequestOptions} from './customer_request_options';
import { RegisterComponent } from './register/register.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UploadComponent } from './upload/upload.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ButtonComponent,
    LoginComponent,
    IndexMenuComponent,
    HappyBirthdayComponent,
    RegisterComponent,
    SlideshowComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {provide: HTTP_INTERCEPTORS, useClass: CustomRequestOptions, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
