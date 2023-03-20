import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SweetService } from '../sweet.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.css']
})
export class SubhomeComponent {
 
  foods:Food[]=[];
  constructor(private foodService:SweetService, private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm']){
        this.foods=this.foodService.getAll().filter(food=>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else{
        this.foods=this.foodService.getAll();
      }
    })
  }
}
