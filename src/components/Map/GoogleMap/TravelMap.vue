<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey=""
  >
  // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
    import GoogleMapLoader from "./GoogleMapLoader";
    import GoogleMapMarker from "./GoogleMapMarker";
    import GoogleMapLine from "./GoogleMapLine";

    import { mapSettings } from "@/constants/mapSettings";

    export default {
        components: {
            GoogleMapLoader,
            GoogleMapMarker,
            GoogleMapLine
        },

        data() {
            return {
            markers: [
                {
                // id: "a",
                // position: { lat: 3, lng: 101 }
                // },
                // {
                // id: "b",
                // position: { lat: 5, lng: 99 }
                // },
                // {
                // id: "c",
                // position: { lat: 6, lng: 97 }
                // }
                id: "a",
                position: { lat: 29.99509712, lng: 31.4459768 }
                },
                {
                id: "b",
                position: { lat: 30.01288023, lng: 31.43102269 }
                },
                {
                id: "c",
                position: { lat: 30.01642345, lng: 31.43356512 }
                },
                {
                id: "d",
                position: { lat: 30.01637555, lng: 31.39839364 }
                },
                {
                id: "e",
                position: { lat: 30.0409879, lng: 31.34613896 }
                },
                {
                id: "f",
                position: { lat: 30.04505095, lng: 31.34143553 }
                },
                {
                id: "g",
                position: { lat: 30.05408947, lng: 31.3421715 }
                },
                {
                id: "h",
                position: { lat: 30.06198228, lng: 31.34523262 }
                },
                {
                id: "i",
                position: { lat: 30.07322503, lng: 31.34378507 }
                },
                {
                id: "j",
                position: { lat: 30.08201257, lng: 31.34388217 }
                }
            ],
            lines: [
                {
                // id: "1",
                // path: [{ lat: 3, lng: 101 }, { lat: 5, lng: 99 }]
                // },
                // {
                // id: "2",
                // path: [{ lat: 5, lng: 99 }, { lat: 6, lng: 97 }]
                // }
                id: "1",
                path: [{ lat: 29.99509712, lng: 31.4459768 }, { lat: 30.01288023, lng: 31.43102269 }]
                },
                {
                id: "2",
                path: [{ lat: 30.01288023, lng: 31.43102269 }, { lat: 30.01642345, lng: 31.43356512 }]
                },
                {
                id: "3",
                path: [{ lat: 30.01642345, lng: 31.43356512 }, { lat: 30.01637555, lng: 31.39839364 }]
                }

                ,
                {
                id: "4",
                path: [{ lat: 30.01637555, lng: 31.39839364 }, { lat: 30.0409879, lng: 31.34613896 }]
                },
                {
                id: "5",
                path: [{ lat: 30.0409879, lng: 31.34613896 }, { lat: 30.04505095, lng: 31.34143553 }]
                },
                {
                id: "6",
                path: [{ lat: 30.04505095, lng: 31.34143553 }, { lat: 30.05408947, lng: 31.3421715 }]
                },
                {
                id: "7",
                path: [{ lat: 30.05408947, lng: 31.3421715 }, { lat: 30.06198228, lng: 31.34523262 }]
                },
                {
                id: "8",
                path: [{ lat: 30.06198228, lng: 31.34523262 }, { lat: 30.07322503, lng: 31.34378507 }]
                },
                {
                id: "9",
                path: [{ lat: 30.07322503, lng: 31.34378507 }, { lat: 30.08201257, lng: 31.34388217 }]
                }
            ]
            };
        },

        computed: {
            mapConfig() {
            return {
                ...mapSettings,
                center: this.mapCenter
            };
            },

            mapCenter() {
            return this.markers[1].position;
            }
        }
    };

</script>

<style lang="scss" scoped>
    .travel-map {
        height: 400px;
    }
</style>

