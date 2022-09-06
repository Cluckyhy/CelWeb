<template>
  <div class="celcenter">
    <div class="maininfo">
      <div class="star">
        <img :src="star" alt="">
      </div>
      <div class="btntip">
        <span>左右按键切换奖池</span>
      </div>
      <div class="detail">
        <div class="hbtn">
          <span>累计奖励</span>
        </div>
        <div class="numshow">
          <p>剩余XX数量</p>
          <p>1000</p>
        </div>
        <div class="exit">
          <img :src="exitimg" alt="">
        </div>
      </div>
      <div class="daylogin">
        <div class="dayleft">
          <p><span>每日登录</span><span>+1个</span></p>
          <p><span>每日登录可获得1个神灯币</span> <img :src="coinimg" alt=""></p>
        </div>
        <div class="dayright" :style="{'backgroundImage':'url('+dayrightimg+')'}">
          <span :style="{display:unreceived}" @click="showReceived">领取</span>
          <span class="received" :style="{display: received}">已领取</span>
        </div>
      </div>
      <div class="part2">
        <ul>
          <li v-for="(item,index) in signinmsg" @click="Receive(index)">
            <p>{{ item.day }}</p>
            <img :src="item.img" alt="">
            <p :style="{backgroundColor: item.part2Color}">{{ item.signinbtn }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelCenter",
  data() {
    return {
      star: require('@/assets/images/star-left.png'),
      coinimg: require('@/assets/images/coin.png'),
      exitimg: require('@/assets/images/exit.png'),
      signinmsg: [
        {
          day: '第一天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第二天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第三天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第四天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第五天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第六天',
          img: require('@/assets/images/icon-gift.png'),
          signinbtn: '签到领取',
          part2Color: '#5ED2EE'
        },
        {
          day: '第七天',
          img: require('@/assets/images/bg2-8-2.png'),
          signinbtn: '签到领取',
          part2Color: '#F1B15C'
        }
      ],
      dayrightimg: require('@/assets/images/r-btn.png'),
      unreceived: 'block',
      received: 'none'
    }
  },
  methods: {
    showReceived() {
      this.unreceived = 'none'
      this.received = 'block'
      this.dayrightimg = require('@/assets/images/n-btn.png')
      alert("恭喜你！领取成功")
    },
    Receive(index) {
      alert(`第${index+1}天签到成功!`)
      this.signinmsg[index].part2Color = '#C9C9C9'
      this.signinmsg[index].signinbtn = '领取成功'
      console.log(index);
    },
  }
}
</script>

<style scoped>
@import "~@/assets/css/celcenter.css";
</style>