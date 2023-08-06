<template>
  <div class="content-top">   
    <div class="mo-head">
      <button type="button" class="btn-mobile">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div class="mo-logo">
        <img src="../../assets/images/common/logo_c.png" alt="">
      </div>          
    </div>               
    <div class="breadcrumb">
      <ul>
        <li>
          <span class="home"></span>
        </li>
        <li class="current">Booking</li>
      </ul>
    </div>
    <ul class="util-menu-top">
      <li>
        <nuxt-link to="#"><i class="icon-ship-market"></i> Ship Stores Market</nuxt-link>
        </li>
        <li>
        <nuxt-link to="#"><i class="icon-service-area"></i> Service Areas</nuxt-link>
        </li>      
        <li class="logout">
        <nuxt-link to="#"><i class="icon-logout"></i> </nuxt-link>
        </li>                 
    </ul>            
    <!-- // 현재 위치 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
