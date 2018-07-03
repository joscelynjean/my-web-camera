import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full'
  }
];
export const routing = RouterModule.forRoot(appRoutes);
