import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountview',
  templateUrl: './accountview.component.html',
  styleUrls: ['./accountview.component.scss']
})
export class AccountviewComponent implements OnInit {
  router:Router;
  @Input() username:string;
  constructor(router:Router) { 
    this.router=router;
  }

  ngOnInit() {
  }
  goto_accountpage(){
    this.router.navigate(['account']);
  }
}
