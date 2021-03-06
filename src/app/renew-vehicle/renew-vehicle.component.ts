import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../Models/insurance';
import { Vehicle } from '../Models/vehicle';
import { InsuranceService } from '../Services/insurance.service';


@Component({
  selector: 'app-renew-vehicle',
  templateUrl: './renew-vehicle.component.html',
  styleUrls: ['./renew-vehicle.component.css']
})
export class RenewVehicleComponent implements OnInit {
  allVehicleInsurances: Insurance[];
  allVehicleList: Vehicle[] = [];
  customerId: number;
  buttonIdOnInsuranceRenew: number;
  vehicleInsuranceRenew: Vehicle = new Vehicle();
  passInsurance:Insurance = new Insurance();

  constructor(private insuranceService: InsuranceService, private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit called....');
    this.loadAllVehicleInsurances();
  }

  loadAllVehicleInsurances() {

    this.customerId = Number(sessionStorage.getItem("customerId"));
    this.insuranceService.findAllInsuranceService(this.customerId).subscribe(
      (data: Insurance[]) => {
        this.allVehicleInsurances = data;
        console.log(this.allVehicleInsurances);
        for (let index = 0; index < this.allVehicleInsurances.length; index++) {
          if (this.allVehicleInsurances[index]['vehicle'] != null) {
            this.allVehicleList.push(this.allVehicleInsurances[index]['vehicle']);
          }
        }
        console.log(this.allVehicleList);
      },
      (err) => {
        console.log(err);
      }
    )


  }

  passVehicleDetailsToPlan(event: any): void {
    this.buttonIdOnInsuranceRenew = Number(event.target.attributes.id.value);
    for (let i = 0; i < this.allVehicleInsurances.length; i++) {
      if(this.buttonIdOnInsuranceRenew == this.allVehicleInsurances[i]['insuranceId']){
        this.passInsurance.customer ={custId: sessionStorage.getItem("customerId")};
        this.passInsurance.insuranceAmount = 0;
        this.passInsurance.insuranceIsactive = 1;
        this.passInsurance.insuranceIssuedate = new Date();
        this.passInsurance.insurancePolicytype = 1;
      }
      
    }
    sessionStorage.setItem("renewInsuranceDetails",JSON.stringify(this.passInsurance));

    for (let index = 0; index < this.allVehicleList.length; index++) {
      if (this.allVehicleList[index]['insurance'] == this.buttonIdOnInsuranceRenew) {
        this.vehicleInsuranceRenew = this.allVehicleList[index];
        break;
      }
    }

    if (this.vehicleInsuranceRenew != null) {
      this.vehicleInsuranceRenew.vehicleDurationofpolicy =null;
      this.vehicleInsuranceRenew.vehiclePlantype = null;
      this.vehicleInsuranceRenew.vehicleType =null;
      console.log(this.vehicleInsuranceRenew);
      // this.routes.navigate();
      if (sessionStorage.getItem("vehicle") != null) {
        sessionStorage.removeItem("vehicle");
      }
      sessionStorage.setItem("renew", "renewVehicle");
      sessionStorage.setItem("renewVehicleDetails", JSON.stringify(this.vehicleInsuranceRenew));
      this.router.navigate(['/selectPlan']);
    }

  }

}
