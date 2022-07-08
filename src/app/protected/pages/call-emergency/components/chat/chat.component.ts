import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../../../../services/websocket/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit, OnDestroy {

  texto: string = '';
  mensajesSubscription!: Subscription; 

  elemento!: HTMLElement;

  mensajes: any [] = [];

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(){

    this.elemento = <HTMLInputElement>document.getElementById('chat-msjs')
    
    this.mensajesSubscription = this.chatService.getMessages().subscribe(msg=>{

      this.mensajes.push( msg );

      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },500)
      
    })
  }

  ngOnDestroy() {
    this.mensajesSubscription?.unsubscribe();
  }

  enviar(){

    if( this.texto.trim().length === 0 ){
      return;
    }
    
    this.chatService.sendMessage(this.texto)
    this.texto = ''; 
    
  }

}
