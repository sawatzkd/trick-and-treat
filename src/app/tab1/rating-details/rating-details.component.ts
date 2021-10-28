import {Component, Input, OnInit} from '@angular/core';
import {LocationRating} from "../../model/location-rating";

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.scss'],
})
export class RatingDetailsComponent implements OnInit {

  @Input() locationRating: LocationRating;
  constructor() { }

  ngOnInit() {
    console.log("init", this.locationRating);
  }

  ratingSelect(event) {
    console.log("radioSelect",event.detail);
    this.locationRating.rating = event.detail;
  }

  ratingHandler(event) {
    console.log('handling', event.target.value);
    this.locationRating.rating = event.target.value;
  }
}
