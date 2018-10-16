import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZtWxZ2S2ihfWXs2K_YF7HxCC6uHMnvxQ'
    }),
    FormsModule
  ],
  declarations: [LocationComponent, EditLocationComponent]
})
export class LocationModule { }
