# echarts插件使用说明v1.0.1
###提醒：本插件是对于百度echarts插件的二次js封装
##依赖js文件
jquery-3.1.1.min.js
echarts.min.js
##插件js文件说明
###echarts_line.js
用于绘制折线图
####使用说明
调用方法

```
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script type="text/javascript" src="js/echarts_line.js"></script>
initEchartsLine(containerId,titleText, subTitleText,legendArray,xArray,yName,dataArray,nameArray,colorArray)
```
####参数说明

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| containerID | String | 绘制区域div ID |
| titleText | String | 图表标题 |
| subTitleText | String | 图表副标题 |
| legendArray | String[] | 图例名称 |
| xArray | String[] | x轴数据 |
| dataArray | int[] | 数据内容数组 |
| nameArray | String[] | 数据内容名称 |
| colorArray | String[] | 数据内容对应线条颜色代码数组 |
| textName | String | 标题下方数据显示名称 |
| textOne | String | 标题下方显示数据一 |
| textTwo | String | 标题下方显示数据二 |
####使用例子
```
<div id="line" style="width: 100%;height:400px;margin-top:50px;"></div>
<script type="text/javascript">
       var arr = [[120, 132, 101, 134, 90, 230, 210],[220, 182, 191, 234, 290, 330, 310]];
       var containerId='line';
       var titleText='页面浏览量趋势';
       var date = new Date();
       var subTitleText= date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate(); //标题
       var legendArray=['上一周期','当前周期'];
       var xArray=['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'];
       var yName='页面浏览量';
       var dataArray=[arr[0],arr[1]];
       var nameArray=['上一周期','当前周期'];
       var colorArray=["#d9d1bd","#74c296"];
       initEchartsLine(containerId,titleText, subTitleText,legendArray,xArray,yName,dataArray,nameArray,colorArray);
</script>
```

####效果图
![屏幕快照 2017-02-14 上午11.36.15](http://olaumzn8v.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-14%20%E4%B8%8A%E5%8D%8811.36.15.png)


###echarts_bar.js
用于绘制柱状图
####使用说明
调用方法

```
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script type="text/javascript" src="js/echarts_bar.js"></script>
initEchartsBarX(containerId,titleText, subTitleText,legendArray,xArray,yName,colorArray,dataArray,nameArray,xPosition)
//纵向

initEchartsBarY(containerId,titleText, subTitleText,legendArray,xName,yArray,colorArray,dataArray,nameArray,xPosition)
//横向
```
####参数说明

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| containerID | String | 绘制区域div ID |
| titleText | String | 图表标题 |
| subTitleText | String | 图表副标题 |
| legendArray | String[] | 图例名称 |
| xArray | String[] | x轴数据（纵向） |
| yArray | String[] | y轴数据（横向） |
| xName | String | x轴名称（横向） |
| dataArray | int[] | 数据内容数组 |
| nameArray | String[] | 数据内容名称 |
| colorArray | String[] | 数据内容对应线条颜色代码数组 |
| xPosition | String | 'top'/'bottom'x轴位置（上方/下方）|
| textName | String | 标题下方数据显示名称（纵向） |
| textOne | String | 标题下方显示数据一（纵向）|
| textTwo | String | 标题下方显示数据二（纵向） |
按顺序传入

####使用例子
```
<div id="bar" style="width: 100%;height:400px;margin-top:50px;"></div>
        <script type="text/javascript">
            var containerId='bar';
            var titleText='新用户访问趋势';
            var date = new Date();
            var subTitleText= date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            var legendArray=['新用户访问量'];
            var xArray=['0:00', '6:00', '12:00', '18:00'];
            var yName='新用户访问量';
            var dataArray=[[2,3,4,5]];
            var nameArray=['新用户访问量'];
            var colorArray = ["#60a5b8"];
            var xPosition = 'bottom';
            initEchartsBarX(containerId,titleText, subTitleText,legendArray,xArray,yName,colorArray,dataArray,nameArray,xPosition);
        </script>
        
        <div id="down_bar" style="width: 100%;height:400px;margin-top:50px;"></div>
        <script type="text/javascript">
            var containerId='down_bar';
            var titleText='新用户访问趋势';
            var date = new Date();
            var subTitleText= date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            var legendArray=['新用户访问量'];
            var yArray=['0:00', '6:00', '12:00', '18:00'];
            var xName='新用户访问量';
            var dataArray=[[2,3,4,5]];
            var nameArray=['新用户访问量'];
            var colorArray = ["#60a5b8"];
            var xPosition = 'top';
            initEchartsBarY(containerId,titleText, subTitleText,legendArray,xName,yArray,colorArray,dataArray,nameArray,xPosition);
        </script>
```

####效果图
![屏幕快照 2017-02-14 上午11.36.20](http://olaumzn8v.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-14%20%E4%B8%8A%E5%8D%8811.36.20.png)
![屏幕快照 2017-02-14 上午11.36.25](http://olaumzn8v.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-14%20%E4%B8%8A%E5%8D%8811.36.25.png)


###echarts_pie.js
用于绘制饼图图
####使用说明
调用方法

```
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script type="text/javascript" src="js/echarts_pie.js"></script>
initEchartsPie(containerId,titleText,subTitleText,legendArray,dataArray,nameArray,colorArray)
```
####参数说明

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| containerID | String | 绘制区域div ID |
| titleText | String | 图表标题 |
| subTitleText | String | 图表副标题 |
| legendArray | String[] | 图例名称 |
| dataArray | int[] | 数据内容数组 |
| nameArray | String[] | 数据内容名称 |
| colorArray | String[] | 数据内容对应线条颜色代码数组 |
按顺序传入

####使用例子
```
<div id="pie" style="width: 100%;height:400px;margin-top:50px;"></div>
        <script type="text/javascript">
            var containerId='pie';
            var titleText='访问用户访问来源';
            var legendArray=['直接访问'];
            var dataArray=[{value:335, name:'直接访问'}];
            var nameArray=['访问来源'];
            var subTitleText= date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            var colorArray = ['#60a5b8'];
            initEchartsPie(containerId,titleText,subTitleText,legendArray,dataArray,nameArray,colorArray);
        </script>
```

####效果图
![屏幕快照 2017-02-13 下午2.44.53](http://olaumzn8v.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-02-13%20%E4%B8%8B%E5%8D%882.44.53.png)





