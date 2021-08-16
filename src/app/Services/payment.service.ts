import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from "../Models/payment";




@Injectable({
providedIn:"root"
})



export class PaymentService{
baseURL:String = 'http://localhost:8087/payment/'
constructor(private myhttp:HttpClient) { }

InsertPaymentService(payment:Payment):Observable<Payment[]>{
return this.myhttp.post<Payment[]>(this.baseURL+"addPayment/",payment);
}
findAllPaymentService() : Observable<Payment[]> {
    return this.myhttp.get<Payment[]>(this.baseURL+"getAllPayment/");
}



}