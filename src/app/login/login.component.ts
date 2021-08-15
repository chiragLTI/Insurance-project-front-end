import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  useremail: string;
  userpass: string;
  accessingPageId: number;
  constructor(private router: Router) {
    this.accessingPageId = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit(): void {

  }

  checkCredentials(): void {
    if (this.useremail == "chirag@gmail.com" && this.userpass == "chirag") {
      sessionStorage.setItem("customerId", "101");   //set value from back-end
      if (this.accessingPageId === 1) {
        this.router.navigate(['/vehicleDetail']);
      }
      else if (this.accessingPageId === 2) {
        this.router.navigate(['/renew']);
      }
      else if (this.accessingPageId === 3) {
        this.router.navigate(['/renew']);
      }
      else if (this.accessingPageId === 4) {
        this.router.navigate(['/renew']);
      }
      else if (this.accessingPageId === 5) {
        this.router.navigate(['/home']);
      }
    }
    else {
      console.log("bad credentials");
      this.router.navigate(['/home']);
    }
  }

}
