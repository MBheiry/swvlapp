

<template>
  <div>
      <h1>Map here</h1>
        <img alt="Vue logo" src="../assets/Swvl_logo.png">
        <div id="map"></div>
  </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';
export default {
    // name: 'MapTrack',
    // -----
    // props: {
    //     mapConfig: Object,
    //     apiKey: String,
    // },
    // -----
    // data() {
    //     return {
    //     google: null,
    //     map: null
    //     }
    // },
    // -----
    // async mounted() {
    // },
    // -----
    // methods: {
    //     calcMy() {
    //         return this.myNum * this.myNum2;
    //     },
    // },
    
    // -----
    beforeMount: function () {
        console.log('component beforeMount');
    },
    mounted: function () {
        console.log('component mounted');
        
        GoogleMapsLoader.load(function(google) {
            let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: position
            })
        });
    }
}
</script>

<style scoped lang="scss">
    img {
        width: 70px;
        height: auto;
    }
    #map {
        height:300px;
        width: 100%;
        background-color: rgb(143, 170, 143);;
   }
</style>