import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../Models/member';
import { MemberService } from '../Services/member.service';
@Component({
  selector: 'app-member-component',
  templateUrl: './member-component.component.html',
  styleUrls: ['./member-component.component.css']
})
export class MemberComponentComponent implements OnInit {
  tra:number=0;
  member:Member=new Member();
  mem: Member[]=[{
    memberDob:null,
    memberName:'',
    memberPassportno :'',
    memberRelationship:'', 
    travel:{travelid:this.tra}
  }
    
  ]


  memTotal:number=0;
  Arr = Array;  
  num:number=0;
 
  constructor(private memberService:MemberService, private router:Router) { }

  ngOnInit(): void {
  
  }

  saveMember(){
  
    this.memberService.InsertMemberService(this.mem).subscribe(data =>{

      console.log(data);
 

    },

    error=>console.log(error));
}

 
   addMembers() {
    this.mem.push({
      memberDob:null,
      memberName:'',
      memberPassportno :'',
      memberRelationship:'', 
      travel:{traveiId:this.tra}
    });
  }

  onSubmit(){
    console.log("hELLO");
     
      
    //  this.mem.travel={travelId:this.tra}
    //  this.travel.customer={custId:this.cus}
    JSON.stringify(this.mem);
     console.log(this.mem);
     console.log(typeof(this.mem));
     sessionStorage.setItem("memberDetails",JSON.stringify(this.mem));
     this.router.navigate(['/payment']);
    
     //this.saveMember();

  }

  

}




// public Members: Member[] = [{
  //   memberDob:null,
  //   memberName:'',
  //   memberPassportno :'',
  //   memberRelationship:'', 
  //   travel:{travelId:0}
  // }];


 