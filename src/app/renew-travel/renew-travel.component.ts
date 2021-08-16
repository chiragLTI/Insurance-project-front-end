import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../Models/insurance';
import { Travel } from '../Models/travel';
import { InsuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-renew-travel',
  templateUrl: './renew-travel.component.html',
  styleUrls: ['./renew-travel.component.css']
})
export class RenewTravelComponent implements OnInit {

  allTravelInsurances: Insurance[];
  allTravelList: Travel[] = [];
  customerId: number;

  constructor(private insuranceService: InsuranceService, private router: Router) {
    
   }

  ngOnInit(): void {
    console.log('ngOnInit called....');
    this.loadAllTravelInsurances();
  }

  loadAllTravelInsurances() {

    this.customerId = Number(sessionStorage.getItem("customerId"));
    this.insuranceService.findAllInsuranceService(this.customerId).subscribe(
      (data: Insurance[]) => {
        this.allTravelInsurances = data;
        console.log(this.allTravelInsurances);
        for (let index = 0; index < this.allTravelInsurances.length; index++) {
          if (this.allTravelInsurances[index]['travel'] != null) {
            this.allTravelList[index] = this.allTravelInsurances[index]['travel'];
          }
        }
        console.log(this.allTravelList);
      },
      (err) => {
        console.log(err);
      }
    )


  }


}
