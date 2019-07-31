import ajax from "ajax";

export default {
  name: "login",
  data() {
    return {
      // loginName:"用户名",
      formInline: {
        user: "",
        password: "",
        valcode: "",
        codeUrl: "http://www.smqfedu.cn/smqfedu/user/validateCode"
      },
      ruleInline: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "string", min: 4, message: "密码至少4位", trigger: "blur" }
        ],
        valcode: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      }

      // loginPassword:"密码",
      // valiDateimg:"http://39.105.80.61:8080/first/user/validateCode"
    };
  },
  mounted() {
    // asios({
    //               url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=5',
    //               method: 'get',
    //             responseType: 'json', // 默认的
    //           }).then(function (response) {
    //             console.log("asios")
    //               console.log(response);
    //               console.log(response.data);
    //          }).catch(function (error) {
    //               console.log(error);
    //           })
    this.$Message.success("请登录");
    document.getElementById("login").style.height = window.innerHeight + "px";
    document.documentElement.scrollTop=0;
  },
  methods: {
    changePassword(){
      this.$router.push("changePassword");
    },
    //
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          ajax.post(
            "http://www.smqfedu.cn/smqfedu/user/login",
            {
              username: this.formInline.user,
              password: this.formInline.password,
              valcode: this.formInline.valcode
            },
            res => {
              const data = res.info;
              if (data === "success") {
                this.$Message.success("登陆成功");
                window.localStorage.setItem("userName",this.formInline.user)
                // this.$UserName=this.formInline.user;
                this.$router.push("/");
              } else {
                this.$Message.error(data);
                this.changeCode()
              }
            }
            // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
          );
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    goRegister() {
      this.$router.push("/register");
    },
    //验证码点击事件
    changeCode() {
      this.formInline.codeUrl =
        "http://www.smqfedu.cn/smqfedu/user/validateCode?" + Math.random();
    },
    //登录按钮 v-model 与数据库字段名一致
    startLogin() {
      ajax.post(
        "http://www.smqfedu.cn/smqfedu/user/login",
        {
          username: this.formInline.user,
          password: this.formInline.password,
          valcode: this.formInline.valcode
        },
        res => {
          if (res.info === "success") {
            this.$Message.success("登陆成功");
            this.$router.push("/");
          } else {
            this.$Message.error(res.info);
          }
        }
        // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      );
    }
  }
};
