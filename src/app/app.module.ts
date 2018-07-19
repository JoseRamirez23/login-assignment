import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule} from '@angular/router';
import { ChangeService } from './change.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //this right here is to display right away
      // {
      //   path: '',
      //   component: LoginComponent
      // },
      
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path:'app',
        component: AppComponent
      }
    ])
  ],
  providers: [ChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
