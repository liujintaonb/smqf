// import map from '../mapTem/mapTem'
import ajax from "ajax"
import testMap from '../components/map'
import smfooter from '../components/smfooter'

export default {
  name: "xialingying",
  components:{testMap,smfooter},
  data() {
    return {
     
    };
  },
  mounted() {
    document.documentElement.scrollTop=0; },
  methods: {
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
