import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore()
        const { setMap } = useMapStore()


        const initMap = async () =>{
            if(!mapElement.value) throw new Error('Div Element no existe')
            if(!userLocation.value) throw new Error('User location no existe')

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopUp = new Mapboxgl.Popup({offset:[0,-30]})
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h5>Aqui estoy</h5>
                    <p>Actualmente en SLP</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .addTo( map )
                .setPopup(myLocationPopUp)

            //TODO Establecer el mapa en VUEX
            setMap(map)
        }

        onMounted(() => {
            console.log(mapElement.value)
            if( isUserLocationReady.value )return initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if(isUserLocationReady.value)
                initMap()
        })
        

        return{

            isUserLocationReady,
            mapElement, 
        }
    }
})