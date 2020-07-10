
<template>
  <div class="login">
		<section class="signup-forms" v-if="windowShow">
			<div class="account">
				<div class="account_left" :class="{flex:rlShow===false}">
					<div class="LoginFrame" v-if="rlShow">
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
							<div class="login-err" v-if="loginErr">{{ErrText}}</div>
							<div class="login-err2" v-if="loginErr2">{{Err2Text}}</div>
							<!-- <form action="#" method="post"> -->
								<input type="text" class="tp" placeholder="您的手机号" v-model="username">
								<input type="password" class="tp" placeholder="您的密码" v-model="pwd">
								<p><a href="#">忘记密码</a></p>
								<input type="submit" class="sub" value="登陆" @click="Login" />
							<!-- </form> -->
						</div>
					</div>
					<div class="RegisterFrame" v-else>
						<div class="form-field">
							<div class="login-err2" v-if="loginErr2">{{Err2Text}}</div>
							<input type="text" class="tp" placeholder="您的手机号码" v-model="phone">
							<input type="submit" class="sub" value="立即注册" @click="phoneIsNull" />
							<p>注册视为同意<a href="#">《马蜂窝用户使用协议》</a></p>
						</div>

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
					<a href="/"></a>
					<!-- <router-link to="/home" @click="appShow"></router-link> -->
				</div>
			</div>
			<div class="bottom-link" v-if="rlShow">
				还没有帐号?
				<a href="javaScripts:;" @click="rlShowChange">马上注册</a>
			</div>
			<div class="bottom-link" v-else>
				已经注册?
				<a href="javaScripts:;"  @click="rlShowChange">马上登录</a>
			</div>
		</section>
		<section class="RegisterWindow" v-else>
			<div ></div>
			<div class="signup-box">
				<div class="add-info">
					<div class="hd">账号注册</div>
					<div class="form-field">
						<div class="login-err2" v-if="loginErr2">{{Err2Text}}</div>
						<input type="text" class="tp name" placeholder="您的名号" v-model="name">
						<input type="password" class="tp" placeholder="您的密码" v-model="regPwd">
						<input type="password" class="tp" placeholder="确认密码" v-model="regPwd2">
						<div class="random">
							<button @click="createdCode">免费获取验证码</button>
							<input type="text" class="tp" placeholder="短信验证码" v-model="card">
						</div>
						<input type="submit" class="sub" value="立即注册" @click="Register" />
					</div>

				</div>
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
		  windowShow: true,
		  ErrText: '',
		  Err2Text: '',
		  // 登陆数据
		  username: '',
		  pwd:'',
      // 注册数据
		  phone:'',
		  name:'',
		  regPwd:'',
		  regPwd2:'',
		  card:'',

		  rlShow: this.msg,

		  pcode:'',
		  letter:['1','2','3','4','5','6','7','8','9','0'],
	  }
  },
  props:{
      msg: Boolean
	},
  methods:{
	  makeCode(){
	  	let pcode = [];
	  	for(let i = 0;i<6;i++){
	  		pcode[i] = this.letter[Math.ceil(Math.random()*10)];
	  	}
	  	return pcode.join('');
	  },
	  createdCode(){
	  	this.pcode = this.makeCode();
		alert("您的短信验证码"+this.pcode);
		console.log(this.pcode);
	  },
	  MouseOnChange(index){
	  	this.MouseOn = index;
	  },
	  Login(){
      // 登陆时需用注册手机号码登陆
		if(this.username == ''|this.username == null){
			this.loginErr2 = true;
			this.Err2Text = '帐号不能为空';
		}else{
			if(this.pwd == ''|this.pwd == null){
				this.loginErr2 = true;
				this.Err2Text = '密码不能为空';
			}else{
				let sql_name = localStorage.getItem('1'+this.phone);
				let sql_pwd = localStorage.getItem('0'+this.phone);
				if(this.username != sql_name){
          			this.loginErr2 = true;
					this.Err2Text = "请先注册";
					this.rlShow = false;
				}else{
					if(this.phone == sql_name && this.pwd == sql_pwd){
						this.$emit("getData", false);
						localStorage.setItem('login',this.name);
					}else{
						this.username = '';
						this.pwd = '';
						this.loginErr = true;
						this.ErrText = '账号密码错误，请重试或找回密码';
					}
				}
			}
		}
	  },
	  phoneIsNull(){
		  if(this.phone == ''|this.phone == null){
		  	this.loginErr2 = true;
		  	this.Err2Text = '手机号码不能为空';
		  }else{
			if(this.phone.length!=11){
				this.loginErr2 = true;
				this.Err2Text = '手机号码格式不正确';
			}else{
				const sql_name = localStorage.getItem('1'+this.phone);
				if(sql_name != null){
          this.ErrText = '您已注册,请登录';
          this.loginErr = true;
          this.loginErr2 = false;
          this.rlShow = true;
				}else{
					this.windowShow = false;
				}
			}
		  }
	  },
	  Register(){
		  if(this.name == ''|this.name == null){
		  	this.loginErr2 = true;
		  	this.Err2Text = '名号不能为空	';
		  }else{
		  	if(this.regPwd == ''|this.regPwd == null){
		  		this.loginErr2 = true;
		  		this.Err2Text = '密码不能为空';
		  	}else{
		  		if(this.regPwd2 == ''|this.regPwd2 == null){
		  			this.loginErr2 = true;
		  			this.Err2Text = '确认密码不能为空';
		  		}else{
		  			if(this.card == ''|this.card == null){
		  				this.loginErr2 = true;
		  				this.Err2Text = '短信验证码不能为空';
		  			}else{
		  				if(this.card != this.pcode){
		  					this.loginErr2 = true;
		  					this.Err2Text = '短信验证码错误';
		  				}else{
		  					const sql_name = localStorage.getItem('1'+this.phone);
							localStorage.setItem('1'+this.phone,this.phone);
							localStorage.setItem('0'+this.phone,this.regPwd);
							this.loginErr = true;
							this.ErrText = '注册成功，请登录';
							this.loginErr2 = false;
							this.windowShow = true;
							this.rlShow = true;
		  				}
		  			}
		  		}
		  	}
		  }
	  },
	  mouseMove(){
		  this.scan = true;
	  },
	  mouseOut(){
		  this.scan = false;
	  },
	  rlShowChange(){
		  this.rlShow = !this.rlShow;
	  },
	  register(){
		  this.windowShow = false;
	  },

  },
  created() {
  	if(this.rlShow==null){
		this.rlShow=true;
	}
  },
  watch:{

  },
}
</script>

<style>
	@import url("../../css/Login.css");
</style>
