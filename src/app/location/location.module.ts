import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { EditGroupLocationComponent } from './edit-group-location/edit-group-location.component';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZtWxZ2S2ihfWXs2K_YF7HxCC6uHMnvxQ'
    }),
    FormsModule
  ],
  declarations: [LocationComponent, EditLocationComponent, EditGroupLocationComponent]
})
export class LocationModule { }
