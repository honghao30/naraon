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
            <li class="current">Booking</li>
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
          <h2 class="page-title">Booking</h2>
        </div>        
        <div class="cont">
           <div class="form-list__wrap">
              <ul class="form-list">
                <li>
                  <div class="tit">Port</div>
                  <div class="form-content">
                    <span class="selectbox">
                      <select name="">
                        <option>선택하세요</option>
                      </select>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel Name</div>
                  <div class="form-content">
                    <span class="selectbox">
                      <select name="">
                        <option>선택하세요</option>
                      </select>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Anchorage / Berth</div>
                  <div class="form-content">
                    <span class="selectbox">
                      <select name="">
                        <option>선택하세요</option>
                      </select>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel Type</div>
                  <div class="form-content">
                    <span class="selectbox">
                      <select name="">
                        <option>선택하세요</option>
                      </select>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Desired Delivery Time</div>
                  <div class="form-content">
                    <span class="text">
                      <button type="button"
                        class="btn-modify"
                      >
                        <i></i>
                      </button>
                      <input type="text"  name="">
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel contact details</div>
                  <div class="form-content">
                    <span class="text">
                      <input type="text" name="">
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Parcel details</div>
                  <div class="form-content mullt">
                    <div class="form-rows">
                      <span class="text">
                        <input type="text"  name="">
                      </span>
                    </div>
                    <div class="form-rows item5">
                      <span class="text">
                        <input type="text"  name="">
                      </span>
                      <span class="selectbox">
                        <select name="">
                          <option>선택하세요</option>
                        </select>
                      </span>
                      <span class="text">
                        <input type="text"  name="">
                      </span>
                      <span class="text">
                        <input type="text"  name="">
                      </span>                      
                      <span class="selectbox">
                        <select name="">
                          <option>선택하세요</option>
                        </select>
                      </span> 
                    </div>
                    <div class="form-rows">
                      <button type="button" class="btn btn-line-gray full-wd">
                        + Add
                      </button>
                    </div>
                    <div class="form-rows">
                      <button type="button" class="btn btn-line full-wd">
                        <i class="icon-cart"></i> Cart
                      </button>
                    </div>                    
                  </div>
                </li>
                <li>
                  <div class="tit">Upload docs</div>
                  <div class="form-content">                  
                    <span class="text fileup">
                      <input type="text" name="">
                      <input type="file" id="upfile" name="">
                    </span>
                    <label for="upfile"
                        class="btn btn-line-gray"
                      >
                        Upload docs
                      </label>
                  </div>
                </li> 
              </ul>
              <div class="button-wrap flex-end">
                <button type="button" class="btn btn-gray">save</button>
                <button type="button" class="btn btn-gray">Calculate</button>
                <button type="button" class="btn btn-orange size-large">Place Order</button>
              </div>
            </div>
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
export default {

}
</script>

<style>

</style>