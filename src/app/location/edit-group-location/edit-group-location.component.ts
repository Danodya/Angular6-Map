import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-edit-group-location',
  templateUrl: './edit-group-location.component.html',
  styleUrls: ['./edit-group-location.component.css']
})
export class EditGroupLocationComponent implements OnInit {
  private lat = 6.9271;
  private lng = 79.8612;
  private radius: number;

  values: Value[] = [
    { id: 0, name: 'Click here to search', lat: 0, lng: 0 },
    { id: 1, name: 'KANDY Shop Dehiwala', lat: 6.8542, lng: 79.8655 },
    { id: 2, name: 'KANDY Shop Kadawatha', lat: 7.0014, lng: 79.9499 }
  ];
  constructor() {
    this.radius = 9000;
  }

  ngOnInit() {}

  public onChange(event): void {
    // event will give you full breif of action
    const newVal = parseFloat(event.target.value);
    console.log(newVal);
    // console.log(event);
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i].id === newVal) {
        this.lat = this.values[i].lat;
        this.lng = this.values[i].lng;
        console.log(this.lat, this.lng);
      }
    }
  }
}
interface Value {
  id: number;
  lat: number;
  lng: number;
  name: String;
  draggable?: boolean;
  radius?: number;
}
