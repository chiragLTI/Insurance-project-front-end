import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from "../Models/claim";



@Injectable({
providedIn:"root"
})



export class ClaimService{
baseURL:String = 'http://localhost:8087/claim/'
constructor(private myhttp:HttpClient) { }

InsertClaimService(claim:Claim):Observable<Claim[]>{
return this.myhttp.post<Claim[]>(this.baseURL+"addClaim/",claim);
}



findAllClaimService(customerId:number):Observable<Claim[]>
{
    return this.myhttp.get<Claim[]>(this.baseURL+"/getClaim/"+customerId);
}



}
