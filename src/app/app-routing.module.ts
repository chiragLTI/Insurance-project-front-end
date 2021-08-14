import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {
    // path:'',component:HomeComponent
    path: '', redirectTo: 'vehicleDetail', pathMatch: 'full'
  },
  {
    path: 'vehicleDetail', 
    component: VehicleDetailsComponent
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
