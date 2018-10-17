import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-edit-group-location',
  templateUrl: './edit-group-location.component.html',
  styleUrls: ['./edit-group-location.component.css']
})
export class EditGroupLocationComponent implements OnInit {
  lat = 6.8602;
  lng = 80.0535;

  values = [
    { id: 0, name: 'Click here to search'},
    { id: 1, name: 'KANDY Shop Dehiwala' },
    { id: 2, name: 'KANDY Shop Wattala' }
  ];
  constructor() {}

  ngOnInit() {}
  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }
}
