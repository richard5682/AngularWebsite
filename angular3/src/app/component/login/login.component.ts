import { HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { ConnectService } from 'src/app/service/connect/connect.service';
import { LoginService } from 'src/app/service/connect/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginservice:LoginService,private router:Router) { 

  }

  ngOnInit() {
    this.loginservice.notifyLogin().subscribe(
      data => {
        if(data['result']==1){
          this.router.navigate(['homepage']);
        }
      }
    );
  }
  login(username:string,password:string){
    this.loginservice.login(username,password);
    
  }
  routeToRegister(){
    this.router.navigate(['register']);
  }
}
