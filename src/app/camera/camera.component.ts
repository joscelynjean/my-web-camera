import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-camera',
  templateUrl: 'camera.component.html'
})
export class CameraComponent implements AfterViewInit {

  public cameras: MediaDeviceInfo[] = [];

  public ngAfterViewInit() {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      // Get only video input devices
      this.cameras = devices.filter(device => device.kind === 'videoinput');

      if (this.cameras.length === 0) {
        // Do something
      }

    });
  }


  /**
   * Select camera to show stream.
   * @param deviceId Id of the camera
   */
  public selectCamera(deviceId: string): void {
    let videoElement: HTMLVideoElement = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: deviceId
      }
    }).then(stream => {
      // Give the stream to the video html element
      videoElement.srcObject = stream;
      // Why this is not working?
      //this.videoForCameraStream.srcObject = stream;
    });
  }

  /**
   * Allow to close camera stream properly.
   */
  public closeCamera(): void {
    let videoElement: HTMLVideoElement = document.querySelector('video');
    let stream: MediaStream = <MediaStream>(videoElement.srcObject);
    if (stream) {
      let track = stream.getTracks()[0];
      track.stop();
    }
  }

  /**
   * Handle camera selection change.
   * @param event select changed
   */
  public handleCameraChange(event: MatSelectChange) {
    event.value == null ? this.closeCamera() : this.selectCamera(event.value);
  }

}
