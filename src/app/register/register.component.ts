import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { Customer} from '../Models/Customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
 customer:Customer = new Customer();
 msg='';
 final_msg='';
 final_msg1='';
 errorMessage='';

  constructor(private customerService:CustomerService,private _router :Router) {
   }

   saveCustomer(){
     this.customerService.createCustomer(this.customer).subscribe(
       data =>{
      
      console.log("response not received");
      console.log(data);
      
     },
     error=>
     {
       
      console.log("exception occured");
      this.msg=error.error;
    
      

      console.log(JSON.stringify(this.msg));
       this.final_msg=JSON.stringify(this.msg);
       this.final_msg1=this.final_msg.slice(20,45);

       
       if(this.final_msg1=="Registeration successfull"){
        this._router.navigate(['/login']);
      
       }
      
       //console.log(Object.keys(this.final_msg)[2]);
      
     }
      );


   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customer);
    
    this.saveCustomer();
  }


 
}