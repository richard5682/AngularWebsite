import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountView',
  templateUrl: './accountView.component.html',
  styleUrls: ['./accountView.component.css']
})
export class AccountViewComponent implements OnInit {
  @Input() accountData;
 
  constructor() { }

  ngOnInit() {
    
  }

}
