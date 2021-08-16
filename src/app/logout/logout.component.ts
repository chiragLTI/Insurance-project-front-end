import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("setNav")!=null){
      sessionStorage.removeItem("setNav");
    }
    if(sessionStorage.getItem("vehicle")!=null){
      sessionStorage.removeItem("vehicle");
    }
    if(sessionStorage.getItem("policyType")!=null){
      sessionStorage.removeItem("policyType");
    }
    if(sessionStorage.getItem("customerId")!=null){
      sessionStorage.removeItem("customerId");
    }
    this.router.navigate(['/home']);
  }

}
