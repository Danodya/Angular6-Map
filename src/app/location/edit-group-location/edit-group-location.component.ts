import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EditLocationComponent } from 'src/app/location/edit-location/edit-location.component';

@Component({
  selector: 'app-edit-group-location',
  templateUrl: './edit-group-location.component.html',
  styleUrls: ['./edit-group-location.component.css']
})
export class EditGroupLocationComponent implements OnInit {
@Input() editlocation: EditLocationComponent;
 lat = 6.8602;
  lng = 80.0535;
  constructor() { }

  ngOnInit() {
  }

}
