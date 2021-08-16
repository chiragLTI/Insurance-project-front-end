import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';
import { Login } from '../Models/login';
import { ForgotPassword } from '../Models/ForgotPassword';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseURL: string = 'http://localhost:8087/Customer/'
  constructor(private httpClient:HttpClient) { }

  
 createCustomer(customer:Customer):Observable<any>{

  return this.httpClient.post<any>(`${this.baseURL+"registerCustomer"}`,customer);
  
 }

 getCustomerById(id:number):Observable<Customer>{
   return this.httpClient.get<Customer>(`${this.baseURL+"/getCust"}/${id}`)

 }

 updateCustomer(customer:Customer): Observable<Object> {
  return this.httpClient.put(`${this.baseURL+"/updateCustomer"}`, customer);
}

loginCustomer(login:Login):Observable<any>{

  return this.httpClient.post<any>(`${this.baseURL+"/login"}`,login);
  
 }

 updateCustomerPassword(forgotPassword:ForgotPassword): Observable<any> {
  return this.httpClient.put(`${this.baseURL+"/updateCustomerPassword"}`, forgotPassword);
}

  
}