<template>
  <div class="wrap login-page">
    <div class="login-img"></div>
    <div class="login-container">
      <!-- 로그인  -->
      <div class="login-inner-wrap">
        <h1>로그인</h1>
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
        <button type="button" class="btn btn-login">로그인</button>
        <div class="login-bottom">
          <div class="find">
            <a href="#">
              Forgot ID / password?
            </a>
          </div>
          <div class="remember">
            <span class="checkbox">
              <input type="checkbox" id="remember" name="remember">
              <label for="remember">Remember ID</label>
            </span>
          </div>
        </div>
      </div>
      <!-- //로그인  -->
    </div>
  </div>
</template>

<style lang="sass">

</style>
