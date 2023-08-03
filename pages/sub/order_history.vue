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
          <h3 class="sub-title">에코해운</h3>
          <div class="scroll__wrapper">
            <el-table :data="tableData" style="width: 100%" height="250">
              <el-table-column label="기본정보" fixed="left">
                <el-table-column prop="num" label="이용번호" width="100" />
                <el-table-column prop="orderDate" label="주문일시" width="120" />
                <el-table-column prop="company" label="사업자명" width="100" />
              </el-table-column>
              <el-table-column prop="part" label="부서명" width="100" />
              <el-table-column prop="Name" label="직원명" width="100" />
              <el-table-column prop="porsonId" label="직원ID" width="150" />
              <el-table-column prop="email" label="직원이메일" width="250" />
              <el-table-column prop="tell" label="직원연락처" width="150" />
              <el-table-column prop="port" label="항구명" width="100" />
              <el-table-column prop="ship" label="선박명" width="150" />
              <el-table-column prop="portArea" label="묘박지" width="80" />
              <el-table-column prop="shiptype" label="선종" width="150" />
              <el-table-column prop="data2" label="배송희망일시" width="150" />
              <el-table-column prop="tel2" label="본선연락처" width="150" />
              <el-table-column prop="product" label="품목" width="100" />
              <el-table-column prop="couter" label="수량" width="80" />
              <el-table-column prop="cout" label="수량" width="80" />
              <el-table-column prop="unit" label="단위" width="80" />
              <el-table-column prop="weit" label="무게" width="80" />
              <el-table-column prop="plusPrice" label="화물가액" width="80" />
              <el-table-column prop="addres" label="출발지 주소" width="280" />
              <el-table-column prop="flyTime" label="비행 스케줄 안내 일시" width="150" />
              <el-table-column prop="flyTime2" label="비행예정일시" width="150" />
              <el-table-column prop="status" label="배송상태" width="100" />
              <el-table-column prop="discout" label="할인적용율" width="100" />
              <el-table-column prop="fileup" label="서류 업로드" width="100" />
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