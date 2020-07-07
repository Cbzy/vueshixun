
<template>
  <div class="login">
		<section class="loginFrame">
			<div class="account">
				<div class="account_left">
					<nav>
						<p class="qrcode" :class="{on:MouseOn===0}" @click="MouseOnChange(0)">扫码登录</p>
						<p class="pwd" :class="{on:MouseOn===1}" @click="MouseOnChange(1)">密码登录</p>
					</nav>
					<div class="qrcode_tip" v-if="MouseOn===0">
						<p>
							打开
							<a href="#" target="_blank">马蜂窝APP</a>
							-V9.3.38及以上版本扫描二维码，<br>免输入，更快更安全。
						</p>
						<div class="qrcode_photo">
							<img src="https://b1-q.mafengwo.net/s16/M00/DB/9B/CoUBUl8DB2GAInbNAAAEA57Ywto235.png?imageMogr2%2Fthumbnail%2F%21150x150r%2Fquality%2F90" alt="" v-on:mousemove="mouseMove" v-on:mouseout="mouseOut">
							<div class="scan" v-if="scan">
								<img src="../../assets/Login/img_explain.png" alt="">
							</div>
						</div>
					</div>
					<div class="form-field" v-else>
						<div class="login-err" v-if="loginErr">账号密码错误，请重试或找回密码</div>
						<div class="login-err2" v-if="loginErr2">{{Err2Text}}</div>
						<!-- <form action="#" method="post"> -->
							<input type="text" class="tp" placeholder="您的邮箱/手机号" v-model="username">
							<input type="password" class="tp" placeholder="您的密码" v-model="pwd">
							<p><a href="#">忘记密码</a></p>
							<input type="submit" class="sub" value="登陆" @click="lookNull" />
						<!-- </form> -->
					</div>
					<div class="connect">
					    <p>用合作网站账户直接登录</p>
					    <div class="bd">
					        <a href="#" class="weibo"></a>
					        <a href="#" class="qq"></a>
					        <a href="#" class="weixin"></a>
					    </div>
					</div>
				</div>
				<div class="account_right">
					<a href="/home"></a>
					<!-- <router-link to="/home" @click="appShow"></router-link> -->
				</div>
			</div>
			<div class="bottom-link">
				还没有帐号?
				<a href="/register">马上注册</a>
			</div>
		</section>
		<div class="photoby">
			<
			<a href="#">第二个夏天——带着闺蜜去旅行..</a>
			>
			by
			<a href="#">小A</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
	  return{
		  MouseOn: 0,
		  scan: false,
		  loginErr: false,
		  loginErr2: false,
		  Err2Text: '',
		  username: '',
		  pwd:'',
	  }
  },
  methods:{
	  MouseOnChange(index){
	  	this.MouseOn = index;
	  },
	  lookNull(){
		  if(this.username == ''){
			  this.Err2Text = '帐号不能为空';
		  }else{
			  this.Err2Text = '密码不能为空';
		}
	  },
	  mouseMove(){
		  this.scan = true;
	  },
	  mouseOut(){
		  this.scan = false;
	  }
  }
}
</script>

<style>
	@import url("../../css/Login.css");
</style>
