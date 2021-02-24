import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/service/connect/connect.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.scss']
})
export class UploadfileComponent implements OnInit {
  imagedisplay;
  constructor(private connect:ConnectService) { }

  ngOnInit() {
  }
  filechange(event){
    var imagefile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imagefile);
    reader.onloadend = (e)=>{
      this.imagedisplay = e.target.result;
    };
  }
  uploadfile(){
    var params = new HttpParams().set('imagedata',this.imagedisplay);
    this.connect.postRequest('imageupload',params).subscribe(
      data => console.log(data)
    );
  }
}
