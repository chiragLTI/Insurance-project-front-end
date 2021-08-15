import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  typeOfInsurance:number;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showInsurances(){
    console.log(this.typeOfInsurance);
    if(this.typeOfInsurance == 1){
      this.router.navigate(['vehicleRenew'],{relativeTo:this.activatedRoute});
    }
    if(this.typeOfInsurance == 2){
      this.router.navigate(['travelRenew'],{relativeTo:this.activatedRoute});
    }
  }
}
