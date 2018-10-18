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
    { id: 1, name: 'KANDY Shop Dehiwala', lat: 6.8542, lng: 79.8655 },
    { id: 2, name: 'KANDY Shop Kadawatha', lat: 7.0014, lng: 79.9499 },
    { id: 3, name: 'KANDY Shop Kiribathgoda', lat: 6.9778, lng: 79.9272 },
    { id: 4, name: 'KANDY Shop Kandy', lat: 7.2906, lng: 80.6337 },
  ];

  uniqueValues: Value[] = [];
  // uniqueValues = [];

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
      if ((this.values[i].id === newVal) && this.uniqueValues.indexOf(this.values[i]) === -1) {
        this.lat = this.values[i].lat;
        this.lng = this.values[i].lng;
        console.log(this.lat, this.lng);
        // for (let j = 0; j < this.showValues.length; j++) {
        //   if (this.values[i] !== this.showValues[j]) {
        //     this.showValues.push(this.values[i]);
        //   }
        // }
        this.uniqueValues.push(this.values[i]);
//          const items = new Set();
// items.add(this.values[i]);

console.log(this.uniqueValues);
      }
    }
  }
}
interface Value {
  id: number;
  lat?: number;
  lng?: number;
  name: String;
  draggable?: boolean;
  radius?: number;
}

// interface Showvalue {
//   id: number;
//   lat: number;
//   lng: number;
//   name: String;
// }
