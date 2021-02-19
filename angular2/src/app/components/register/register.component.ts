import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConnectGetService } from 'src/app/services/connectGet.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  email = '';
  repassword = '';
  response = '';
  repasserror = false;
  passerror = false;
  showPassword = true;
  usererror = false;
  connector:ConnectGetService;
  router:Router;
  constructor(connector:ConnectGetService, router:Router) { 
    this.connector = connector;
    this.router = router;
  }
  checkInputs(){
    if(this.checkLength(this.password)){
      this.passerror=true;
    }else{
      this.passerror=false;
    }
    if(this.password == this.repassword){
      this.repasserror=false;
    }else{
      this.repasserror=true;
    }
    if(this.checkLength(this.username)){
      
      this.usererror = true;
    }else{
      this.usererror = false;
    }
    if(this.usererror || this.passerror || this.repasserror){
      return false;
    }else{
      return true;
    }
  }
  checkLength(string){
    if(string.length < 6 || string.length > 15){
      return true;
    }
    return false;
  }
  ngOnInit() {
  }
  changeVisibility(){
    this.showPassword = !this.showPassword;
  }
  submit(){
    if(this.checkInputs() || true){
      var field=Array();
      field['username']=this.username;
      field['password']=this.password;
      field['email']=this.email;
      this.connector.GetRequest(field,"register.php").subscribe(
        data => {this.response=data},
        error => {},
        () => {if(this.response != null && this.response['response']==1){
          this.router.navigate(['login']);
        }}
      );
    }
  }
}
