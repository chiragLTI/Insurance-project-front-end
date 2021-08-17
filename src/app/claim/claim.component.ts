import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../Models/claim';
import { ClaimService } from '../Services/claim.service';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})


export class ClaimComponent implements OnInit {

ins:number;

 claim:Claim = new Claim();
 
   constructor(private claimService:ClaimService, private router:Router) {
 
    }
 
    saveClaim(){
      

      this.claimService.InsertClaimService(this.claim).subscribe(data =>{
      console.log(data);
      alert("claim added");
      },
      error=>console.log(error));
      this.router.navigate(['/claimView'])
    }
 
   ngOnInit(): void {
 
   }
   onSubmit(){

    console.log("hELLO");
    this.claim.claimApprovalstatus=-1;
    this.claim.claimAmountinsured=0;
     this.claim.insurance={insuranceId:this.ins}
 
     console.log(this.claim);
 
      this.saveClaim();
 
   }
 }
