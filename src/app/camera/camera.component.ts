import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-camera',
    templateUrl: 'camera.component.html'
})
export class CameraComponent implements AfterViewInit {

    public cameras: MediaDeviceInfo[] = [];
    public cameraStream: MediaStream = null;


    // @ViewChild('videoForCameraStream') videoForCameraStream: HTMLMediaElement;

    public ngAfterViewInit() {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            // Get only video input devices
            this.cameras = devices.filter(device => device.kind === 'videoinput');

            if (this.cameras.length === 0) {
              // Do something
            }

            // Take the latest one
            const camera = this.cameras[this.cameras.length - 1];
            navigator.mediaDevices.getUserMedia({
              video: {
                deviceId: camera.deviceId
              }
            }).then(stream => {
              // Give the stream to the video html element
              document.querySelector('video').srcObject = stream;
              // Why this is not working?
              //this.videoForCameraStream.srcObject = stream;
            });



        });
    }

}
