<template>
  <div class="wrap">
    <Nay />
    <div class="contents-wrap">
      <HeaderCmp />
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
                    <span class="select-el">
                      <el-select class="m-2" v-model="Port" placeholder="Port을 선택하세요." size="large">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"                        
                        />
                      </el-select> 
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel Name</div>
                  <div class="form-content">
                    <span class="select-el">
                      <el-select class="m-2" v-model="VesselName" placeholder="Vessel Name 선택하세요." size="large">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"                        
                        />
                      </el-select> 
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Anchorage / Berth</div>
                  <div class="form-content">
                    <span class="select-el">
                      <el-select class="m-2" v-model="AnchorageBerth" placeholder="Anchorage / Berth을 선택하세요." size="large">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"                        
                        />
                      </el-select> 
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel Type</div>
                  <div class="form-content">
                    <span class="select-el">
                      <el-select class="m-2" v-model="VesselType" placeholder="Vessel Type을 선택하세요." size="large">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"                        
                        />                        
                      </el-select> 
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Desired Delivery Time</div>
                  <div class="form-content">
                    <span class="el-time-select">
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="Desired Delivery Time을 선택하세요."
                        :size="size"
                      />                    
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Vessel contact details</div>
                  <div class="form-content">
                    <span class="text">
                      <input type="text" v-model="Vcd" placeholder="Vessel contact details을 입력하세요." name="">
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tit">Parcel details</div>
                  <div class="form-content mullt">
                    <div class="form-rows">
                      <span class="text">
                        <input type="text" v-model="ParcelDetails" placeholder="Parcel details을 입력하세요."  name="">
                      </span>
                    </div>
                    <div class="form-rows item5"  v-for="(info, index) in ParcelDetailsInfo" :key="index">
                      <span class="text">
                        <input type="text" v-model="info.Parcel1"  name="">
                      </span>
                      <span class="select-el">
                        <el-select class="m-2" v-model="info.Parcel2" placeholder="선택" size="large">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"                        
                          />                          
                        </el-select> 
                      </span>
                      <span class="text">
                        <input type="text" v-model="info.Parcel3"  name="">
                      </span>
                      <span class="text">
                        <input type="text" v-model="info.Parcel4"  name="">
                      </span>                      
                      <span class="select-el">
                        <el-select class="m-2" v-model="info.Parcel5"  placeholder="선택" size="large">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"                        
                          />                          
                        </el-select> 
                      </span>
                    </div>
                    <div class="form-rows">
                      <button type="button" class="btn btn-line-gray full-wd"
                        @click="addItem"
                      >
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
                      <input type="text" v-model="UploadDoc" name="">
                      <input type="file" id="file" @change="FileUpload" name="">
                    </span>
                    <label for="file"
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
                <button type="button" class="btn btn-orange size-large"  @click="modalView">Place Order</button>
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
   <!-- 모달    -->
   <ModalView
      v-if="isModalViewed" @closeModal="isModalViewed = false"
    >
      <ConfirmMsg
        @closeModal="isModalViewed = false">
        <template v-slot:msg>
          <div class="msg">
            <i class="icon-send"></i>
            Would you like to send the<br>
            booking information<br>
            to <strong>NARAON</strong> team?
          </div>
        </template>        
        <template v-slot:button>
          <div class="button-wrap">
            <button type="button" class="btn btn-orange btn-full">Send</button>
          </div>
      </template>
      </ConfirmMsg>
    </ModalView>   
  </div>
</template>

<script>
import Nay from '@/components/Nav.vue'
import HeaderCmp from '@/components/Header'
import ModalView from '@/components/ModalView.vue'
import ConfirmMsg from '@/components/ConfirmMsg.vue'

export default {
  components: { Nay, HeaderCmp, ModalView, ConfirmMsg },
  data() {
    return {
      Port: '',
      VesselName: '',
      AnchorageBerth: '',
      VesselType: '',
      DDtime: '',
      Vcd: '',
      ParcelDetails: '',
      ParcelDetailsInfo: [
        {
          Parcel1: '5',
          Parcel2: '',
          Parcel3: '',
          Parcel4: '',
          Parcel5: ''
        }
      ],
      UploadDoc: '',
      isModalViewed: false,
      dialogVisible: false,
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]        
    }
  },
  methods: {
    FileUpload(event) {
      const file = event.target.files[0];
      this.UploadDoc = file ? file.name : ''; 
    },
    addItem () {
      console.log(this.ParcelDetailsInfo)
      if (this.ParcelDetailsInfo.length < 10) {
        this.ParcelDetailsInfo.push({
          Parcel1: '',
          Parcel2: '',
          Parcel3: '',
          Parcel4: '',
          Parcel5: '',
        });
      }      
    },
    handleClose () {
      console.log('모달')
    },
    modalView () {
      this.isModalViewed = true
    }    
  }
}
</script>

<style>

</style>