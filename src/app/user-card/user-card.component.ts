import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  constructor(private dataService:GetUserService) {
	
  }
  
  name:string = '';
  description:string = '';
  
  ngOnInit(){
	//console.log(this.dataService.cars);
	this.name = this.dataService.getName();
	this.description = this.dataService.getDesc();
  }
}
