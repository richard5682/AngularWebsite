import { Injectable, OnInit } from '@angular/core';
import { ConnectGetService } from './services/connectGet.service';


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  connectget : ConnectGetService;
  //id,owner_id,type,title,description,3star,2star,1star
  servicesQuery;
  constructor(connectget : ConnectGetService) { 
    this.connectget = connectget;
  }
  fetchServices(){
    this.connectget.GetRequest(null,'services.php').subscribe(
      data => {this.servicesQuery = data},
      error => {console.log(error)},
      () => {}
    );
  }
  ngOnInit(){
 
  }

}
