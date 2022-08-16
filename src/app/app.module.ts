import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChecklistComponent } from './checklist/checklist.component';
import { LoginService } from './service/login.service';
import { AuthInterceptorInterceptor } from './service/auth-interceptor.interceptor';
import { SeverityComponent } from './severity/severity.component';
import { ProjectDetails } from './models/project-details';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ChecklistComponent,
    SeverityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe,ProjectDetails,LoginService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
