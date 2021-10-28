import { Component } from '@angular/core';
import {LocationRating} from "../model/location-rating";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  get testLocation(): LocationRating {
    let rating = new LocationRating();
    rating.rating = "FULL_SIZE";
    rating.location='test';
    return rating;
  }

}
