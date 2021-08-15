import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from '../Models/insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  baseURL:string = 'http://localhost:8087/insurance/';
  constructor(private myhttp:HttpClient) { }
  findAllVehicleInsuranceService(customerId:number): Observable<Insurance[]>{
     return this.myhttp.get<Insurance[]>(this.baseURL+"/getCustomer/"+customerId);
  }
}
