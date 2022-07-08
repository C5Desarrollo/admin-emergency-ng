import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    usuario:['eve.holt@reqres.in', [Validators.required] ],
    password: ['cityslicka', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService : AuthService,
              ) { }

  login(){
    const {usuario, password} = this.loginForm.value;
    this.authService.login( usuario, password )
    .subscribe(resp => {
      if (resp.token){
        localStorage.setItem('token',resp.token)
        location.href = '/main/users';
        this.getDataUser();
      }
    });
  }

  getDataUser(){
    this.authService.getUserData()
    .subscribe(resp => {
      if (resp.data){
          localStorage.setItem('user',JSON.stringify(resp.data))
      }
    });
  }



  

}
