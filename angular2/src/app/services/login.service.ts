import { Injectable } from '@angular/core';
import { ConnectGetService } from './connectGet.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public account_data={login_id:0,username:'Login',thumbnail:'image1.png'};
connector: ConnectGetService;
loginbutton = {showing:true};
logoutbutton = {showing:false}
LogId(data){
  this.account_data.login_id = data['id'];
  this.account_data.username = data['username'];
  this.account_data.thumbnail = data['thumbnail'];
  this.loginbutton.showing = false;
  this.logoutbutton.showing = true;
}
CheckLoginId(){
  this.connector.GetRequest(null,'getLoginSession.php').subscribe(
    data => {
      if(data['result']==1){
        this.account_data.login_id = data['id'];
        this.account_data.username = data['username'];
        this.account_data.thumbnail = data['thumbnail'];
        this.loginbutton.showing = false;
        this.logoutbutton.showing = true;
      }
    }
  );
}
Logout(){
  this.account_data.login_id = 0;
  this.account_data.username = 'Login';
  this.account_data.thumbnail = 'image1.png';
  this.loginbutton.showing = true;
  this.logoutbutton.showing = false;
}
constructor(connector:ConnectGetService) { this.connector= connector;}
}
