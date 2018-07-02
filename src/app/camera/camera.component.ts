import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-camera',
    templateUrl: 'camera.component.html'
})
export class CameraComponent implements OnInit {

    public videoInputDevices: MediaDeviceInfo[] = [];

    public ngOnInit() {
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            // Get only video input devices
            this.videoInputDevices = devices.filter(device => device.kind === 'videoinput');
        });
    }

}
