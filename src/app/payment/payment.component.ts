import { Component, OnInit } from '@angular/core';
import { Insurance } from '../Models/insurance';
import { Payment } from '../Models/payment';
import { Vehicle } from '../Models/vehicle';
import { InsuranceService } from '../Services/insurance.service';
import { PaymentService } from '../Services/payment.service';
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

  payment: Payment = new Payment();
  insurance: Insurance = new Insurance();
  insuranceToBeInserted: Insurance = new Insurance();
  vehicleDetails: Vehicle = new Vehicle();
  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem("vehicle")));
  }

  constructor(private insuranceService: InsuranceService, private paymentService: PaymentService, private vehicleService: VehicleService) {
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
    this.vehicleDetails.customer = { custId: Number(sessionStorage.getItem("customerId"))};
    console.log("updation till here");
    this.vehicleService.updateVehicleService(this.vehicleDetails).subscribe(data => {
      console.log(data);
      console.log("Vehicle Updation success");
    },
      error => {
        console.log(error.error.text);

      }
    );

    // this.savePayment(generatedInsuranceId);
  }

  savePayment(generatedInsuranceId: number) {
    console.log("Insurance Payment started");
    this.payment.insurance = { insuranceId: generatedInsuranceId };
    this.paymentService.InsertPaymentService(this.payment).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));

    console.log("Vehicle Insurance Bought Successfully");
  }

  check() {
    if (!Number(this.cardnum)) {
      this.value = true;
    }
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
