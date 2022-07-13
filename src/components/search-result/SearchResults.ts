import { defineComponent, ref, watch} from 'vue';
import { usePlacesStore } from '../../composables';
import { Feature } from '../../interfaces/places';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'SearchResults',
    setup(){

        const { places, isLoadingPlaces, userLocation} = usePlacesStore()
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
        const ocultar = ref(false)

        const activePlace = ref('')

        //
        watch( places, (newPlaces)=> {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })

        return{
            isLoadingPlaces,
            places,
            activePlace,
            ocultar,

            onPlaceClick: (place: Feature) => {
                const [lng, lat] = place.center
                activePlace.value = place.id
                
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            },
            getRouteDirections: (place: Feature) => {
                if(!userLocation.value) return

                
                const [lng, lat] = place.center
                const [startLng, startLat] = userLocation.value

                const start: [number,number] = [startLng, startLat]
                const end: [number,number] = [lng, lat]

                getRouteBetweenPoints( start, end )

                ocultar.value = true
            }
        }
    }
})