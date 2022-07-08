import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CallEmergencyComponent } from './pages/call-emergency/call-emergency.component';

const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'call-emergency',
    component:CallEmergencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
