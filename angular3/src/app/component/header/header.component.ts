import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/connect/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router:Router;
  username:string;
  LoggedIn:boolean = false;

  constructor(router:Router,private loginservice:LoginService) { 
    this.router = router;
    
  }

  ngOnInit() {
    this.loginservice.notifyLogin().subscribe(
      data=>{
        this.username=data['username'];
        if(data['result'] == 1){
          this.LoggedIn = true;
        }else{
          this.LoggedIn=false;
        }
      },
      error => console.log(error)
    );
  }
  logout(){
    this.loginservice.logout();
    this.router.navigate(['homepage']);
  }
}
