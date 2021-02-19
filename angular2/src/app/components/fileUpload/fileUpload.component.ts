import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fileUpload',
  templateUrl: './fileUpload.component.html',
  styleUrls: ['./fileUpload.component.scss']
})
export class FileUploadComponent implements OnInit {
  imageDATAURL;
  @Output() OnSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  submit(file){
    var filereader = new FileReader();
    var imagefile = file['target']['files'][0];
    filereader.readAsDataURL(imagefile);
    filereader.onload = () => {this.imageDATAURL = filereader.result};
  }

  upload(){
    this.OnSubmit.emit(this.imageDATAURL);
  }
}
