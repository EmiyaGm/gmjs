/**
 * Created by gm on 16/12/21.
 * http://purplebamboo.github.io/2015/03/16/javascript-component/
 */
var TextCount = (function(){
    //私有方法，外面将访问不到
    var _bind = function(that){
        that.input.on('keyup',function(){
            that.render();
        });
    };

    var _getNum = function(that){
        return that.input.val().length;
    };

    var TextCountFun = function(config){

    };

    TextCountFun.prototype.init = function(config) {
        this.input = $(config.id);
        _bind(this);

        return this;
    };

    TextCountFun.prototype.render = function() {
        var num = _getNum(this);

        if ($('#_input_count').length == 0) {
            this.input.after('<span id="_input_count"></span>');
        }

        $('#_input_count').html(num+'个字');
    };
    //返回构造函数
    return TextCountFun;

})();
