<template>
  <div class="content">
    <div class="main">
      <div class="SignHeader"></div>
      <div class="Signslogen">
        注册知乎，发现更大的世界
      </div>
      <div class="tel">
        <div class="num">
          <select>
            <option>中国 +86</option>
            <option>美国 +1</option>
            <option>英国 +44</option>
            <option>新加坡 +65</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select></div>
        <div class="telnum"><input type="text" placeholder="手机号"/></div>
      </div>
      <div class="mess">
        <div class="message"><input type="text" placeholder="请输入"/></div>
        <div class="getmess"><a href="#">获取短信验证码</a></div>
      </div>
      <div class="voice">
        <a href="#">接受语音验证码</a>
      </div>
      <button class="register">注册</button>
      <div class="zhuce">
        <div class="xieyi">注册即代表你同意<a href="#">知乎协议</a></div>
        <div class="jigouhao"><a href="#">注册机构号</a></div>
      </div>
      <div class="login">
        <div class="logina">已有账号？<a href="#">登录</a></div>
      </div>
    </div>
    <button class="download">下载知乎APP</button>
    <div class="foot">
      <div class="one">
        <a href="#" target="_blank">知乎专栏·</a>
        <a href="#" target="_blank">圆桌·</a>
        <a href="#" target="_blank">发现·</a>
        <a href="#" target="_blank">移动应用·</a>
        <a href="#" target="_blank">联系我们·</a>
        <a href="#" target="_blank">来知乎工作·</a>
        <a href="#" target="_blank">注册机构号</a>
      </div>
      <div class="two">
        &copy;2018 知乎·
        <a href="#" target="_blank">京 ICP 证 110745 号·</a>
        京公网安备
        11010802010035
        <a href="#" target="_blank">号出版物经营许可证</a>
      </div>
      <div class="three">
        <a href="#" target="_blank">侵权举报·</a>
        <a href="#" target="_blank">网上有害信息举报专区·</a>
        <a href="#" target="_blank">儿童色情信息举报专区·</a>
        违法和不良信息举报：010-82716601
      </div>
      <hr />
      <a href="#"><img src="" alt="#" class=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-Home'
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
}
.getmess a:link,
.getmess a:visited,
.getmess a:active,
.login a:link,
.login a:visited,
.login a:active,
.login a:hover,
.jigouhao a:link,
.jigouhao a:visited,
.jigouhao a:active,
.jigouhao a:hover{
  text-decoration: none;
  color: #175199;
}
.voice a:link,
.voice a:visited,
.voice a:active,
.voice a:hover,
.xieyi a:link,
.xieyi a:visited,
.xieyi a:active,
.xieyi a:hover{
  text-decoration: none;
  color: #8590A6;
}
input {
  border: 0;
  border-bottom: 1px solid #EBEBEB;
  padding: 10px 0 0 0;
}
.main {
  margin: 55px auto 30px auto;
  height: 500px;
  width: 430px;
  border: 1px solid red;
  background-color: white;
  .Signslogen{
    margin: 18px auto 38px auto;
  }
  .tel{
    .num{
      margin: auto 0 auto 33px;
      float: left;
      height: 45px;
      width: 110px;
    }
    .telnum{
      float: right;
      height: 45px;
      width: 245px;
      text-align: left;
      input{
        width: 200px;
      }
    }
  }
  .mess{
    width: 450px;
    height: 60px;
    .message{
      margin: auto 43px;
      border:0 solid #EBEBEB;
      border-bottom: 1px solid #EBEBEB;
      float: left;
      input{
        width: 200px;
      }
    }
    .getmess{
      margin: auto 65px auto auto;
      border: 0 solid #EBEBEB;
      border-bottom: 1px solid #EBEBEB;
      float: right;
      font-size: 14px;
    }
  }
  .voice{
    float: right;
    margin: 30px 45px 30px auto;
    font-size: 14px;
  }
  .register{
    width: 350px;
    height: 40px;
    font-size: 15px;
    background-color: #0077E6;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  .zhuce{
    margin: 30px auto 80px 45px;
    font-size: 14px;
    .xieyi{
      float: left;
      color:#8590A6;
    }
    .jigouhao{
      float: right;
      margin: auto 40px auto auto;
      color:#175199;
    }
  }
  .login{
    height: 56px;
    background-color: #F6F6F6;
    border: 1px solid #ebebeb;
    .logina{
      font-size: 16px;
      font-family: '黑体';
      margin: 20px auto auto auto;
    }
  }
}
.download{
  background-color:#8590A6;
  color:white;
  font-family:"黑体";
  font-size:15px;
  margin: auto;
  width:430px;
  height:40px;
  cursor:pointer;
  border-radius: 5px;
}
</style>
