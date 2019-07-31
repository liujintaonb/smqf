// import map from '../mapTem/mapTem'
import ajax from "ajax"
import testMap from '../components/map'
import smfooter from '../components/smfooter'

export default {
  name: "aboutus",
  components:{testMap,smfooter},
  data() {
    return {
      split1:0.5,
      //地图
      formItem: {
        name:"",
        phone:"",
        textarea:"",
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
    },
    ruleInline: {
      name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { type: "string", len:11, message: "手机号11位不能包含非法字符", trigger: "blur" }
      ],
      textarea: [
        { required: true, message: "请留言", trigger: "blur" }
      ]
    }
    };
  },
  mounted() {
    document.documentElement.scrollTop=0; },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          ajax.post(
            "http://www.smqfedu.cn/smqfedu/user/formvalue",
            {
              formname: this.formItem.name,
              formphone: this.formItem.phone,
              formtext: this.formItem.textarea
            },
            res => {
            this.$Message.success("提交成功");
            this.formItem.name="";
            this.formItem.phone="";
            this.formItem.textarea="";
            }
            // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
          );
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    home() {
      this.$router.push("/");
    },
    xialingying(){
      this.$router.push("/xialingying")
    },
    curriculums() {
      this.$router.push("/curriculums");
    },
    elegantdisplay() {
      this.$router.push("/elegantdisplay");
    },
    famousteacher() {
      this.$router.push("/famousteacher");
    }
  }
};
