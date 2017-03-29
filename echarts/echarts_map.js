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

function initEchartsMap2(containerId,titleText,subTitleText,dataArray,nameArray,maxNumber,minNumber) {
    var geoCoordMap = {
        "海门":[121.15,31.89],
        "鄂尔多斯":[109.781327,39.608266],
        "招远":[120.38,37.35],
        "舟山":[122.207216,29.985295],
        "齐齐哈尔":[123.97,47.33],
        "盐城":[120.13,33.38],
        "赤峰":[118.87,42.28],
        "青岛":[120.33,36.07],
        "乳山":[121.52,36.89],
        "金昌":[102.188043,38.520089],
        "泉州":[118.58,24.93],
        "莱西":[120.53,36.86],
        "日照":[119.46,35.42],
        "胶南":[119.97,35.88],
        "南通":[121.05,32.08],
        "拉萨":[91.11,29.97],
        "云浮":[112.02,22.93],
        "梅州":[116.1,24.55],
        "文登":[122.05,37.2],
        "上海":[121.48,31.22],
        "攀枝花":[101.718637,26.582347],
        "威海":[122.1,37.5],
        "承德":[117.93,40.97],
        "厦门":[118.1,24.46],
        "汕尾":[115.375279,22.786211],
        "潮州":[116.63,23.68],
        "丹东":[124.37,40.13],
        "太仓":[121.1,31.45],
        "曲靖":[103.79,25.51],
        "烟台":[121.39,37.52],
        "福州":[119.3,26.08],
        "瓦房店":[121.979603,39.627114],
        "即墨":[120.45,36.38],
        "抚顺":[123.97,41.97],
        "玉溪":[102.52,24.35],
        "张家口":[114.87,40.82],
        "阳泉":[113.57,37.85],
        "莱州":[119.942327,37.177017],
        "湖州":[120.1,30.86],
        "汕头":[116.69,23.39],
        "昆山":[120.95,31.39],
        "宁波":[121.56,29.86],
        "湛江":[110.359377,21.270708],
        "揭阳":[116.35,23.55],
        "荣成":[122.41,37.16],
        "连云港":[119.16,34.59],
        "葫芦岛":[120.836932,40.711052],
        "常熟":[120.74,31.64],
        "东莞":[113.75,23.04],
        "河源":[114.68,23.73],
        "淮安":[119.15,33.5],
        "泰州":[119.9,32.49],
        "南宁":[108.33,22.84],
        "营口":[122.18,40.65],
        "惠州":[114.4,23.09],
        "江阴":[120.26,31.91],
        "蓬莱":[120.75,37.8],
        "韶关":[113.62,24.84],
        "嘉峪关":[98.289152,39.77313],
        "广州":[113.23,23.16],
        "延安":[109.47,36.6],
        "太原":[112.53,37.87],
        "清远":[113.01,23.7],
        "中山":[113.38,22.52],
        "昆明":[102.73,25.04],
        "寿光":[118.73,36.86],
        "盘锦":[122.070714,41.119997],
        "长治":[113.08,36.18],
        "深圳":[114.07,22.62],
        "珠海":[113.52,22.3],
        "宿迁":[118.3,33.96],
        "咸阳":[108.72,34.36],
        "铜川":[109.11,35.09],
        "平度":[119.97,36.77],
        "佛山":[113.11,23.05],
        "海口":[110.35,20.02],
        "江门":[113.06,22.61],
        "章丘":[117.53,36.72],
        "肇庆":[112.44,23.05],
        "大连":[121.62,38.92],
        "临汾":[111.5,36.08],
        "吴江":[120.63,31.16],
        "石嘴山":[106.39,39.04],
        "沈阳":[123.38,41.8],
        "苏州":[120.62,31.32],
        "茂名":[110.88,21.68],
        "嘉兴":[120.76,30.77],
        "长春":[125.35,43.88],
        "胶州":[120.03336,36.264622],
        "银川":[106.27,38.47],
        "张家港":[120.555821,31.875428],
        "三门峡":[111.19,34.76],
        "锦州":[121.15,41.13],
        "南昌":[115.89,28.68],
        "柳州":[109.4,24.33],
        "三亚":[109.511909,18.252847],
        "自贡":[104.778442,29.33903],
        "吉林":[126.57,43.87],
        "阳江":[111.95,21.85],
        "泸州":[105.39,28.91],
        "西宁":[101.74,36.56],
        "宜宾":[104.56,29.77],
        "呼和浩特":[111.65,40.82],
        "成都":[104.06,30.67],
        "大同":[113.3,40.12],
        "镇江":[119.44,32.2],
        "桂林":[110.28,25.29],
        "张家界":[110.479191,29.117096],
        "宜兴":[119.82,31.36],
        "北海":[109.12,21.49],
        "西安":[108.95,34.27],
        "金坛":[119.56,31.74],
        "东营":[118.49,37.46],
        "牡丹江":[129.58,44.6],
        "遵义":[106.9,27.7],
        "绍兴":[120.58,30.01],
        "扬州":[119.42,32.39],
        "常州":[119.95,31.79],
        "潍坊":[119.1,36.62],
        "重庆":[106.54,29.59],
        "台州":[121.420757,28.656386],
        "南京":[118.78,32.04],
        "滨州":[118.03,37.36],
        "贵阳":[106.71,26.57],
        "无锡":[120.29,31.59],
        "本溪":[123.73,41.3],
        "克拉玛依":[84.77,45.59],
        "渭南":[109.5,34.52],
        "马鞍山":[118.48,31.56],
        "宝鸡":[107.15,34.38],
        "焦作":[113.21,35.24],
        "句容":[119.16,31.95],
        "北京":[116.46,39.92],
        "徐州":[117.2,34.26],
        "衡水":[115.72,37.72],
        "包头":[110,40.58],
        "绵阳":[104.73,31.48],
        "乌鲁木齐":[87.68,43.77],
        "枣庄":[117.57,34.86],
        "杭州":[120.19,30.26],
        "淄博":[118.05,36.78],
        "鞍山":[122.85,41.12],
        "溧阳":[119.48,31.43],
        "库尔勒":[86.06,41.68],
        "安阳":[114.35,36.1],
        "开封":[114.35,34.79],
        "济南":[117,36.65],
        "德阳":[104.37,31.13],
        "温州":[120.65,28.01],
        "九江":[115.97,29.71],
        "邯郸":[114.47,36.6],
        "临安":[119.72,30.23],
        "兰州":[103.73,36.03],
        "沧州":[116.83,38.33],
        "临沂":[118.35,35.05],
        "南充":[106.110698,30.837793],
        "天津":[117.2,39.13],
        "富阳":[119.95,30.07],
        "泰安":[117.13,36.18],
        "诸暨":[120.23,29.71],
        "郑州":[113.65,34.76],
        "哈尔滨":[126.63,45.75],
        "聊城":[115.97,36.45],
        "芜湖":[118.38,31.33],
        "唐山":[118.02,39.63],
        "平顶山":[113.29,33.75],
        "邢台":[114.48,37.05],
        "德州":[116.29,37.45],
        "济宁":[116.59,35.38],
        "荆州":[112.239741,30.335165],
        "宜昌":[111.3,30.7],
        "义乌":[120.06,29.32],
        "丽水":[119.92,28.45],
        "洛阳":[112.44,34.7],
        "秦皇岛":[119.57,39.95],
        "株洲":[113.16,27.83],
        "石家庄":[114.48,38.03],
        "莱芜":[117.67,36.19],
        "常德":[111.69,29.05],
        "保定":[115.48,38.85],
        "湘潭":[112.91,27.87],
        "金华":[119.64,29.12],
        "岳阳":[113.09,29.37],
        "长沙":[113,28.21],
        "衢州":[118.88,28.97],
        "廊坊":[116.7,39.53],
        "菏泽":[115.480656,35.23375],
        "合肥":[117.27,31.86],
        "武汉":[114.31,30.52],
        "大庆":[125.03,46.58]
    };

    var data = [
        {name: "海门", value: 9},
        {name: "鄂尔多斯", value: 12},
        {name: "招远", value: 12},
        {name: "舟山", value: 12},
        {name: "齐齐哈尔", value: 14},
        {name: "盐城", value: 15},
        {name: "赤峰", value: 16},
        {name: "青岛", value: 18},
        {name: "乳山", value: 18},
        {name: "金昌", value: 19},
        {name: "泉州", value: 21},
        {name: "莱西", value: 21},
        {name: "日照", value: 21},
        {name: "胶南", value: 22},
        {name: "南通", value: 23},
        {name: "拉萨", value: 24},
        {name: "云浮", value: 24},
        {name: "梅州", value: 25},
        {name: "文登", value: 25},
        {name: "上海", value: 25},
        {name: "攀枝花", value: 25},
        {name: "威海", value: 25},
        {name: "承德", value: 25},
        {name: "厦门", value: 26},
        {name: "汕尾", value: 26},
        {name: "潮州", value: 26},
        {name: "丹东", value: 27},
        {name: "太仓", value: 27},
        {name: "曲靖", value: 27},
        {name: "烟台", value: 28},
        {name: "福州", value: 29},
        {name: "瓦房店", value: 30},
        {name: "即墨", value: 30},
        {name: "抚顺", value: 31},
        {name: "玉溪", value: 31},
        {name: "张家口", value: 31},
        {name: "阳泉", value: 31},
        {name: "莱州", value: 32},
        {name: "湖州", value: 32},
        {name: "汕头", value: 32},
        {name: "昆山", value: 33},
        {name: "宁波", value: 33},
        {name: "湛江", value: 33},
        {name: "揭阳", value: 34},
        {name: "荣成", value: 34},
        {name: "连云港", value: 35},
        {name: "葫芦岛", value: 35},
        {name: "常熟", value: 36},
        {name: "东莞", value: 36},
        {name: "河源", value: 36},
        {name: "淮安", value: 36},
        {name: "泰州", value: 36},
        {name: "南宁", value: 37},
        {name: "营口", value: 37},
        {name: "惠州", value: 37},
        {name: "江阴", value: 37},
        {name: "蓬莱", value: 37},
        {name: "韶关", value: 38},
        {name: "嘉峪关", value: 38},
        {name: "广州", value: 38},
        {name: "延安", value: 38},
        {name: "太原", value: 39},
        {name: "清远", value: 39},
        {name: "中山", value: 39},
        {name: "昆明", value: 39},
        {name: "寿光", value: 40},
        {name: "盘锦", value: 40},
        {name: "长治", value: 41},
        {name: "深圳", value: 41},
        {name: "珠海", value: 42},
        {name: "宿迁", value: 43},
        {name: "咸阳", value: 43},
        {name: "铜川", value: 44},
        {name: "平度", value: 44},
        {name: "佛山", value: 44},
        {name: "海口", value: 44},
        {name: "江门", value: 45},
        {name: "章丘", value: 45},
        {name: "肇庆", value: 46},
        {name: "大连", value: 47},
        {name: "临汾", value: 47},
        {name: "吴江", value: 47},
        {name: "石嘴山", value: 49},
        {name: "沈阳", value: 50},
        {name: "苏州", value: 50},
        {name: "茂名", value: 50},
        {name: "嘉兴", value: 51},
        {name: "长春", value: 51},
        {name: "胶州", value: 52},
        {name: "银川", value: 52},
        {name: "张家港", value: 52},
        {name: "三门峡", value: 53},
        {name: "锦州", value: 54},
        {name: "南昌", value: 54},
        {name: "柳州", value: 54},
        {name: "三亚", value: 54},
        {name: "自贡", value: 56},
        {name: "吉林", value: 56},
        {name: "阳江", value: 57},
        {name: "泸州", value: 57},
        {name: "西宁", value: 57},
        {name: "宜宾", value: 58},
        {name: "呼和浩特", value: 58},
        {name: "成都", value: 58},
        {name: "大同", value: 58},
        {name: "镇江", value: 59},
        {name: "桂林", value: 59},
        {name: "张家界", value: 59},
        {name: "宜兴", value: 59},
        {name: "北海", value: 60},
        {name: "西安", value: 61},
        {name: "金坛", value: 62},
        {name: "东营", value: 62},
        {name: "牡丹江", value: 63},
        {name: "遵义", value: 63},
        {name: "绍兴", value: 63},
        {name: "扬州", value: 64},
        {name: "常州", value: 64},
        {name: "潍坊", value: 65},
        {name: "重庆", value: 66},
        {name: "台州", value: 67},
        {name: "南京", value: 67},
        {name: "滨州", value: 70},
        {name: "贵阳", value: 71},
        {name: "无锡", value: 71},
        {name: "本溪", value: 71},
        {name: "克拉玛依", value: 72},
        {name: "渭南", value: 72},
        {name: "马鞍山", value: 72},
        {name: "宝鸡", value: 72},
        {name: "焦作", value: 75},
        {name: "句容", value: 75},
        {name: "北京", value: 79},
        {name: "徐州", value: 79},
        {name: "衡水", value: 80},
        {name: "包头", value: 80},
        {name: "绵阳", value: 80},
        {name: "乌鲁木齐", value: 84},
        {name: "枣庄", value: 84},
        {name: "杭州", value: 84},
        {name: "淄博", value: 85},
        {name: "鞍山", value: 86},
        {name: "溧阳", value: 86},
        {name: "库尔勒", value: 86},
        {name: "安阳", value: 90},
        {name: "开封", value: 90},
        {name: "济南", value: 92},
        {name: "德阳", value: 93},
        {name: "温州", value: 95},
        {name: "九江", value: 96},
        {name: "邯郸", value: 98},
        {name: "临安", value: 99},
        {name: "兰州", value: 99},
        {name: "沧州", value: 100},
        {name: "临沂", value: 103},
        {name: "南充", value: 104},
        {name: "天津", value: 105},
        {name: "富阳", value: 106},
        {name: "泰安", value: 112},
        {name: "诸暨", value: 112},
        {name: "郑州", value: 113},
        {name: "哈尔滨", value: 114},
        {name: "聊城", value: 116},
        {name: "芜湖", value: 117},
        {name: "唐山", value: 119},
        {name: "平顶山", value: 119},
        {name: "邢台", value: 119},
        {name: "德州", value: 120},
        {name: "济宁", value: 120},
        {name: "荆州", value: 127},
        {name: "宜昌", value: 130},
        {name: "义乌", value: 132},
        {name: "丽水", value: 133},
        {name: "洛阳", value: 134},
        {name: "秦皇岛", value: 136},
        {name: "株洲", value: 143},
        {name: "石家庄", value: 147},
        {name: "莱芜", value: 148},
        {name: "常德", value: 152},
        {name: "保定", value: 153},
        {name: "湘潭", value: 154},
        {name: "金华", value: 157},
        {name: "岳阳", value: 169},
        {name: "长沙", value: 175},
        {name: "衢州", value: 177},
        {name: "廊坊", value: 193},
        {name: "菏泽", value: 194},
        {name: "合肥", value: 229},
        {name: "武汉", value: 273},
        {name: "大庆", value: 279}
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var convertedData = [
        convertData(data),
        convertData(data.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 6))
    ];


    option = {
        backgroundColor: '#404a59',
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        title: [
            {
                text: titleText,
                subtext: subTitleText,
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                id: 'statistic',
                right: 120,
                top: 40,
                width: 100,
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }
        ],
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#fff'
                },
                emphasis: {
                    borderColor: '#b1e4ff'
                }
            }
        },
        brush: {
            outOfBrush: {
                color: '#abc'
            },
            brushStyle: {
                borderWidth: 2,
                color: 'rgba(0,0,0,0.2)',
                borderColor: 'rgba(0,0,0,0.5)',
            },
            seriesIndex: [0, 1],
            throttleType: 'debounce',
            throttleDelay: 300,
            geoIndex: 0
        },
        geo: {
            map: 'china',
            left: '10',
            right: '35%',
            center: [117.98561551896913, 31.205000490896193],
            zoom: 2.5,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        tooltip : {
            trigger: 'item'
        },
        grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: '30%'
        },
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
        },
        yAxis: {
            type: 'category',
            name: 'TOP 20',
            nameGap: 16,
            axisLine: {show: false, lineStyle: {color: '#ddd'}},
            axisTick: {show: false, lineStyle: {color: '#ddd'}},
            axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
            data: []
        },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertedData[0],
                symbolSize: function (val) {
                    return Math.max(val[2] / 10, 8);
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertedData[1],
                symbolSize: function (val) {
                    return Math.max(val[2] / 10, 8);
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            },
            {
                id: 'bar',
                zlevel: 2,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                },
                data: []
            }
        ]
    };



