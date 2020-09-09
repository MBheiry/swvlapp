

<template>
    <div class="container">
        <h3>
            Trip Information
            <span class="date">15/5/2018, 8:07 AM</span>
        </h3>
        <div>
            <UserDriver 
                userName="Ashraf nazeeh" 
                userRate= "4.5"
                carModel= "Toyota"
                carImg= "bus.jpeg"
                carId= "GA-2770"/>

            <div class="rode">
                <p class="from">6th of October</p>
                <p class="to">Mohandessin</p>
            </div>
            <div class="fee">
                <p class="dist">Trip Distance: <span>4.7 KM</span> </p>
                <p class="fare">Trip Base Fare: <span>45 EGP</span></p>
            </div>
        </div>
        

        
    </div>
  
</template>

<script>
    import UserDriver from './userTypes/UserDriver'
    export default {
        name: 'TripInfo',
        components: {
            UserDriver
        }
    }
</script>

<style scoped lang="scss">

    h3 {
        .date {
            display: block;
            font-size: 12px;
            font-weight: normal;
            color: gray;
        }
        // ----
        text-align: left;
        & + div {
            display: flex;
            flex-wrap: wrap;
            // ----
            > div {
                margin-right: 15px;
            }
            // ----
            .rode, .fee {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            // ----

            p {
                margin: 0;
            }
        }
    }
</style>

