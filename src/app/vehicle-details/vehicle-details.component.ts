import { Component, OnInit, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';
import { Vehicle } from '../Models/vehicle';

type VehicleDetails = {
  id: number;
  name: string;
  category?: string[];
};

type CarList = {
  manufacturer: string;
  models: string[];
}


type vehicleDetails = VehicleDetails[];
type carList = CarList[];

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  // mySelectForm: NgForm;
  // isFormDisabled: boolean;

  // cars = [
  //   { id: 0, name: "" },
  //   { id: 1, name: "BMW Hyundai" },
  //   { id: 2, name: "Kia Tata" },
  //   { id: 3, name: "Volkswagen Ford" },
  //   { id: 4, name: "Renault Audi" },
  //   { id: 5, name: "Mercedes Benz Skoda" },
  // ];

  // selected = [{ id: 0, name: "" }];

  // vehicleType = [

  //   { id: 1, name: "Car" },
  //   { id: 2, name: "Bike" },
  // ]
  // selectedType = [{ id: 0, name: "c" }];


  rForm: NgForm;
  vehicleDetail: vehicleDetails = [];
  vehicle: Vehicle = new Vehicle();
  cList: carList = [];
  constructor(private router:Router) {
    this.vehicle.vehicleType = 0;
    this.vehicle.vehicleManufacture = "";
    this.vehicle.vehicleModel = "";
    this.vehicleDetail = [
      { id: 1, name: "Car", category: ["Maruti", "Honda"] },
      { id: 2, name: "Bike", category: ["Bajaj", "Royal Enfield"] },
    ];
    this.cList = [
      { manufacturer: "Maruti", models: ["Baleno", "Ertiga", "Swift Dzire"] },
      { manufacturer: "Honda", models: ["Honda amaze", "Honda City", "Honda Jazz"] },
      { manufacturer: "Bajaj", models: ["Discover", "Platina", "Pulsar"] },
      { manufacturer: "Royal Enfield", models: ["classic", "Platinum"] },
      

    ];

    // this.reg.userName = "chirag";
    // this.reg.userPassword = "Chirag@12";
    // this.reg.userEmail = "chirag@lti.com";
    // this.reg.userPhone = "9090909090";
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    console.log(event.name);
  }


  submitted(): void {
    sessionStorage.setItem("vehicle", JSON.stringify(this.vehicle));
    this.router.navigate(['/selectPlan']);
  }

  checkType():boolean{
    console.log(this.vehicle.vehicleType);
    return true;
  }


}