// myChart.setOption(option);

    setTimeout(function () {
        myChart.dispatchAction({
            type: 'brush',
            areas: [
                {
                    geoIndex: 0,
                    brushType: 'polygon',
                    coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77],[118.76,34.63],[118.6,34.6],[118.46,34.6],[118.33,34.57],[118.05,34.56],[117.6,34.56],[117.41,34.56],[117.25,34.56],[117.11,34.56],[117.02,34.56],[117,34.56],[116.94,34.56],[116.94,34.55],[116.9,34.5],[116.88,34.44],[116.88,34.37],[116.88,34.33],[116.88,34.24],[116.92,34.15],[116.98,34.09],[117.05,34.06],[117.19,33.96],[117.29,33.9],[117.43,33.8],[117.49,33.75],[117.54,33.68],[117.6,33.65],[117.62,33.61],[117.64,33.59],[117.68,33.58],[117.7,33.52],[117.74,33.5],[117.74,33.46],[117.8,33.44],[117.82,33.41],[117.86,33.37],[117.9,33.3],[117.9,33.28],[117.9,33.27],[118.09,32.97],[118.21,32.7],[118.29,32.56],[118.31,32.5],[118.35,32.46],[118.35,32.42],[118.35,32.36],[118.35,32.34],[118.37,32.24],[118.37,32.14],[118.37,32.09],[118.44,32.05],[118.46,32.01],[118.54,31.98],[118.6,31.93],[118.68,31.86],[118.72,31.8],[118.74,31.78],[118.76,31.74],[118.78,31.7],[118.82,31.64],[118.82,31.62],[118.86,31.58],[118.86,31.55],[118.88,31.54],[118.88,31.52],[118.9,31.51],[118.91,31.48],[118.93,31.43],[118.95,31.4],[118.97,31.39],[118.97,31.37],[118.97,31.34],[118.97,31.27],[118.97,31.21],[118.97,31.17],[118.97,31.12],[118.97,31.02],[118.97,30.93],[118.97,30.87],[118.97,30.85],[118.95,30.8],[118.95,30.77],[118.95,30.76],[118.93,30.7],[118.91,30.63],[118.91,30.61],[118.91,30.6],[118.9,30.6],[118.88,30.54],[118.88,30.51],[118.86,30.51],[118.86,30.46],[118.72,30.18],[118.68,30.1],[118.66,30.07],[118.62,29.91],[118.56,29.73],[118.52,29.63],[118.48,29.51],[118.44,29.42],[118.44,29.32],[118.43,29.19],[118.43,29.14],[118.43,29.08],[118.44,29.05],[118.46,29.05],[118.6,28.95],[118.64,28.94],[119.07,28.51],[119.25,28.41],[119.36,28.28],[119.46,28.19],[119.54,28.13],[119.66,28.03],[119.78,28],[119.87,27.94],[120.03,27.86],[120.17,27.79],[120.23,27.76],[120.3,27.72],[120.42,27.66],[120.52,27.64],[120.58,27.63],[120.64,27.63],[120.77,27.63],[120.89,27.61],[120.97,27.6],[121.07,27.59],[121.15,27.59],[121.28,27.59],[121.38,27.61],[121.56,27.73],[121.73,27.89],[122.03,28.2],[122.3,28.5],[122.46,28.72],[122.5,28.77],[122.54,28.82],[122.56,28.82],[122.58,28.85],[122.6,28.86],[122.61,28.91],[122.71,29.02],[122.73,29.08],[122.93,29.44],[122.99,29.54],[123.03,29.66],[123.05,29.73],[123.16,29.92],[123.24,30.02],[123.28,30.13],[123.32,30.29],[123.36,30.36],[123.36,30.55],[123.36,30.74],[123.36,31.05],[123.36,31.14],[123.36,31.26],[123.38,31.42],[123.46,31.74],[123.48,31.83],[123.48,31.95],[123.46,32.09],[123.34,32.25],[123.22,32.39],[123.12,32.46],[123.07,32.48],[123.05,32.49],[122.97,32.53],[122.91,32.59],[122.83,32.81],[122.77,32.87],[122.71,32.9],[122.56,32.97],[122.38,33.05],[122.3,33.12],[122.26,33.15],[122.22,33.21],[122.22,33.3],[122.22,33.39],[122.18,33.44],[122.07,33.56],[121.99,33.69],[121.89,33.78],[121.69,34.02],[121.66,34.05],[121.64,34.08]]
                }
            ]
        });
    }, 0);


    function renderBrushed(params) {
        var mainSeries = params.batch[0].selected[0];
        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        var maxBar = 30;
        var sum = 0;
        var count = 0;
        for (var i = 0; i < mainSeries.dataIndex.length; i++) {
            var rawIndex = mainSeries.dataIndex[i];
            var dataItem = convertedData[0][rawIndex];
            var pmValue = dataItem.value[2];
            sum += pmValue;
            count++;
            selectedItems.push(dataItem);
        }

        selectedItems.sort(function (a, b) {
            return a.value[2] - b.value[2];
        });

        for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
            categoryData.push(selectedItems[i].name);
            barData.push(selectedItems[i].value[2]);
        }

        this.setOption({
            yAxis: {
                data: categoryData
            },
            xAxis: {
                axisLabel: {show: !!count}
            },
            title: {
                id: 'statistic',
                text: count ? '平均: ' + (sum / count).toFixed(4) : ''
            },
            series: {
                id: 'bar',
                data: barData
            }
        });
    }

    var myChart = echarts.init(document.getElementById(containerId));// 图表初始化的地方，在页面中要有一个地方来显示图表，他的ID是main
    // option = getOptionByArray(json, reportDesign);//得到option图形
    myChart.setOption(option); //显示图形
    myChart.on('brushselected', renderBrushed);


}

