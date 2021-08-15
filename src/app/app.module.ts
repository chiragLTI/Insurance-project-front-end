import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PlanComponent } from './plan/plan.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { RenewVehicleComponent } from './renew-vehicle/renew-vehicle.component';
import { RenewTravelComponent } from './renew-travel/renew-travel.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsComponent,
    PlanComponent,
    DashboardComponent,
    LoginComponent,
    RenewInsuranceComponent,
    RenewVehicleComponent,
    RenewTravelComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
