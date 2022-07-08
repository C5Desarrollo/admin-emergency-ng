import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUserSocket(){
    console.log(JSON.parse(localStorage.getItem("user") || ''));
    
    return JSON.parse(localStorage.getItem("user") || '');
  }

}
