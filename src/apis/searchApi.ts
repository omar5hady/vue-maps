import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoib21hcnNoYWR5IiwiYSI6ImNsNWlnbTJ1aDA3cnEzY3FxdWZ6a2dkengifQ.C7BPH_rHuIL2tIiSha7nbw'
    }
})

export default searchApi