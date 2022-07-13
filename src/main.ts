import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcnNoYWR5IiwiYSI6ImNsNWlnbTJ1aDA3cnEzY3FxdWZ6a2dkengifQ.C7BPH_rHuIL2tIiSha7nbw';


if( !navigator.geolocation){
    alert('Tu navegador no soporta el Geolocation')
    throw new Error('Tu navegador no soporta el Geolocation')
}


createApp(App).use(store).use(router).mount('#app')
