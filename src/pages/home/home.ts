import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directions: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.InitializeMapBox();
  }

  InitializeMapBox(){

    var happy = new mapboxgl.LngLat(-47.9292, -15.7801);
 
    mapboxgl.accessToken = 'pk.eyJ1IjoieXVraXRha2V1dGkiLCJhIjoiY2s0ZTZyZTltMGFncjNubzZxMmVmbzd0NCJ9.Cfe08VfXHYG51f3PweX2WQ';
    var map = new mapboxgl.Map({
    container: 'map',
    center: happy,
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    });

    var campinas = new mapboxgl.LngLat(-47.0616,-22.9064);

    new mapboxgl.Marker().setLngLat(campinas).addTo(map);

    map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken, controls: {
        instructions: false,
        profileSwitcher: false
      }
    }),'top-left');
  }

}
