import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Models/vehicle';
import { VehicleService } from '../Services/vehicle.service';



@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {



  vehicleDetails:Vehicle = new Vehicle();
  title = 'Bind DropDownList';
  existingVehicleMessage:string = "";
  products = [
    { id: 0, name: 'Third party liability' },
    { id: 1, name: 'comprehensive' },
  
  ];

  years = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id:2,  name:'3'}
  
  ];
  
  constructor(private vehicleService:VehicleService) { 

  }

  ngOnInit(): void {
   
    this.vehicleDetails=JSON.parse(sessionStorage.getItem("vehicle"))
    console.log(this.vehicleDetails);
  }

  saveVehicle(){
    this.vehicleService.insertVehicleService(this.vehicleDetails).subscribe(data =>{
    console.log(data);
    },
    error=>{console.log(error.error.text);
    this.existingVehicleMessage=error.error.text;
    }
      );
}

  onSubmit() {
    this.vehicleDetails.vehicleDurationofpolicy = Number(this.vehicleDetails.vehicleDurationofpolicy);
    this.vehicleDetails.vehiclePlantype = Number(this.vehicleDetails.vehiclePlantype);
    this.vehicleDetails.vehicleType = Number(this.vehicleDetails.vehicleType);
    console.log(this.vehicleDetails);
    this.saveVehicle();

  }  

}