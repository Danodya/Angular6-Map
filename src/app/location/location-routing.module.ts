import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from 'src/app/location/location.component';
import { EditLocationComponent } from 'src/app/location/edit-location/edit-location.component';

const routes: Routes = [
{
  path: 'location',
  component: LocationComponent,
  children: [
    { path: 'edit-location', component: EditLocationComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
