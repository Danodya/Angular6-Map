import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  title = 'edit location';
  zoom = 8;
  private lat = 6.9271;
  private lng = 79.8612;
  private radius: number;

 // locationChosen = false;
 private circles: Circle[] = [
  {
    lat: 6.8602,
    lng: 80.0535,
    radius: 9000,
    draggable: true
  }
    ];

  constructor() {
  this.radius = 10000;

  }

  ngOnInit() {}

  public mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.circles.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            radius: 9000,
            draggable: true
          });
   // this.locationChosen = true;
   console.log($event);
  }

  public centerChange(centerChangeEvent) {
    this.lat = centerChangeEvent.lat;
    this.lng = centerChangeEvent.lng;
    console.log(centerChangeEvent);
  }

  public radiusChange(radiusChangeEvent) {
    this.radius = radiusChangeEvent;
    console.log(radiusChangeEvent);
  }

  public onEnter(value) {
    this.radius = parseFloat(value);
  }

  public removeCircle(event) {
console.log(event);
for (let i = 0; i < this.circles.length; i++) {
this.circles.splice(i, 1);
}
  }

  // dragEnd(dragEvent: MouseEvent) {
  //   console.log(dragEvent);
  //   this.locationChosen = true;
  //   this.lat = dragEvent.coords.lat;
  //   this.lng = dragEvent.coords.lng;
  //     }
  // // onEnter(value) {
  // //   this.radius = parseFloat(value);
  // //   console.log('value ' + typeof(value));
  // //   console.log('rad ' + typeof(this.radius));
  // // }
}
// just an interface for type safety.
interface Circle {
  lat: number;
  lng: number;
  draggable: boolean;
  radius: number;
}
