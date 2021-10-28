import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('map') mapView: ElementRef;

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    console.log("Bounding Rect Size: ", boundingRect);

     CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      latitude: -33.86,
      longitude: 151.20,
      zoom: 12
    });

    // CapacitorGoogleMaps.addListener("onMapReady", async function() {

    //   /*
    //     We can do all the magic here when map is ready
    //   */

    //   CapacitorGoogleMaps.addMarker({
    //     latitude: -33.86,
    //     longitude: 151.20,
    //     title: "Custom Title",
    //     snippet: "Custom Snippet",
    //   });

    //   CapacitorGoogleMaps.setMapType({
    //     "type": "normal"
    //   })
    // })
  }
}
