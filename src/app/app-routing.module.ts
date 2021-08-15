import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { RenewVehicleComponent } from './renew-vehicle/renew-vehicle.component';
import { RenewTravelComponent } from './renew-travel/renew-travel.component';

const routes: Routes = [
  {
    // path:'',component:HomeComponent
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'vehicleDetail', 
    component: VehicleDetailsComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'renew',
    component: RenewInsuranceComponent,
    children:[
      {
        path:'vehicleRenew',
        component: RenewVehicleComponent,
      },
      {
        path:'travelRenew',
        component: RenewTravelComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'selectPlan',
    component: PlanComponent
  },
  // {
  //   path: 'reactiveLink',
  //   component: ReactiveComponent
  // },
  // {
  //   path: '**', component: ErrorComponent    //to be written at last only
  // }
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
