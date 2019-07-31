

import ajax from 'ajax'
export default {
    name: 'changePassword',
    data () {
      const phone = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入手机号'));
        } else if (!(/^1[345678]\d{9}$/.test(value))) {
            callback(new Error('请输入正确手机号'));
        } else {
            callback();
        }
    };
      return {
        maskLogin:false,
        phoneCode:'获取验证码',
        parUserName:"",
          formInline: {
              user: '',
              password: '',
              phone:'',
              phoneCode:''
          },
          ruleInline: {
              user: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { type: 'string', min:4 , message: '密码至少4位', trigger: 'blur' }
              ],
              phone: [
               { validator: phone, trigger: 'blur' }
            ],
            phoneCode: [
              { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          }
      }
  },
    mounted() {
      document.documentElement.scrollTop=0;
      document.getElementById("changePassword").style.height=window.innerHeight+"px"
    },
      methods: {
        //点击跳转
      goLogin(){
        this.$router.push("/login")
    },
    getPhoneVode(name){
     if(!this.formInline.phone)
       return;
      const elem= document.getElementById("phoneCode").childNodes[2].firstChild.lastChild
      if(this.phoneCode!=="获取验证码")
      return ;
      ajax.post(
        "http://www.smqfedu.cn/smqfedu/user/getphoneval",
        {           
           phone:this.formInline.phone,
        },(res)=>{
          elem.classList.add("not-allowed")
          elem.lastChild.classList.add("not-allowed")
          let num=60
          let c= setInterval(()=>{
            num--;
            if(num===-1){
            clearInterval(c)
            this.phoneCode='获取验证码'
            elem.classList.remove("not-allowed")
            elem.lastChild.classList.remove("not-allowed")
            return
            }
            this.phoneCode="请"+num+"秒后重新发送";
            
          },1000)
          console.log(res);
        }
        // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
    
      
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
            ajax.post(
              "http://www.smqfedu.cn/smqfedu/user/forgetPassword",
              {           
                 username:this.formInline.user,
                 phone:this.formInline.phone,
                 newpassword:this.formInline.password,
                 phonevalcode:this.formInline.phoneCode
              },(res)=>{
                  console.log(res)
                const data=res.info;
                if(data==="success"){
                  this.$Message.success("修改成功");
                  this.$router.push("/login");
                }
                else
                this.$Message.error(data);
              }
              // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            )
          }
      })
  },
  handleReset (name) {
    this.$refs[name].resetFields();
},
  
    //注册按钮 v-model 与数据库字段名一致
    // startRegister(){
     
    // }
}
  }