import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService{
  root = "https://localhost/lib/"
  phpfile = Array();
  
  constructor(private http:HttpClient) { 
    this.phpfile['login'] = 'login.php';
  }

  getRequest(file:string,parameter:HttpParams):Observable<any>{
    var url = this.root+this.phpfile[file];
    return this.http.get(url,{params:parameter});
  }

}
