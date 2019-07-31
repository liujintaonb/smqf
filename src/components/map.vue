<template>
    <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
   <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
    <div id="allmap" style="width:100%;height:100%">66</div>
</template>
<script>
export default {
    mounted(){
     this.ready()
    },
    methods:{
         ready: function() {

	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	 
        map.setCurrentCity("北京");
        map.enableScrollWheelZoom(true);          
var local = new BMap.LocalSearch(map, {      
      renderOptions:{map: map}      
});      
local.search("北京市海淀区中关村东路一号院五号楼文津国际公寓1511");
         }
    }
    
}
</script>



