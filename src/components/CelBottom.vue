<template>
  <div class="celbottom">
    <div class="giftpack">
      <ul>
        <li v-for="item in giftinfo">
          <div class="tp">
            <span>{{ item.name }}</span>
            <span>限购{{ item.currentcount }}/{{ item.limitcount }}</span>
          </div>
          <div class="bm">
            <span><img :src="item.img" alt=""></span>
            <span><img :src="item.img" alt=""></span>
            <span><img :src="item.img" alt=""></span>
            <span>{{ item.unitprcie }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="bmbg">
      <img :src="bmbg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CelBottom",
  data() {
    return {
      giftinfo: [
        {
          name: '礼包名称',
          currentcount: 0,
          limitcount: 81,
          img: require('@/assets/images/bg2-10-1.png'),
          unitprcie: '￥6'
        },
        {
          name: '礼包名称',
          currentcount: 0,
          limitcount: 81,
          img: require('@/assets/images/bg2-10-2.png'),
          unitprcie: '￥6'
        },
        {
          name: '礼包名称',
          currentcount: 0,
          limitcount: 81,
          img: require('@/assets/images/bg2-10-3.png'),
          unitprcie: '￥6'
        },
        {
          name: '礼包名称',
          currentcount: 0,
          limitcount: 81,
          img: require('@/assets/images/bg2-10-4.png'),
          unitprcie: '￥6'
        },
        {
          name: '礼包名称',
          currentcount: 0,
          limitcount: 81,
          img: require('@/assets/images/bg2-10-5.png'),
          unitprcie: '￥6'
        }
      ],
      bmbg:require('@/assets/images/bottombg.png')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/celbottom.css";
</style>