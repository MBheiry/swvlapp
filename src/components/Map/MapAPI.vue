

<template>
  <div>
        <!-- <h3>@googlemaps/google-maps-services-js</h3> -->
        <h3>@googlemaps/js-api-loader</h3>
        <img alt="Vue logo" src="@/assets/img/Swvl_logo.png">
        <div id="map"></div>
  </div>
</template>

<script>
    // import {Client} from "@googlemaps/google-maps-services-js";
    // import { Loader } from '@googlemaps/js-api-loader';
    // ----
    var map;
    // ---------------------------
    export default {
        // props: {
        //     LanLat: {}
        // },
        // -----
        data() {
            return {

            // myMap: {
            //     loader: new Loader({
            //         apiKey: "AIzaSyAqTuk9ryMQ9NoG6ZeNyADmZDx9EFwS9VE",
            //         // version: "weekly",
            //         libraries: ["places"]
            //     }),
            //     mapOptions: {
            //         center: {
            //             lat: 0,
            //             lng: 0
            //         },
            //         zoom: 4
            //     }
            // },
            

            markers: [
                    {
                    position: { lat: 29.99509712, lng: 31.4459768 },
                    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content:'<h1>Mostafa Test Map</h1>',
                    type: 'parking'
                    },
                    {
                    position: { lat: 30.01288023, lng: 31.43102269 }
                    },
                    {
                    position: { lat: 30.01642345, lng: 31.43356512 }
                    },
                    {
                    position: { lat: 30.01637555, lng: 31.39839364 }
                    },
                    {
                    position: { lat: 30.0409879, lng: 31.34613896 }
                    },
                    {
                    position: { lat: 30.04505095, lng: 31.34143553 }
                    },
                    {
                    position: { lat: 30.05408947, lng: 31.3421715 }
                    },
                    {
                    position: { lat: 30.06198228, lng: 31.34523262 }
                    },
                    {
                    position: { lat: 30.07322503, lng: 31.34378507 }
                    },
                    {
                    position: { lat: 30.08201257, lng: 31.34388217 },
                    type: 'parking'
                    }
                ],
            }
        },
        // -----
        // -----
        methods: {

            initMap() {

                // this.myMap.loader.load()
                //     .then(() => {
                //         new google.maps.Map(document.getElementById("map"), this.myMap.mapOptions);
                //     })
                //     .then(() => {
                        
                //     })
                //     .catch(e => {
                //         // do something
                //     });


                map = new google.maps.Map( document.getElementById('map'),
                    {center: { lat: 30.01288023, lng: 31.43102269 }, zoom: 11});
                    // this.myMap.mapOptions);

                for (var i = 0; i < this.markers.length; i++) {
                    var marker = new google.maps.Marker({
                        position: this.markers[i].position,
                        // icon: icons[this.markers[i].type].icon,
                        map: map
                    });
                };


                





                // var myLatLng = {lat: -25.363, lng: 131.044};

                // var map = new google.maps.Map(document.getElementById('map'), {
                //     zoom: 4,
                //     center: myLatLng
                // });

                // Loop through markers
                // for(var i = 0;i < this.markers.length;i++){
                //     // Add marker
                //     this.addMarker(this.markers[i]);
                // }

                // var marker = new google.maps.Marker({
                //     position: myLatLng,
                //     map: map,
                //     title: 'Hello World!'
                // });
            }
        },
        
        // -----
        beforeMount: function () {
            console.log('component beforeMount');
        },
        mounted: function () {
            // console.log('component mounted');

            this.initMap();
        }
    }
</script>

<style scoped lang="scss">
    img {
        width: 50px;
        height: auto;

        margin: 0 30px 10px;
    }
    #map {
        height:250px;
        width: 100%;
        background-color: rgb(143, 170, 143);;
   }
</style>