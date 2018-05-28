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
const appRoutes: Routes = [
  {path: 'notification', component: ImgCardComponent},
  {path: 'camera', component: CameraComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent,
    CameraComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    PushNotificationsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
