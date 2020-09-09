<template>
  <div id="app">

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="sss"/> -->
    
    

    <MapAPI />
    <!-- <MapTrack /> -->
    <!-- <TravelMap class="travel-map"/> -->
    <TripInfo />
    <Bookings />






  </div> 
</template>

<script>
    // Google Maps ApiKey
    // AIzaSyAqTuk9ryMQ9NoG6ZeNyADmZDx9EFwS9VE

// import TravelMap from "./components/Map/GoogleMap/TravelMap.vue";
import MapAPI from './components/Map/MapAPI.vue'
// import MapTrack from './components/Map/MapTrack.vue'
import TripInfo from './components/TripInfo.vue';
import Bookings from './components/Bookings.vue';

export default {
  name: 'App',
//   data: {
//     message: 'Hello' 
//   },
  components: {
    // TravelMap,
    MapAPI,
    // MapTrack,
    TripInfo,
    Bookings
  }
}
</script>

<style lang="scss">
    // .travel-map {
    //     height: 400px;
    // }
    @import '@/assets/SCSS/style.scss';
</style>
