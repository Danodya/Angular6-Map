import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from 'src/app/location/location.component';
import { EditLocationComponent } from 'src/app/location/edit-location/edit-location.component';
import { EditGroupLocationComponent } from 'src/app/location/edit-group-location/edit-group-location.component';

const routes: Routes = [
{
  path: 'location',
  component: LocationComponent,
  children: [
    { path: 'edit-location', component: EditLocationComponent },
    { path: 'editGroup-location', component: EditGroupLocationComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
