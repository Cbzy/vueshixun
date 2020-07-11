<template >
    <div class="oneway_div">
      <span class="s1">{{i1}}</span><el-input v-model="in1" placeholder="中文/拼音/简拼" class="inp1"></el-input>

      <div class="zg"></div>
      <span class="s1">{{i2}}</span><el-input v-model="in2" placeholder="中文/拼音/简拼" class="inp1"></el-input>
      <div class="zg"></div>
      <span class="s1">{{i3}}</span>
      <el-date-picker v-model="value1" type="date"    class="inp1" >{{value1}}</el-date-picker>


      <div class="zg"></div>
      <span class="s1">{{i4}}</span><el-date-picker v-model="value2" type="date" placeholder="yyyy-mm-dd" class="inp1" :disabled="true"></el-date-picker>
      <el-radio v-model="radio" label=""  class="el-radio-oneway" fill='#ff9d00'></el-radio>
      <el-button type="primary" icon="el-icon-search" class="el-button-oneway" >搜索</el-button>
    </div>

</template>
<script>
export default {
    name: 'Oneway',
    data() {
      return {
        radio:'1',
        i1:'出发城市',
        i2:'到达城市',
        i3:'出发日期',
        i4:'返回日期',
        value1: '2020-07-12',
        value2: '',
        in1:'',
        in2:''
      }
    }
}
</script>
<style>
  .oneway_div{
    /* border: 1px solid red; */
    height: 85%;
  }
  .oneway_div .inp1{

    width: 61%;
    float: right;
    height: 38px;
    margin-right: 50px;
    /* margin-left: 10px; */
    display: inline-block;

  }
  .oneway_div .s1{
    font-size: 14px;
    color: #717376;
    height: 38px;
    line-height: 38px;
    display: inline-block;
    /* border: 1px solid red; */
    margin-left: 20px;
  }
  .zg{
    width: 100%;
    box-sizing: border-box;
    height: 10px;
  }
  .el-radio-oneway{

    display: block;
    /* border: 1px solid red; */
    width: 40%;
    margin-left: 25%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .el-radio-oneway::after{
    content: '携带儿童(2-12岁)';
    color:#645667 ;
    font-size: 6px;
  }
  .el-button-oneway{
    background-color: #ff9d00;
    border: none;
    width: 60%;
    display: block;
    margin: 0 auto;
  }

  .el-button-oneway:hover{
    background-color: #ff9d00;
  }
  .el-button-oneway:focus{
    background-color: #ff9d00;
  }


</style>


