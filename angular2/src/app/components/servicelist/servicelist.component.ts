import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  datas:DataService;
  constructor(datas:DataService) {
    datas.fetchServices();
    this.datas = datas;
  }
  
  ngOnInit() {
  }

}
