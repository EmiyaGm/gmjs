/**
 * Created by gm on 17/2/10.
 */


function initEchartsLine(containerId,titleText,subTitleText,legendArray,xArray,dataArray,nameArray,colorArray,textName,textOne,textTwo,xInterval) {

    var seriesInfo =new Array();
    if(textName==undefined){
        textName = '';
    }
    if(textOne==undefined){
        textOne = '';
    }
    if(textTwo==undefined){
        textTwo = '';
    }
    if(nameArray !=undefined && nameArray.length>0){
        $.each(nameArray, function(i,o) {
            var seriesItem={
                name:nameArray[i],
                type:'line',
                data:dataArray[i],
                lineStyle:{
                    normal:{
                        color:colorArray[i]
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle:{
                    normal:{
                        label : {show: false}
                    },
                    emphasis:{
                        color: colorArray[i],
                        opacity: 0.3
                    }
                },
                symbol:'circle',
                symbolSize:'15',
                showSymbol:false
            };
            seriesInfo.push(seriesItem);
        });
    }

    var option={
        title:{
            text: titleText,
            textStyle:{
                fontFamily: 'Microsoft YaHei',
                fontSize:14
            },
            subtextStyle:{
                fontFamily: 'Microsoft YaHei',
                fontSize:12
            },
            subtext:subTitleText,
            top:10
        },
        tooltip:{trigger: 'axis'},
        legend: {
            data:legendArray,
            icon:'square',
            left:'1%',
            bottom:'1%',
            textStyle:{
                fontFamily: '黑体',
                fontWeight: 'bold',
                fontSize:14
            }
        },
        color:colorArray,
        xAxis:[{
            type : 'category',
            data : xArray,
            boundaryGap : false,
            boundaryGap: ['10%', '10%'],
            axisTick : {
                show : false
            },
            axisLine:{
                lineStyle:{
                    color:'#DAE2E5'
                }
            },
            axisLabel:{
                interval : xInterval,
                textStyle:{
                    color:'#999999'
                }
            }
        }],
        yAxis : [{
            type : 'value',
            axisLine:{
                show:false,
                lineStyle:{
                    color:'#DAE2E5'
                }
            },
            axisTick : {
                show : false
            },
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            },
            axisLabel:{
                textStyle:{
                    color:'#999999'
                }
            }
        }],
        grid: {
            left: '2%',
            right: '2%',
            bottom:'10%',
            top:'30%',
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
        backgroundColor:'#ffffff',
        graphic: [
            {
                type: 'group',
                z: 100,
                right: 10,
                top: 40,
                children:[
                    {
                        type: 'text',
                        z: 100,
                        top: 'bottom',
                        left:'right',
                        style: {
                            fill: '#333',
                            text: textName+'   ',
                            font: '12px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        z: 100,
                        left: 'middle',
                        style: {
                            fill: '#333',
                            text: textOne,
                            font: '24px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        z: 100,
                        left: 'left',
                        top: 'bottom',
                        style: {
                            fill: '#333',
                            text: '       '+textTwo,
                            font: '12px Microsoft YaHei',
                            stroke: '#74c296'
                        }
                    }
                ]
            }
        ],

        series:seriesInfo
    };

    var myChart = echarts.init(document.getElementById(containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表
    // option = getOptionByArray(json, reportDesign);//得到option图形
    myChart.setOption(option); //显示图形
    /*
     setInterval(function () {
     addData(true);
     myChart.setOption({
     series: [{
     data: data
     }]
     });
     }, 500);
     */
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
        sColorChange.push(0.1);
        return "rgba(" + sColorChange.join(",") + ")";
    }else{
        return sColor;
    }
};