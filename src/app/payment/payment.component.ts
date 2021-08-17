import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../Models/insurance';
import { Member } from '../Models/member';
import { Payment } from '../Models/payment';
import { Travel } from '../Models/travel';
import { Vehicle } from '../Models/vehicle';
import { InsuranceService } from '../Services/insurance.service';
import { MemberService } from '../Services/member.service';
import { PaymentService } from '../Services/payment.service';
import { TravelService } from '../Services/travel.service';
import { VehicleService } from '../Services/vehicle.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  value: boolean = true;
  cardnum: String = "";
  ins: number;
  member: Member[]=[{
    memberDob:null,
    memberName:'',
    memberPassportno :'',
    memberRelationship:'', 
    travel:{travelid:0}
  }
  ]

  payment: Payment = new Payment();
  travel: Travel = new Travel();
  insurance: Insurance = new Insurance();
  insuranceToBeInserted: Insurance = new Insurance();
  vehicleDetails: Vehicle = new Vehicle();
  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem("vehicle")));
  }

  constructor(private router:Router,private memberService:MemberService,private travelService: TravelService, private insuranceService: InsuranceService, private paymentService: PaymentService, private vehicleService: VehicleService) {
    this.payment.paymentAmount = Number(sessionStorage.getItem("paymentAmount"));
  }

  saveVehicle(generatedInsuranceId: number) {
    console.log("Vehicle Registration started");
    console.log(this.vehicleDetails.vehicleModel);
    this.vehicleDetails = JSON.parse(sessionStorage.getItem("vehicle"));
    this.vehicleDetails.insurance = { insuranceId: generatedInsuranceId };
    this.vehicleDetails.customer = { custId: Number(sessionStorage.getItem("customerId")) };
    this.vehicleService.insertVehicleService(this.vehicleDetails).subscribe(data => {
      console.log(data);
      console.log("Vehicle Registration success");
    },
      error => {
        console.log(error.error.text);

      }
    );

    this.savePayment(generatedInsuranceId);
  }

  updateVehicle(generatedInsuranceId: number) {
    console.log("Vehicle updation started");

    this.vehicleDetails = JSON.parse(sessionStorage.getItem("vehicle"));
    this.vehicleDetails.insurance = { insuranceId: generatedInsuranceId };
    this.vehicleDetails.customer = { custId: Number(sessionStorage.getItem("customerId")) };
    console.log("updation till here");
    this.vehicleService.updateVehicleService(this.vehicleDetails).subscribe(data => {
      console.log(data);
      console.log("Vehicle Updation success");
     
      
    },
      error => {
        console.log(error.error.text);

      }
    );

    this.savePayment(generatedInsuranceId);
  }

  savePayment(generatedInsuranceId: number) {
    console.log("Insurance Payment started");
    this.payment.insurance = { insuranceId: generatedInsuranceId };
    this.paymentService.InsertPaymentService(this.payment).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));

    console.log("Vehicle Insurance Bought Successfully");
    sessionStorage.removeItem("renewInsuranceDetails");
    alert("Payment Successful");
    this.router.navigate(['/home']);
  }

  check() {
    if (!Number(this.cardnum)) {
      this.value = true;
    }
  }

  saveMember(travelId:number) {
    this.member = JSON.parse(sessionStorage.getItem("memberDetails"));
    console.log(this.member);
    for (let index = 0; index < this.member.length; index++) {
      this.member[index]['travel'].travelid = travelId;
    }
    console.log(this.member);
    this.memberService.InsertMemberService(this.member).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }


  saveTravel(insId: number) {
    this.travel = JSON.parse(sessionStorage.getItem("travelDetails"));
    this.travel.insurance = { insuranceId: insId };
    this.travel.customer = { custId: sessionStorage.getItem("customerId") };
    this.travel.travelPolicyplan = Number(this.travel.travelPolicyplan);
    this.travelService.InsertTravelService(this.travel).subscribe(data => {
      console.log(data);
      this.saveMember(data.travelid);
    },
      error => console.log(error));


  }



  onSubmit() {
    console.log("Insurance Registration started");
    this.insurance.insuranceAmount = this.payment.paymentAmount;
    this.insurance.customer = { custId: Number(sessionStorage.getItem("customerId")) };
    this.insurance.insuranceIsactive = 1;
    this.insurance.insuranceIssuedate = new Date();
    this.insurance.insurancePolicytype = Number(sessionStorage.getItem("policyType"));

    console.log(this.insurance);
    console.log(JSON.parse(sessionStorage.getItem("renewInsuranceDetails")));

    if (sessionStorage.getItem("renewInsuranceDetails") != null) {
      this.insuranceToBeInserted = JSON.parse(sessionStorage.getItem("renewInsuranceDetails"));
      this.insuranceToBeInserted.insuranceAmount = this.payment.paymentAmount;
      this.insuranceToBeInserted.insuranceIssuedate = new Date();
      this.insuranceService.insertInsurance(this.insuranceToBeInserted).subscribe(data => {
        console.log("inside data");
        console.log(data.insuranceId);
        console.log("Insurance Registration persist started");
        this.updateVehicle(data.insuranceId);
      },
        error => {
          console.log("inside payment error");
          console.log(error.error.text);

        }
      );

    }
    else if (sessionStorage.getItem("policyType") == "2") {
      this.insurance.insuranceAmount = 3000;
      console.log(JSON.parse(sessionStorage.getItem("travelDetails")));
      console.log(JSON.parse(sessionStorage.getItem("memberDetails")));
     
      this.insuranceService.insertInsurance(this.insurance).subscribe(data => {
        console.log("inside travel insurance generation");
        console.log(data.insuranceId);
        this.saveTravel(data.insuranceId);
      },
        error => {
          console.log("inside payment error");
          console.log(error.error.text);

        }
      );
    }
    else {
      this.insuranceToBeInserted = this.insurance;
      this.insuranceService.insertInsurance(this.insuranceToBeInserted).subscribe(data => {
        console.log("inside data");
        console.log(data.insuranceId);
        console.log("Insurance Registration started");
        this.saveVehicle(data.insuranceId);
      },
        error => {
          console.log("inside payment error");
          console.log(error.error.text);

        }
      );
    }



  }




}
