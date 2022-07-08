import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket/websocket.service';
import { ChatService } from '../services/websocket/chat.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styles: [
  ]
})
export class BaseComponent implements OnInit {

  constructor(
    public wsService: WebsocketService,
    public chatService: ChatService
    ) { }

  ngOnInit(){

    this.wsService.checkStatus();

    // this.chatService.sendMessage('');
    console.log('Mensaje Enviado...');
    
  }

}
