import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ForgotPassword } from '../Models/ForgotPassword';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {

 forgot:ForgotPassword = new ForgotPassword();
 msg='';
 final_msg='';
 final_msg1='';
 errorMessage='';

  constructor(private customerService:CustomerService,private _router :Router) {
    
  }
  ngOnInit(): void {
  }

  updateCustomerPassword() {
    this.customerService.updateCustomerPassword(this.forgot)
      .subscribe(data => {
        console.log(data);
        this.forgot = new ForgotPassword();
        
      }, error=>
      {
        
       console.log("exception occured");
       this.msg=error.error;
     
       
 
       console.log(JSON.stringify(this.msg));
        this.final_msg=JSON.stringify(this.msg);
        this.final_msg1=this.final_msg.slice(20,37);

        if(this.final_msg1=="password updated"){
          this._router.navigate(['/login']); 
        }
       
        //console.log(Object.keys(this.final_msg)[2]);
       
      }
      
      
      );
  }

  onSubmit(){
    this.updateCustomerPassword();
  }


}