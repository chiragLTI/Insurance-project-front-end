import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: {id: number};
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }

  buyInsurance():void{
    if(sessionStorage.getItem("customerId") === null){
      console.log("redirect to login");
      //this.router.navigate(['/login']);
      this.user = { id:1 };
      this.router.navigateByUrl('/login', { state: this.user });
      
    }
    else{
      this.router.navigate(['/vehicleDetail']);
      
    }
  }

  renewInsurance():void{
    if(sessionStorage.getItem("customerId") === null){
      console.log("redirect to login");
      //this.router.navigate(['/login']);
      this.user = { id:2 };
      this.router.navigateByUrl('/login', { state: this.user });
    }
    else{
      this.router.navigate(['/renew']);
    }
  }

  claimInsurance():void{
    if(sessionStorage.getItem("customerId") === null){
      //console.log("redirect to login");
      this.user = { id:3 };
      this.router.navigateByUrl('/login', { state: this.user });
    }
    else{
      console.log("redirect to claim insurance");
    }
  }

  calculateInsurance():void{
    if(sessionStorage.getItem("customerId") === null){
      //console.log("redirect to login");
      this.user = { id:4 };
      this.router.navigateByUrl('/login', { state: this.user });
    }
    else{
      console.log("redirect to calculate insurance");
    }
  }

}
