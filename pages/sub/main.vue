<template>
  <div class="wrap">
    <Nay />
    <div class="contents-wrap">
      <HeaderCmp />
      <!-- // content top -->
      <div class="content">
        <div class="title-area">
          <h2 class="page-title">Dash Board</h2>
        </div>   
        <div class="cont">

        </div>             
      </div>
      <div class="footer-info ">
        <ul class="footer-util-menu">
          <li><nuxt-link to="">Privacy Terms</nuxt-link></li>
          <li><nuxt-link to="">Contact us</nuxt-link></li>
          <li><nuxt-link to="">FAQ</nuxt-link></li>
        </ul>
        <div class="copy">
          COPYRIGHT 2023 ECOMARINE CO.LTD. ALL RIGHT RESERVED. 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nay from '@/components/Nav.vue'
import HeaderCmp from '@/components/Header'
export default {
  components: { Nay, HeaderCmp }

}
</script>

<style>

</style>