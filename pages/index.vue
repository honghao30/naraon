<template>
  <div class="wrap login-page">
    <div class="login-img">
      <h1><img src="../assets/images/login/logo.png" alt=""></h1>
    </div>
    <div class="login-container">
      <!-- 로그인  -->
      <div class="login-inner-wrap">
        <h2>로그인</h2>
        <dl>
          <dt><label for="id">ID</label></dt>
          <dd>
            <input type="text" id="id" name="" >
          </dd>
          <dt><label for="pw">Password</label></dt>
          <dd>
            <input type="password" id="pw" name="" >
          </dd>          
        </dl>
        <button type="button" 
          class="btn btn-login"
          @click="goLogin"
        >
          로그인
        </button>
        <div class="login-bottom">
          <div class="find">
            <a href="#">
              Forgot ID / password?
            </a>
          </div>
          <div class="remember">
            <span class="checkbox remember">
              <input type="checkbox" id="remember" name="remember">
              <label for="remember">Remember ID</label>              
            </span>
          </div>
        </div>
      </div>
      <!-- //로그인  -->
      <p class="login-copyright">COPYRIGHT 2023 ECOMARINE CO.LTD. ALL RIGHT RESERVED.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin () {
      alert('로그인')
    }
  }  
}
</script>
<style lang="sass">

</style>
