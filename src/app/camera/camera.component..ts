import { Component, ViewChild, OnInit } from '@angular/core';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'app-img-card',
  templateUrl: './camera.component.html'
})
export class CameraComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;  
  video: any;

  displayControls: boolean;

  constructor() {
    this.displayControls = false;
   }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }
   sound() {
    this.initCamera({ video: true, audio: true });
  }
  
  initCamera(config:any) {
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }
}
