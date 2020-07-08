<template>
    <div class="oneway_div">
      <span class="s1">{{i1}}</span><el-input v-model="in1" placeholder="中文/拼音/简拼" class="inp1"></el-input>
      <div class="zg"></div>
      <span class="s1">{{i2}}</span><el-input v-model="in2" placeholder="中文/拼音/简拼" class="inp1"></el-input>
      <div class="zg"></div>
      <span class="s1">{{i3}}</span>
      <el-date-picker v-model="value1" type="date"   class="inp1">{{value1}}</el-date-picker>
      <div class="zg"></div>
      <span class="s1">{{i4}}</span><el-date-picker v-model="value2" type="date" placeholder="yyyy-mm-dd" class="inp1"></el-date-picker>
      <el-radio v-model="radio" label=""  class="el-radio-oneway"></el-radio>
      <el-button type="primary" icon="el-icon-search" class="el-button-oneway">搜索</el-button>
    </div>
</template>
<script>
export default {
    name: 'Twoway',

    data() {
      return {
        radio:'1',
        i1:'出发城市',
        i2:'到达城市',
        i3:'出发日期',
        i4:'返回日期',
        value1: '2020-07-12',
        value2: '',


      }
    }
}
</script>

<style>

</style>
