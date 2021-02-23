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
  constructor(router:Router,private loginservice:LoginService) { 
    this.router = router;
    
  }

  ngOnInit() {
    this.loginservice.notifyLogin().subscribe(
      data=>{
        this.username=data['username'];
      },
      error => console.log(error)
    );
  }

}
