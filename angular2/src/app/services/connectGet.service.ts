import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectGetService {
  httpclient : HttpClient;
  public root : string;
  constructor(httpclient: HttpClient) {
    this.httpclient = httpclient;
    this.setRoot('http://localhost/PHPfiles/')
  }
  setRoot(root:string){
    this.root = root;
  }
  GetRequest(params:string[],file:string): Observable<any>{
    var buffer = this.root+file+'?';
    var bool = true;
    if(params != null){
      Object.keys(params).forEach(key => {
        if(bool){
          bool=false;
        }else{
          buffer+="&";
        }
        buffer+=key+"="+params[key];
      });
    }
    return this.httpclient.get(buffer);
  }
  PostRequest(params:string[],file:string): Observable<any>{
    var bool=true;
    var buffer='';
    const header = { 'Content-Type': 'application/x-www-form-urlencoded' };
    if(params != null){
      Object.keys(params).forEach(key => {
        if(bool){
          bool=false;
        }else{
          buffer+="&";
        }
        buffer+=key+"="+params[key];
      });
    }
    return this.httpclient.post<any>(this.root+file,buffer,{headers:header});
  }
}
