<template>
  <div class="celtop">
    <div class="title01">
      <img :src="title01" alt="">
    </div>
    <div class="normal">
      <img :src="normal" alt="">
    </div>
    <div class="star_left">
      <img :src="start_left" alt="">
    </div>
    <div class="star_right">
      <img :src="start_right" alt="">
    </div>
    <div class="ball1">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball2">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball3">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball4">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball5">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball6">
      <img :src="ball1" alt="">
      <img :src="innerball1" alt="">
    </div>
    <div class="ball7">
      <img :src="ball2" alt="">
      <img :src="innerball2" alt="">
    </div>
    <div class="ball8">
      <img :src="ball2" alt="">
      <img :src="innerball2" alt="">
    </div>
    <div class="ball9">
      <img :src="ball2" alt="">
      <img :src="innerball2" alt="">
    </div>
    <div class="ball10">
      <img :src="ball3" alt="">
      <img :src="innerball3" alt="">
    </div>
    <div class="ball11">
      <img :src="ball3" alt="">
      <img :src="innerball3" alt="">
    </div>
    <div class="ball12">
      <img :src="ball4" alt="">
      <img :src="innerball4" alt="">
    </div>
    <div class="btn">
      <img :src="leftbtn" alt="">
      <img :src="rightbtn" alt="">
    </div>
    <div class="startbtn" @click="startLottery">
      <p>开始抽奖</p>
      <p>
        <img :src="coinimg" alt="">
        <span>X10</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelTop",
  data() {
    return {
      title01: require('@/assets/images/lottery-title01.png'),
      normal:require('@/assets/images/lottery-normal.png'),
      start_left:require('@/assets/images/star-left.png'),
      start_right:require('@/assets/images/star-right.png'),
      ball1:require('@/assets/images/pop3.png'),
      ball2:require('@/assets/images/pop4.png'),
      ball3:require('@/assets/images/pop2.png'),
      ball4:require('@/assets/images/pop1.png'),
      innerball1:require('@/assets/images/bg2-8-4.png'),
      innerball2:require('@/assets/images/bg9-3.png'),
      innerball3:require('@/assets/images/bg2-10-3.png'),
      innerball4:require('@/assets/images/bg2-11-2.png'),
      leftbtn: require('@/assets/images/icon-left.png'),
      coinimg: require('@/assets/images/coin.png'),
      rightbtn: require('@/assets/images/icon-right.png'),
    }
  },
  methods:{
    startLottery(){
      alert("开始抽奖")
      this.$router.push('/lottery')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/celtop.css";
</style>