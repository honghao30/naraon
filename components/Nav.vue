<template>
  <div class="left-side-wrap">
      <div class="logo">
        <button type="button" class="btn-mobile-close">
          <span class="bar"></span>          
          <span class="bar"></span>
        </button>
        <h1>
          <nuxt-link to="/">
            <img src="@/assets/images/common/logo_c.png" alt="">
          </nuxt-link>
        </h1>
      </div>   
      <!-- // logo    -->
      <ul class="lnb">
        <li :class="{ active: $route.path === '/sub/main' }"><nuxt-link to="/sub/main">Home</nuxt-link></li>
        <li :class="{ active: $route.path === '/sub/booking' }"><nuxt-link to="/sub/booking">Booking</nuxt-link></li>
        <li :class="{ active: $route.path === '/sub/order_history' }"><nuxt-link to="/sub/order_history">My orders</nuxt-link></li>
        <li :class="{ active: $route.path === '/sub/account' }"><nuxt-link to="/sub/account">Account</nuxt-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.path)
  }
}
</script>

<style>

</style>
