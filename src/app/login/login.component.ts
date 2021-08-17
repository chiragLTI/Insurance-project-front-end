import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../Models/login';
import { CustomerService } from '../Services/customer.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Login = new Login();

  msg = 0;
  final_msg = '';
  final_msg1 = '';
  errorMessage:string='';
  accessingPageId: number;
  constructor(private customerService: CustomerService, private _router: Router) {
    this.accessingPageId = this._router.getCurrentNavigation().extras.state.id;
  }
  ngOnInit(): void {
  }


  loginCustomer() {
    
    this.customerService.loginCustomer(this.log).subscribe(
      data => {

        console.log("response not received");
        console.log(data);
        // this._router.navigate(['/home'])
        this.msg = data;
        if (this.msg != 0) {
          sessionStorage.setItem("setNav","true");
          // console.log(this.log.custId);
          sessionStorage.setItem("customerId", String(data));
          if (this.accessingPageId === 1) {
            this._router.navigate(['/vehicleDetail']);
          }
          else if (this.accessingPageId === 2) {
            this._router.navigate(['/travelDetail']);
          }
          else if (this.accessingPageId === 3) {
            this._router.navigate(['/renew']);
          }
          else if (this.accessingPageId === 4) {
            this._router.navigate(['/renew']);
          }
          else if (this.accessingPageId === 5) {
            this._router.navigate(['/home']);
          }
          else {
            console.log("bad credentials");
            this._router.navigate(['/home']);
          }
        }
        else{
          this.errorMessage = "bad credentials";
        }
      },
      error => {

        console.log("exception occured");




        //console.log(JSON.stringify(this.msg));
        // this.final_msg = JSON.stringify(this.msg);
        // this.final_msg1 = this.final_msg.slice(20, 39);




        //console.log(Object.keys(this.final_msg)[2]);

      }
    );


  }




  onSubmit(logForm: NgForm) {
    console.log(this.log);

    this.loginCustomer();


  }


}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   useremail: string;
//   userpass: string;
//   accessingPageId: number;
//   constructor(private router: Router) {
//     this.accessingPageId = this.router.getCurrentNavigation().extras.state.id;
//   }

//   ngOnInit(): void {

//   }

//   checkCredentials(): void {
//     if (this.useremail == "chirag@gmail.com" && this.userpass == "chirag") {
//       sessionStorage.setItem("customerId", "101");   //set value from back-end
//       if (this.accessingPageId === 1) {
//         this.router.navigate(['/vehicleDetail']);
//       }
//       else if (this.accessingPageId === 2) {
//         this.router.navigate(['/renew']);
//       }
//       else if (this.accessingPageId === 3) {
//         this.router.navigate(['/renew']);
//       }
//       else if (this.accessingPageId === 4) {
//         this.router.navigate(['/renew']);
//       }
//       else if (this.accessingPageId === 5) {
//         this.router.navigate(['/home']);
//       }
//     }
//     else {
//       console.log("bad credentials");
//       this.router.navigate(['/home']);
//     }
//   }

// }
