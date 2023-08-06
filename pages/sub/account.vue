<template>
  <div class="wrap">
    <Nay @mobile-navy="handleMobileNavy" />
    <div class="contents-wrap">
      <HeaderCmp />
      <!-- // content top -->
      <div class="content">
        <div class="title-area">
          <h2 class="page-title">Account</h2>
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
            <ul class="form-list">
              <li>
                <div class="tit">회원가입일</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text" :disabled="disabled" v-model="joinDate" name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">사업자명</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('companyName')"
                    >
                      <i></i>
                    </button>
                    <input type="text" :disabled="editMode['companyName']" v-model="companyName" name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">부서명</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('partName')"
                    >
                      <i></i>
                    </button>
                    <input type="text" :disabled="editMode['partName']"  v-model="partName" name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">직원명</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('staffName')"
                    >
                      <i></i>
                    </button>
                    <input type="text"  :disabled="editMode['staffName']"  v-model="staffName"  name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">직원ID</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text" :disabled="editMode['staffId']"  v-model="staffId" name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">직원이메일</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('email')"
                    >
                      <i></i>
                    </button>
                    <input type="text"  :disabled="editMode['email']" v-model="email"  name="">
                  </span>
                </div>
              </li>
              <li>
                <div class="tit">직원연락처</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('tell')"
                    >
                      <i></i>
                    </button>
                    <input type="text" :disabled="editMode['tell']"  v-model="tell"  name="">
                  </span>
                </div>
              </li>              
              <li>
                <div class="tit">출발지 주소</div>
                <div class="form-content">
                  <span class="text has-btn">
                    <button type="button"
                      class="btn-modify"
                      @click="toggleMode('address')"
                    >
                      <i></i>
                    </button>
                    <input type="text" :disabled="editMode['address']"  v-model="address"  name="">
                  </span>
                </div>
              </li>      
              <li>
                <div class="tit">적용 할인율</div>
                <div class="form-content">
                  <span class="text">
                    <input type="text" v-model="disCount" name="">
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
      <div class="footer-info">
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
  components: { Nay, HeaderCmp },
  data() {
    return {
      editMode: {
        companyName: true,
        partName: true,
        staffName: true,        
        email: true,
        tell: true,
        address: false
      },
      joinDate: '2023-07-21',
      companyName: '주식회사 에코해운',
      partName: '운영팀',
      staffName: '홍길동',
      staffId: 'abcd',      
      email: 'abcd@naver.com',
      tell: '031-5555-8888',
      address: '부산시 영도구 태종로 727, 산학허브관 613호 (ZIP 49112)',
      disCount: '5%',
      disabled: true      
    }
  },
  methods: {
    toggleMode(inputName) {
      this.editMode[inputName] = false;
    },
    handleMobileNavy () {
      alert('수신 완료')
    }
  }
}
</script>

<style>

</style>