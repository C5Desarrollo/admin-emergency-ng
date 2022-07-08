import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService,
    public usuarioService: UsuarioService
  ) { }

  user: any;
  
  sendMessage( mensaje: string){
      
    this.user = this.usuarioService.getUserSocket()


      
      const payload = {
        de: `${this.user.first_name || '' } ${this.user.last_name || '' }`,
        cuerpo: mensaje
      };

      this.wsService.emitir('mensaje', payload); 
  }

  getMessages(){
    return this.wsService.eschuchar('mensaje-nuevo');
  }

}
