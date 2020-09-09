

<template>
    <div class="userDriver">
        <!-- <div class="img" style="background-image: url('favicon.ico')"></div> -->
        <!-- <div class="img" style="background-image: url('$userImg')"></div> -->
        <div class="img" >
            <img v-if="userImg" alt="" :src="userImg">
            <img v-else alt="" src="@/assets/img/swvl_icon.png">
        </div>
        <div class="img imgBus" v-if="carImg">
            <img alt="" src="@/assets/img/bus.jpeg">
            <!-- <img alt="" :src="'/img/'+carImg"> -->
        </div>
        <div class="userInfo">
            <div class="user">
                <span class="user-name">{{ userName }}</span>
                <span class="user-rate">{{ userRate }}</span>
            </div>
            
            <div class="car">
                <span class="">{{ carModel }}</span>
                -
                <span class="">{{ carId }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userImg: String,
        userName: String,
        userRate: String,

        carModel: String,
        carImg: String,
        carId: String
    }
}
</script>

<style scoped lang="scss">
    .userDriver {
        $imgSize: 50px;
        // -----
        max-width: 240px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .img {
            background-color: red;
            width: $imgSize;
            height: $imgSize;
            border-radius: 50%;
            margin-right: 10px;
            overflow: hidden;
            // ----
            img {
                height: inherit;
                width: auto;
            }
            // ----
            &Bus {
                position: relative;
                left: -31px;
                z-index: -1;
                border: 1px solid lightgray;
            }
        }
        .userInfo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            > span {font-weight: bold;}

            .userID {margin-right: 5px;}
            .userStatus {}
        }
    }

</style>