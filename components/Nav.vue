<template>
  <div>
    <div class="mask" v-if="isMobileNav"></div>
    <div class="mo-head">
        <button type="button" class="btn-mobile" @click="mobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div class="mo-logo">
          <img src="@/assets/images/common/logo_c.png" alt="">
        </div>          
      </div>  
      <div class="left-side-wrap"
        :class="{ active: isMobileNav }"
      >  
        <div class="logo">
          <h1>
            <nuxt-link to="/">
              <img src="@/assets/images/common/logo_c.png" alt="">
            </nuxt-link>
          </h1>
          <button type="button" class="btn-mobile-close" @click="closeMobile">
            <span class="bar"></span>          
            <span class="bar"></span>
          </button>          
        </div>   
        <!-- // logo    -->
        <ul class="lnb">
          <li :class="{ active: $route.path === '/sub/main' }"><nuxt-link to="/sub/main">Home</nuxt-link></li>
          <li :class="{ active: $route.path === '/sub/booking' }"><nuxt-link to="/sub/booking">Booking</nuxt-link></li>
          <li :class="{ active: $route.path === '/sub/order_history' }"><nuxt-link to="/sub/order_history">My orders</nuxt-link></li>
          <li :class="{ active: $route.path === '/sub/account' }"><nuxt-link to="/sub/account">Account</nuxt-link></li>
        </ul>
        <!-- <ul class="lnb order">        
          <li :class="{ active: $route.path === '' }"><nuxt-link to="#">Client Management</nuxt-link></li>
          <li :class="{ active: $route.path === '/sub/order_history' }"><nuxt-link to="/sub/order_history">My orders</nuxt-link></li>        
        </ul>       -->
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileNav: false
    }
  },
  mounted () {
    // console.log(this.$route.path)
  },
  methods: {
    mobileMenu () {      
      this.isMobileNav = true
    },
    closeMobile () {
      this.isMobileNav = false
    }
  }
}
</script>

<style>

</style>
