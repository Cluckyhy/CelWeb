<template>
  <div class="cellottery">
    <div class="title01">
      <img :src="title01" alt="">
    </div>
    <div class="normal">
      <img :src="active" alt="">
    </div>
    <div class="startbtn" @click="startLottery">
      <p>开始抽奖</p>
      <p>
        <img :src="coinimg" alt="">
        <span>X10</span>
      </p>
    </div>
    <div class="ball1">
      <img :src="ball1" alt="">
    </div>
    <div class="ball2">
      <img :src="ball1" alt="">
    </div>
    <div class="ball3">
      <img :src="ball1" alt="">
    </div>
    <div class="ball4">
      <img :src="ball1" alt="">
    </div>
    <div class="ball5">
      <img :src="ball1" alt="">
    </div>
    <div class="ball6">
      <img :src="ball1" alt="">
    </div>
    <div class="ball7">
      <img :src="ball2" alt="">
    </div>
    <div class="ball8">
      <img :src="ball2" alt="">
    </div>
    <div class="ball9">
      <img :src="ball2" alt="">
    </div>
    <div class="ball10">
      <img :src="ball3" alt="">
    </div>
    <div class="ball11">
      <img :src="ball3" alt="">
    </div>
    <div class="ball12">
      <img :src="ball4" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CelLottery",
  data() {
    return {
      title01: require('@/assets/images/lottery-title02.png'),
      active: require('@/assets/images/lottery-acitive.png'),
      leftbtn: require('@/assets/images/icon-left.png'),
      coinimg: require('@/assets/images/coin.png'),
      rightbtn: require('@/assets/images/icon-right.png'),
      ball1: require('@/assets/images/ball1.png'),
      ball2: require('@/assets/images/ball2.png'),
      ball3: require('@/assets/images/ball3.png'),
      ball4: require('@/assets/images/ball4.png'),
    }
  },
  mounted(){
    setTimeout(() => {
      //箭头函数体
      alert('恭喜你抽取到一只小卡龙')
      // this.$router
    },3000)
  },
  methods: {
    startLottery() {
      setTimeout(() => {
        //箭头函数体
        alert('恭喜你抽取到一只小卡龙')
        // this.$router
      },2000)
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/cellottery.css";
</style>