

<template>
    <div class="user" :id="userID">
        <!-- <div class="img" style="background-image: url('favicon.ico')"></div> -->
        <!-- <div class="img" style="background-image: url('$userImg')"></div> -->
        <div class="img" >
            <img v-if="userImg" alt="" :src="userImg">
            <img v-else alt="" src="@/assets/img/swvl_icon.png">

        </div>
        <div class="userInfo">
            <span>{{ userName }}</span>
            <div>
                <span class="userID">{{ userID }}</span>
                <span class="userStatus">{{ userStatus }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userID: null,
        userImg: String,
        userName: String,
        userStatus: String
    }
}
</script>

<style scoped lang="scss">
    .user {
        $imgSize: 50px;
        // -----
        width: 200px;
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
            // background-image: url("favicon.ico");
            // background-repeat: no-repeat;
            // background-size: cover;
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