import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuChoice } from './menuchoice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit,OnInit {
  readonly RIGHTSHOW=-.5;
  readonly RIGHTHIDE=-12;
  readonly DELTATIME = 10;
  readonly DELTASPEED = 0.7;
  loginService:LoginService;

  menuchoices: MenuChoice[];

  public SHOWING = false;
  
  
  @Input() menutoggle;

  doneAnimating = true;
  rightPos = 0;
  menuwrapper:string = 'menu-wrapper';
  constructor(loginService:LoginService) { 
    this.loginService = loginService;
    this.menuchoices = [
      {name:'HOME',link:'home',title:'',icon:"home",showing:{showing: true}},
      {name:'LOGIN',link:'login',title:'',icon:"login",showing:this.loginService.loginbutton},
      {name:'LOGOUT',link:'home',title:'',icon:"logout",showing:this.loginService.logoutbutton},
      {name:'REGISTER',link:'register',title:'',icon:"app_registration",showing:this.loginService.loginbutton},
      {name:'HOME3',link:'',title:'',icon:"home",showing:{showing: true}}
    ];
  }

  toggle
  ngAfterViewInit(){
    this.rightPos = -11.9;
    this.slideOut();
  }
  ngOnInit(){
    
  }
  slideIn(){
      if(this.rightPos < this.RIGHTSHOW){
        this.doneAnimating = false;
        this.rightPos += this.DELTASPEED;
        this.setRight(this.rightPos);
        setTimeout(()=>this.slideIn(),this.DELTATIME);
      }else{
        this.SHOWING = true;
        this.doneAnimating = true;
      }
  }
  slideOut(){
    if(this.rightPos > this.RIGHTHIDE){
      this.doneAnimating = false;
      this.rightPos -= this.DELTASPEED;
      this.setRight(this.rightPos);
      
      setTimeout(()=>this.slideOut(),this.DELTATIME);
    }else{
      this.SHOWING = false;
      this.doneAnimating = true;
    }
  }
  setRight(right:number){
    document.getElementById(this.menuwrapper).style.right = right+'em';
  }
  menuToggle(){
    if(this.doneAnimating){
      if(this.SHOWING){
        this.slideOut();
      }else{
        this.slideIn();
      }
    }
  }
  hide(name:string){
    if(this.doneAnimating){
      this.slideOut();
      switch(name){
        case('LOGOUT'):
          this.loginService.Logout();
        break;
      }
    } 
  }
}
