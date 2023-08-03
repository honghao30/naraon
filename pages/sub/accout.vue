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
            <li class="current">Account</li>
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
        <h2 class="page-title">Account</h2>
        <div class="cont">
            <ul class="form-list">
              <li>
                <div class="tit">회원가입일</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text"  name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">사업자명</div>
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
                <div class="tit">부서명</div>
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
                <div class="tit">부서명</div>
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
                <div class="tit">직원명</div>
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
                <div class="tit">직원ID</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text" name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">직원이메일</div>
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
                <div class="tit">직원연락처</div>
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
                <div class="tit">출발지 주소</div>
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
                <div class="tit">적용 할인율</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text" name="">
                  </span>
                </div>
              </li>  
              <li>
                <div class="tit">ID / 비밀번호 변경</div>
                <div class="form-content">
                    <button type="button" class="btn btn-line">
                      ID/비밀번호 변경
                    </button>
                </div>
              </li> 
            </ul>
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