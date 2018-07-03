import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './camera.component';

// Angular material
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: 'camera',
    component: CameraComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatSelectModule],
  exports: [RouterModule],
  declarations: [CameraComponent],
  providers: []
})
export class CameraModule { }

export const routedComponents = [CameraComponent];
