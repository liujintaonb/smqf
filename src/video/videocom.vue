   <template>
   <div class="videocom-box" v-show="isClosed" @click="closed">
   <div class="videocom-box-mask-box-mask"></div>
   <div class="closeX" @click="closed">X</div>
       <div style=" z-index:999; width: 50%; 
     position: fixed; 
     top: 50%; 
     left: 50%; 
     height: 50%; 
     margin-left: -25%; 
     margin-top: -12.5%;"> 
     <video id="videoMp4" controls="controls" style="width:100%;height:100%" src="../../mp4/smqf.mp4"></video> 
    </div>
    </div>
    </template>
    <script>
export default {
  name: 'videocom',
  // props:{
  //   parObj:Array
  // },
    props:['parObj'],
  data () {
    return {
      isClosed:false,
       url:""
    }
  },

  methods: {
    closed(){
    this.isClosed=false
    document.getElementById("videoMp4").pause();
    // myVideo.play();
    },
   showed(){
     this.isClosed=true
   }
  },

  mounted(){

}
    }
    </script>
<style scoped lang="less">
.videocom-box{
  .closeX{
    color: white;
    position: fixed;
    font-size: 0.5rem;
    z-index: 1000;
    right: 0;
    top: 5%;
    right: 4%;
  }
      .videocom-box-mask-box-mask {
        z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background:rgb(15, 15, 15);
    opacity:0.8;
  }
}
  </style>