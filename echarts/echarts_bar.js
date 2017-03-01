/**
 * Created by gm on 17/2/10.
 */
function initEchartsBarX(containerId,titleText, subTitleText,legendArray,xArray,colorArray,dataArray,nameArray,xPosition,textName,textOne,textTwo) {
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
                type:'bar',
                data:dataArray[i],
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                itemStyle:{
                    normal:{
                        color:colorArray[i]
                    }
                }
            };
            seriesInfo.push(seriesItem);
        });
    }

    if(xPosition==undefined){
        xPosition = 'bottom';
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
        tooltip:{trigger: 'item',formatter: "{a} <br/>{b} : {c}"},
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
        xAxis:[{
            type : 'category',
            data : xArray,
            axisTick : {
                show : false
            },
            boundaryGap: ['10%', '10%'],
            axisLabel: {
                interval:0,
                textStyle:{
                    color:'#999999'
                }
            },
            position: xPosition,
            axisLine:{
                lineStyle:{
                    color:'#DAE2E5'
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
            axisLabel: {
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
        calculable : true,
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

    var myChart = echarts.init(document.getElementById(containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
    // option = getOptionByArray(json, reportDesign);//得到option图形
    myChart.setOption(option); //显示图形
}
function initEchartsBarY(containerId,titleText, subTitleText,legendArray,xName,yArray,colorArray,dataArray,nameArray,xPosition) {
    var seriesInfo =new Array();
    if(nameArray !=undefined && nameArray.length>0){
        $.each(nameArray, function(i,o) {
            var seriesItem={
                name:nameArray[i],
                type:'bar',
                data:dataArray[i],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#000000',
                            fontWeight:'bold',
                            fontFamily:'Microsoft YaHei'
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        color:colorArray[i]
                    }
                }
            };
            seriesInfo.push(seriesItem);
        });
    }
    if(xPosition==undefined){
        xPosition = 'bottom';
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
        tooltip:{trigger: 'item',formatter: "{a} <br/>{b} : {c}"},
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
        xAxis:[{
            type : 'value',
            position:xPosition,
            nameGap:20,
            axisTick : {
                show : false
            },
            boundaryGap: ['10%', '10%'],
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            },
            axisLabel:{
                textStyle:{
                    color:'#999999'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#DAE2E5'
                }
            }
        }],
        yAxis : [{
            type : 'category',
            data : yArray ,
            axisTick : {
                show : false
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color:'#999999'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#DAE2E5'
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
        calculable : true,
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

    var myChart = echarts.init(document.getElementById(containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
    // option = getOptionByArray(json, reportDesign);//得到option图形
    myChart.setOption(option); //显示图形
}