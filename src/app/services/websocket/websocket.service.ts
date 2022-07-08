import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket) { }

  checkStatus(){
    
    this.socket.on('connect',()=>{
      
      console.log('Conectado al Servidor');
      this.socketStatus = true;
      
    })


    this.socket.on('disconnect',()=>{
      
      console.log('Desconectado del Servidor');
      this.socketStatus = false
      
    })

  }// fin checkstatus


  emitir(evento: string, payload?:any, callback?: Function ){
      
    this.socket.emit(evento, payload, callback);

  }

  eschuchar(evento:string){
    return this.socket.fromEvent( evento );
  }

}
