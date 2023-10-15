import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([5.540312432665597, 95.31014922878094], 12);

    const baseMaps1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://m•m.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const baseMaps2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri | <a href="Latihan WebGIS" target="_blank">DIVSIG UGM</a>'
    });

    const baseMaps3 = L.tileLayer('https://a.tile.opentopomap.org/{z}/{x}/{y}.png', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Google Satellite | <a href="https://unsorry.net" target="_blank">unsorry@2020</a>'
    });
    const baseMaps4 = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    
    const basemaps = {
      "OpenStreetMap": baseMaps1,
      "Esri World Street": baseMaps2,
      "Topographic map": baseMaps3,
      "Stadia Dark Mode": baseMaps4
    };

    L.control.layers(basemaps).addTo(this.map);

    const marker = L.circle([5.540312432665597, 95.31014922878094], 500, {
      color: 'red',
      fillColor: 'red'
    });
    
    const popup = L.popup()
      .setContent('Banda Aceh merupakan kota penghasil ganja');

    marker.bindPopup(popup);

    this.map.addLayer(marker);
  }
}