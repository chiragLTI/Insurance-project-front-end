import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Models/vehicle';
import { VehicleService } from '../Services/vehicle.service';

type VehicleCC = {
  model: string;
  modelCC: number;
}

type vehicleCCList = VehicleCC[];

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {



  vehicleDetails: Vehicle = new Vehicle();
  title = 'Bind DropDownList';
  existingVehicleMessage: string = "";
  products = [
    { id: 0, name: 'Third party liability' },
    { id: 1, name: 'comprehensive' },

  ];

  years = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' }

  ];
  vehicleCC: vehicleCCList = [];
  payment: number = 0;
  constructor(private vehicleService: VehicleService) {
    this.vehicleCC = [
      { model: "Baleno", modelCC: 1000 },
      { model: "Ertiga", modelCC: 1200 },
      { model: "Swift Dzire", modelCC: 1300 },
      { model: "Honda Amaze", modelCC: 1400 },
      { model: "Honda City", modelCC: 1400 },
      { model: "Honda Jazz", modelCC: 1600 },
      { model: "Discover", modelCC: 120 },
      { model: "Platina", modelCC: 140 },
      { model: "Pulsar", modelCC: 150 },
      { model: "Classic", modelCC: 130 },
      { model: "Platinum", modelCC: 100 }
    ];
    console.log(this.vehicleCC);
  }

  ngOnInit(): void {

    this.vehicleDetails = JSON.parse(sessionStorage.getItem("vehicle"))
    console.log(this.vehicleDetails);
  }


  saveVehicle() {
    this.vehicleService.insertVehicleService(this.vehicleDetails).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error.error.text);
        this.existingVehicleMessage = error.error.text;
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
  calculatePremium(): void {
    for (let i = 0; i < this.vehicleCC.length; i++) {
      if (this.vehicleCC[i].model == this.vehicleDetails.vehicleModel) {
        if (this.vehicleDetails.vehiclePlantype == 0) {
          this.payment = this.calculatePremiumForThirdParty(this.vehicleCC[i].modelCC);
        }
      }
    }
    this.payment=this.payment*Number(this.vehicleDetails.vehicleDurationofpolicy);
  }

  calculatePremiumForThirdParty(modelCC: number): number {
    if (modelCC < 1000) {
      return 1129;
    }
    else if (modelCC > 1000 && modelCC < 1500){
      return 1132;
    }
    else{
      return 1345;
    }
  }

}