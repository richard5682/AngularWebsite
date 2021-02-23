import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() type:string;
  @Input() label:string;
  text:string;
  constructor() { }

  ngOnInit() {
  }

}
