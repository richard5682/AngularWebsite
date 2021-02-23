import { HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { ConnectService } from './connect.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  i=0;
  dataresult;
  userLoggedIn:boolean=false;
  loginID:number;
  loginUsername:string;
  subject = new Subject<any>();
  constructor(private connect:ConnectService) { 
    
  }
  ngOnInit(){
    
  }
  login(username,password){
    if(!this.userLoggedIn){
      if(username.length > 0 && password.length > 0){
        var params = new HttpParams().set('username',username).set('password',password);
        this.connect.getRequest('login',params).subscribe(
          (data) => {
            this.dataresult=data;
            if(data['result'] == 1){
            this.userLoggedIn = true;
            this.loginID = data['id'];
            this.loginUsername = data['username'];
            this.subject.next(this.dataresult);
            }
          },
          (error) => {},
          () => {}
        );
      }
    }
  }
  notifyLogin():Observable<any>{
    return this.subject.asObservable();
  }
  
}
