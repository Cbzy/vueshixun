<template >
  <div class="v-com-lpcticket">
    <div class="figure">
      <div class="figure-item">
        <img src="http://b1-q.mafengwo.net/s5/M00/7B/37/wKgB3FIDDByAcTAFAAPaSajnMyk40.jpeg?imageMogr2%2Fthumbnail%2F%21750x563r%2Fgravity%2FCenter%2Fcrop%2F%21750x563%2Fquality%2F90" height="140" width="220">
        <div class="figure-title">
          <span>北京</span> - <span>太原</span><span class="figure-price">￥162</span>
        </div>
      </div>
      <div class="figure-item left">
        <img src="http://b1-q.mafengwo.net/s5/M00/53/D1/wKgB3FGcJuCAFdf1AAM-uEqmHBw07.jpeg?imageMogr2%2Fthumbnail%2F%21750x563r%2Fgravity%2FCenter%2Fcrop%2F%21750x563%2Fquality%2F90" height="140" width="220">
        <div class="figure-title"><span>北京</span> - <span>大连</span><span class="figure-price">￥397</span>
        </div>
      </div>
      <div class="figure-item left">
        <img src="http://n1-q.mafengwo.net/s7/M00/6D/AD/wKgB6lSzVjSAG6w0AAkhK5yG5RM08.jpeg?imageMogr2%2Fthumbnail%2F%21750x563r%2Fgravity%2FCenter%2Fcrop%2F%21750x563%2Fquality%2F90" height="140" width="220">
        <div class="figure-title">
          <span>北京</span> - <span>沈阳</span><span class="figure-price">￥400</span>
        </div>
        </div>
      <div class="figure-item left">
        <img src="http://n1-q.mafengwo.net/s8/M00/7B/EA/wKgBpVW7QnOAeSPvAADFCh-_z1828.jpeg?imageMogr2%2Fthumbnail%2F%21750x563r%2Fgravity%2FCenter%2Fcrop%2F%21750x563%2Fquality%2F90" height="140" width="220">
        <div class="figure-title">
          <span>北京</span> - <span>长春</span><span class="figure-price">￥234</span>
        </div>
      </div>
    </div>

    <div class="place-nav">
        <div class="nav-item checktab">
          上海
        </div>
        <div class="nav-item">
          北京
        </div>
        <div class="nav-item">
          成都
        </div>
        <div class="nav-item">
          广州
        </div>
        <div class="nav-item">
          重庆
        </div>
        <div class="nav-item">
          西安
        </div>
        <div class="nav-item">
          昆明
        </div>
        <div class="nav-item">
          杭州
        </div>
        <div class="nav-item">
          深圳
        </div>
        <div class="nav-item">
          三亚
        </div>
        <div class="nav-item">
          厦门
        </div>
        <div class="nav-item">
          南京
        </div>
    </div>




  </div>

</template>
<script>
export default {
    name: 'Sale',
    data() {
      return {


      }
    }
}
</script>
<style>
  .v-com-lpcticket {
    height: auto;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 20px 19px;
    margin-bottom: 30px;
}

  .v-com-lpcticket .figure {
    width: 100%;
    margin-bottom: 10px;
}
body, div, p {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
}

.v-com-lpcticket .figure .figure-item {
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 140px;
    position: relative;
    overflow: hidden;
}
img {
    border: none;
    vertical-align: middle;
}
.v-com-lpcticket .figure .figure-item .figure-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 30px;
    color: #fff;
    padding: 0 15px;
    font-size: 16px;
    background-color: #000;
    background-color: rgba(0,0,0,.6);
}
.v-com-lpcticket .figure .figure-item .figure-price {
    float: right;
}
.v-com-lpcticket .figure .left {
    margin-left: 8px;
}


.v-com-lpcticket .place-nav .checktab {
    background-color: #ff9d00;
    color: #fff;
}
.v-com-lpcticket .place-nav .nav-item {
    cursor: pointer;
    float: left;
    margin: 0 5px 0 18px;
    padding: 0 10px;
    color: #666;
    position: relative;
}
</style>
