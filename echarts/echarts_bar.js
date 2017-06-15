/**
 * Created by gm on 17/2/10.
 */

(function ($) {
    $.initEchartsBarX = function (arg) {
        var seriesInfo =new Array();
        if(arg.textName==undefined){
            arg.textName = '';
        }
        if(arg.textOne==undefined){
            arg.textOne = '';
        }
        if(arg.textTwo==undefined){
            arg.textTwo = '';
        }
        if(arg.nameArray !=undefined && arg.nameArray.length>0){
            $.each(arg.nameArray, function(i,o) {
                var seriesItem={
                    name:arg.nameArray[i],
                    type:'bar',
                    data:arg.dataArray[i],
                    label: {
                        normal: {
                            show: false,
                            position: 'top'
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:arg.colorArray[i]
                        }
                    }
                };
                seriesInfo.push(seriesItem);
            });
        }

        if(arg.xPosition==undefined){
            arg.xPosition = 'bottom';
        }

        var option={
            title:{
                text: arg.titleText,
                x:'left',
                subtext: arg.subTitleText,
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
                data:arg.legendArray,
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
                data : arg.xArray,
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
                position: arg.xPosition,
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
                                text: arg.textName+'   ',
                                font: '12px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            z: 100,
                            left: 'middle',
                            style: {
                                fill: '#333',
                                text: arg.textOne,
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
                                text: '       '+arg.textTwo,
                                font: '12px Microsoft YaHei',
                                stroke: '#74c296'
                            }
                        }
                    ]
                }
            ],
            series:seriesInfo
        };

        this.drawMap = function () {
            var myChart = echarts.init(document.getElementById(arg.containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
            // option = getOptionByArray(json, reportDesign);//得到option图形
            myChart.setOption(option); //显示图形

        };
    };

    $.initEchartsBarY = function (arg) {
        var seriesInfo =new Array();
        if(arg.nameArray !=undefined && arg.nameArray.length>0){
            $.each(arg.nameArray, function(i,o) {
                var seriesItem={
                    name:arg.nameArray[i],
                    type:'bar',
                    data:arg.dataArray[i],
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
                            color:arg.colorArray[i]
                        }
                    }
                };
                seriesInfo.push(seriesItem);
            });
        }
        if(arg.xPosition==undefined){
            arg.xPosition = 'bottom';
        }

        var option={
            title:{
                text: arg.titleText,
                x:'left',
                subtext: arg.subTitleText,
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
                data:arg.legendArray,
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
                position:arg.xPosition,
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
                data : arg.yArray ,
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
                                text: arg.textName+'   ',
                                font: '12px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            z: 100,
                            left: 'middle',
                            style: {
                                fill: '#333',
                                text: arg.textOne,
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
                                text: '       '+arg.textTwo,
                                font: '12px Microsoft YaHei',
                                stroke: '#74c296'
                            }
                        }
                    ]
                }
            ],
            series:seriesInfo
        };

        this.drawMap = function () {
            var myChart = echarts.init(document.getElementById(arg.containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
            // option = getOptionByArray(json, reportDesign);//得到option图形
            myChart.setOption(option); //显示图形
        };
    };

})(jQuery);