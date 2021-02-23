import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  constructor(private router:Router){}
  ngOnInit(){
    this.router.events.subscribe(
      (evt) => { if((evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    })
  }
}
