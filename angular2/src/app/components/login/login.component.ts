import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, Subscriber } from 'rxjs';
import { ConnectGetService } from 'src/app/services/connectGet.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  observable : Observable<any>;
  connectService : ConnectGetService;
  username:string;
  password:string;
  repassword:string;
  email:string;
  data :string[] = [];
  router: Router;
  loginService: LoginService;
  resultdata;
  constructor(connectService: ConnectGetService, router:Router, loginService:LoginService) {
    this.connectService = connectService;
    this.router = router;
    this.loginService = loginService;
  }
  navigateToHome(){
    this.router.navigate(['home']);
  }
  ngOnInit(){

  }
  handler(data:any){;
    switch(data['result']){
      case 0:
        alert("LOGIN FAILED INVALID USERNAME AND PASSWORD");
        break;
      case 1:
        alert("LOGIN SUCESS WITH ACCOUNT ID OF : "+data['id']);
        this.loginService.LogId(data);
        this.navigateToHome();
        break;
      case 2:
        alert("CONNECTION PROBLEM");
        break;
    }

  }
  submit(){
    this.data['username'] = this.username;
    this.data['password'] = this.password;
    this.observable = this.connectService.GetRequest(this.data,'login.php');
    this.observable.subscribe(
    (data)=>{this.resultdata = data},
    (error)=>{alert(error)},
    ()=>{this.handler(this.resultdata)});
  }
  register(){
    this.router.navigate(['register']);
  }
}
