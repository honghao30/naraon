<template>
  <div class="wrap">
    <Nay />
    <div class="contents-wrap">
      <HeaderCmp />
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
            <div class="scroll-table__inner">
              <el-table :data="tableData" style="max-width: 99%">
                <el-table-column label="기본정보" fixed="left">
                  <el-table-column prop="num" label="이용번호" width="100" />
                  <el-table-column prop="orderDate" label="주문일시" width="120" />
                  <el-table-column prop="company" label="사업자명" width="160" />
                </el-table-column>
                <el-table-column prop="part" label="부서명" width="180" />
                <el-table-column prop="Name" label="직원명" width="180" />
                <el-table-column prop="porsonId" label="직원ID" width="150" />
                <el-table-column prop="email" label="직원이메일" width="250" />
                <el-table-column prop="tell" label="직원연락처" width="150" />
                <el-table-column prop="port2" label="항구명" width="100" />
                <el-table-column prop="ship" label="선박명" width="150" />
                <el-table-column prop="portArea" label="묘박지" width="80" />
                <el-table-column prop="shiptype" label="선종" width="150" />
                <el-table-column prop="data2" label="배송희망일시" width="150" />
                <el-table-column prop="tell2" label="본선연락처" width="150" />
                <el-table-column prop="product" label="품목" width="100" />
                <el-table-column prop="counter" label="수량" width="80" />              
                <el-table-column prop="unit" label="단위" width="80" />
                <el-table-column prop="weit" label="무게" width="80" />
                <el-table-column prop="plusPrice" label="화물가액" width="80" />
                <el-table-column prop="address" label="출발지 주소" width="280" />
                <el-table-column prop="flyTime" label="비행 스케줄 안내 일시" width="150" />
                <el-table-column prop="flyTime2" label="비행예정일시" width="150" />
                <el-table-column prop="status" label="배송상태" width="100" />
                <el-table-column prop="discount" label="할인적용율" width="100" />
                <el-table-column prop="fileUp" label="서류 업로드" width="100" />
                <el-table-column width="30" class="triger-button-wrap">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link btn-more-dot">
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item>사업자명 수정</el-dropdown-item>
                          <el-dropdown-item>부서명 수정</el-dropdown-item>
                          <el-dropdown-item>직원명 수정</el-dropdown-item>
                          <el-dropdown-item>직원명 수정</el-dropdown-item>
                          <el-dropdown-item>직원 연락처 수정</el-dropdown-item>
                          <el-dropdown-item>출발지 주소 수정</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown> 
                </el-table-column>
              </el-table>          
            </div>
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
<script>
import Nay from '@/components/Nav.vue'
import HeaderCmp from '@/components/Header.vue'

export default {
  components: { Nay, HeaderCmp },
  data() {
    return {
      tableData: [
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      },
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      },
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      },
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      },
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      },
      {
        num: '1',
        orderDate: '2023-07-01',
        state: 'California',
        company: 'Los Angeles',      
        part: 'Busan',
        Name: 'hong gildong',
        porsonId: 'abcd',
        email: 'abcde@naver.com',
        tell: '010-7588-5555',
        port2: 'Busan',
        ship: '',
        portArea: '',
        shiptype: '',
        data2: '',
        tell2: '031-555-5898',
        product: 'HandBag',
        counter: '1',
        unit: '2',
        weit: '10kg',
        plusPrice: '2,300',
        address: '경기도 평택시',
        flyTime: '',
        flyTime2: '',
        status: '',
        discount: '',
        fileUp: ''
      }              
    ]
    }
  },
  mounted () {
    console.log(this.$route.path)
  }
}
</script>

<style>
.el-table thead.is-group th.el-table__cell { 
  background-color: #f7f7f7;
  border: solid 1px #f1f1f1;
  height:35px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.19;
  letter-spacing: -0.4px;
  text-align: left;
  color: #999;
}
.el-table--enable-row-transition .el-table__body td.el-table__cell {
  height:60px;
  border: solid 1px #f1f1f1;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.19;
  letter-spacing: -0.4px;
  text-align: left;
  color: #191919;
  }
  .el-table__body tr.hover-row.current-row>td.el-table__cell,.el-table__body tr.hover-row.el-table__row--striped.current-row>td.el-table__cell,
  .el-table__body tr.hover-row.el-table__row--striped>td.el-table__cell,.el-table__body tr.hover-row>td.el-table__cell {
    background-color: rgb(246, 157, 0,0.08);color:#f69d00;}
.el-dropdown-menu__item:not(.is-disabled):focus {
    background-color: #fff;
    color: #f69d00;
}
.triger-button-wrap .cell {text-align: center;}
</style>
