import { Component, OnInit } from '@angular/core';
import { Reset } from '../Models/Reset';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  res:Reset= new Reset();
  value:boolean=true;
  constructor() {
    this.res.userOldPassword="";
    this.res.userNewPassword="";
    this.res.userConformPassword="";

  }
    
  ngOnInit(): void {
  }

  checkPassword()
  {
 if(
    this.res.userNewPassword==this.res.userConformPassword){
      this.value=true;

    }
    else{
      this.value=false;
    }

  }

}