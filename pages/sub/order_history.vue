<template>
  <div class="wrap">
    <div class="left-side-wrap">
      <div class="logo">
        <h1>
          <nuxt-link to="/">
            <img src="../../assets/images/common/logo_c.png" alt="">
          </nuxt-link>
        </h1>
      </div>   
      <!-- // logo    -->
      <ul class="lnb">
        <li><nuxt-link to="">Home</nuxt-link></li>
        <li><nuxt-link to="">Booking</nuxt-link></li>
        <li><nuxt-link to="">My orders</nuxt-link></li>
        <li><nuxt-link to="">Account</nuxt-link></li>
      </ul>
    </div>
    <div class="contents-wrap">
      <div class="content-top">
        <div class="breadcrumb">
          <ul>
            <li>
              <span class="home"></span>
            </li>
            <li class="current">Order History</li>
          </ul>
        </div>
        <!-- // 현재 위치 -->
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
      </div>
      <!-- // content top -->
      <div class="content">
        <div class="title-area">
          <h2 class="page-title">Order History</h2>
          <div class="btn-wrap">
            <button type="button" class="btn btn-orange light">
              <i class="icon-up"></i>
              Upload Business Cert
            </button>
            <button type="button" class="btn btn-orange">
              <i class="icon-up"></i>
              File export
            </button>            
          </div>
        </div>                
        <div class="cont">

          <div class="scroll__wrapper">
            <el-table :data="tableData" style="width: 100%" height="250">
              <el-table-column label="Address Info" fixed="left">
                <el-table-column prop="state" label="State" width="100" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="250" />
              </el-table-column>
              <el-table-column prop="date" label="Date" width="150" />
              <el-table-column prop="name" label="Name" width="150" />
              <el-table-column prop="zip" label="Zip" width="150" />
            </el-table>          


          </div>
          <!-- // 스크롤 -->

          
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

<script lang="ts" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ]
</script>

<style>

</style>