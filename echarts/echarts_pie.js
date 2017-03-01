/**
 * Created by gm on 17/2/10.
 */
function initEchartsPie(containerId,titleText,subTitleText,legendArray,dataArray,nameArray,colorArray) {
    var seriesInfo =new Array();
    /*
     var lightColorArray = new Array();
     for(var i =0;i<colorArray.length;i++){
     lightColorArray[i]= colorArray[i].colorRgb();
     }
     console.log(lightColorArray);
     */
    if(nameArray !=undefined && nameArray.length>0){
        var seriesItem={
            name:nameArray[0],
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position:'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold',
                        color: '#000000',
                        fontFamily:'Microsoft YaHei'
                    },
                    formatter: '{b}\n{d}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:dataArray,
            itemStyle:{
                emphasis:{
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            }
        };
        seriesInfo.push(seriesItem);
    }

    var option={
        title:{
            text: titleText,
            x:'left',
            subtext: subTitleText,
            textStyle:{
                fontFamily: 'Microsoft YaHei',
                fontSize:14
            },
            subtextStyle:{
                fontFamily: 'Microsoft YaHei',
                fontSize:12
            },
            top:10
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:colorArray,
        legend: {
            orient: 'horizontal',
            data:legendArray,
            icon:'square',
            bottom:'1%',
            textStyle:{
                fontFamily: '黑体',
                fontWeight: 'bold',
                fontSize:14
            }
        },
        grid: {
            containLabel: true
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        backgroundColor:'#ffffff',
        series:seriesInfo
    };

    var myChart = echarts.init(document.getElementById(containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
    // option = getOptionByArray(json, reportDesign);//得到option图形
    myChart.setOption(option); //显示图形

}

var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
String.prototype.colorRgb = function(){
    var sColor = this.toLowerCase();
    if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
            var sColorNew = "#";
            for(var i=1; i<4; i+=1){
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for(var i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
        }
        sColorChange.push(0.5);
        return "rgba(" + sColorChange.join(",") + ")";
    }else{
        return sColor;
    }
};