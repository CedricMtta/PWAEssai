import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import {PushNotificationsModule} from 'ng-push';
import { CameraComponent } from './camera/camera.component.';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {path: 'notification', component: ImgCardComponent},
  {path: 'camera', component: CameraComponent},
  { path: '', redirectTo: 'camera', pathMatch: 'full' },
  { path: '**', redirectTo: 'camera' }
]
@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent,
    CameraComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    PushNotificationsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
