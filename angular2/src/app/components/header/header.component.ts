import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConnectGetService } from 'src/app/services/connectGet.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuevent = new EventEmitter();
  loginService:LoginService;

  ///TO BE REMOVE
  link:string;


  constructor(loginService:LoginService) { 
    this.loginService = loginService;
  }
  ngOnInit() {
    this.loginService.CheckLoginId();
  }
  menuClicked(){
    this.menuevent.emit(null);
  }
}
