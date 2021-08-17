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
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateComponent } from './update/update.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarOnLoginComponent } from './navbar-on-login/navbar-on-login.component';
import { LogoutComponent } from './logout/logout.component';
import { TravelFromComponent } from './travel-from/travel-from.component';
import { MemberComponentComponent } from './member-component/member-component.component';
import { ClaimComponent } from './claim/claim.component';
import { ClaimViewComponent } from './claim-view/claim-view.component';


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
    ForgotpasswordComponent,
    RegisterComponent,
    ResetpasswordComponent,
    UpdateComponent,
    PaymentComponent,
    NavbarComponent,
    NavbarOnLoginComponent,
    LogoutComponent,
    TravelFromComponent,
    MemberComponentComponent,
    ClaimComponent,
    ClaimViewComponent,
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
