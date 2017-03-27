/**
 * Created by gongmin on 17/3/27.
 */
function initEchartsMap(containerId,titleText,subTitleText,dataArray,nameArray,maxNumber,minNumber) {
    var seriesInfo =new Array();
    var dataAll = 0;
    if(nameArray !=undefined && nameArray.length>0){
        $.each(nameArray, function(i,o) {
            var seriesItem = {
                name: nameArray[i],
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: dataArray[i]
            };
            seriesInfo.push(seriesItem);
            console.log(dataArray[i]);
            $.each(dataArray[i],function (i , o) {
               dataAll = dataAll + o.value;
            });

        });
    }
    var option={
        title: {
            text: titleText,
            subtext: subTitleText,
            left: 'left'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top:'bottom',
            data:nameArray
        },
        tooltip: {
            trigger: 'item',
            formatter: nameArray[0]+' <br/>{b}: {c}'
        },
        visualMap: {
            min: minNumber,
            max: maxNumber,
            left: 'left',
            top: 50,
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        graphic: [
            {
                type: 'text',
                z: 100,
                top: 'bottom',
                left:'middle',
                style: {
                    fill: '#333',
                    text: '全国'+nameArray[0]+" "+dataAll,
                    font: '12px Microsoft YaHei'
                }
            }
        ],
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