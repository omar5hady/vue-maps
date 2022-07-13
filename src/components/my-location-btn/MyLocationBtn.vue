<template>
<button class="btn btn-primary"
    v-if="isBtnReady"
    @click="onMyLocationClick"
>
    Ir a mi ubicación
</button>
  
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';

export default {
    name:'MyLocationBtn',
    setup(){

        const { userLocation, isUserLocationReady} = usePlacesStore()
        const { map, isMapReady } = useMapStore()

        return{

            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMyLocationClick: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }

        }
    }

}
</script>

<style scoped>
    button{
        position: fixed;
        top: 30px;
        right: 30px;
    }
</style>