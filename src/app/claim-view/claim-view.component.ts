import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../Models/claim';
import { ClaimService } from '../Services/claim.service';

@Component({
  selector: 'app-claim-view',
  templateUrl: './claim-view.component.html',
  styleUrls: ['./claim-view.component.css']
})
export class ClaimViewComponent implements OnInit {

  allClaims: Claim[] = [] ; // gloal variable available to all other methods + html
  tempClaims: Claim[] =[] ;
  custId:number;
  constructor(private claimService:ClaimService, private routes:Router) { }

  ngOnInit(): void {
    this.loadAllClaims();
  }

  loadAllClaims() {
    console.log('Load all claim');
    this.custId = Number(sessionStorage.getItem("customerId"));
    this.claimService.findAllClaimService(this.custId).subscribe(
      (data: Claim[])=> 
      {
        this.allClaims = data;
      
        this.tempClaims = data;
         //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    ); // invocation of the subscribe method
  }

  claimForm(){
    this.routes.navigate(['/claim']);
  }
}
