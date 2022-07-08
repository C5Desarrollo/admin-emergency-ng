import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './pages/users/components/users-list/users-list.component';
import { CallEmergencyComponent } from './pages/call-emergency/call-emergency.component';
import { RoomComponent } from './pages/call-emergency/components/room/room.component';
import { VideoComponent } from './pages/call-emergency/components/video/video.component';
import { UsersConectedComponent } from './pages/call-emergency/components/users-conected/users-conected.component';
import { ChatComponent } from './pages/call-emergency/components/chat/chat.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    BaseComponent,
    UsersComponent,
    UsersListComponent,
    CallEmergencyComponent,
    RoomComponent,
    VideoComponent,
    UsersConectedComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BaseModule { }
