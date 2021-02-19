import { Component, OnInit } from '@angular/core';
import { ConnectGetService } from 'src/app/services/connectGet.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  connector : ConnectGetService;
  constructor(connector:ConnectGetService) {
    this.connector = connector;
  }
  result;
  ngOnInit() {
  }
  submit(button1){
    console.log("TOGGLEBUTTON : "+button1);
  }
  imageUpload(imagedata){
    var url=Array();
    var result; 
    url['imagedata'] = imagedata;
    url['root']='image/image';
    this.connector.PostRequest(url,'imagesaver.php').subscribe(
      next => {result=next},
      error => {},
      () => {console.log(result['result'])}
    );
  }
}
