import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../Models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private myhttp:HttpClient) { 

  }
  baseURL:String = 'http://localhost:8087/vehicle/'
  insertVehicleService(vehicle:Vehicle):Observable<Vehicle[]>{
    return this.myhttp.post<Vehicle[]>(this.baseURL+"addVehicle/",vehicle);
  }
}
