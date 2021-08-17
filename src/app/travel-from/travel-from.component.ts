import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Travel } from '../Models/travel';
import { TravelService } from '../Services/travel.service';

@Component({
  selector: 'app-travel-from',
  templateUrl: './travel-from.component.html',
  styleUrls: ['./travel-from.component.css']
})
export class TravelFromComponent implements OnInit {
  travel:Travel = new Travel();
  ins:number;
  cus:number;
  constructor(private travelService:TravelService,private router:Router) { 
 
  }

  saveTravel(){
    this.travelService.InsertTravelService(this.travel).subscribe(data =>{

      console.log(data);
 

    },

    error=>console.log(error));
}
  ngOnInit(): void {
  }

  onSubmit(){
     
    console.log("hELLO");
     
    this.travel.travelModeoftravel='Airline';
     this.travel.insurance={insuranceId:this.ins}
     this.travel.customer={custId:this.cus}
 
     console.log(this.travel);
     sessionStorage.setItem("policyType","2");
     sessionStorage.setItem("travelDetails",JSON.stringify(this.travel));
     this.router.navigate(['/member']);
     //this.saveTravel();
  }

}