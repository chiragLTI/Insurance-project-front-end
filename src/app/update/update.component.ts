import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../Models/Customer';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  id:number=104;
  msg='';
 final_msg='';
 final_msg1='';
 errorMessage='';
  constructor(private customerService:CustomerService,
    private route: ActivatedRoute) { }

  customer:Customer = new Customer();
  

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
      
    },error=>console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        
      }, error=>
      {
        
     
      }
       );
    
  }

  onSubmit() {
    this.updateCustomer();   
    this.final_msg1="Updated successfully" 
  }






}