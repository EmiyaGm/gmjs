#使用说明
##第一步：环境配置
下载 crossdomain.xml 文件，然后把 crossdomain.xml 文件放到保存图片的服务器上根目录下，例如您的保存图片的服务器地址为: http://www.example.com，那么 crossdomain.xml 的路径为：http://www.example.com/crossdomain.xml 。
部署 crossdomain.xml 的目的是授权来自美图秀秀的flash向您的站点上传图片。
【备注】由于本地测试会被flash安全沙箱拦住，请自行搭建web服务器，在web 环境中测试。

##第二步：引入js
把以下JS代码放到<head>与</head>之间
```html
<script src="http://open.web.meitu.com/sources/xiuxiu.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload=function(){
  /*第1个参数是加载编辑器div容器，第2个参数是编辑器类型，第3个参数是div容器宽，第4个参数是div容器高*/
  xiuxiu.embedSWF("altContent",1,"100%","100%");
  //修改为您自己的图片上传接口
  xiuxiu.setUploadURL("http://web.upload.meitu.com/image_upload.php");
  xiuxiu.setUploadType(2);
  xiuxiu.setUploadDataFieldName("upload_file");
  xiuxiu.onInit = function ()
  {
    xiuxiu.loadPhoto("http://open.web.meitu.com/sources/images/1.jpg");//修改为要处理的图片url
  }
  xiuxiu.onUploadResponse = function (data)
  {
    //alert("上传响应" + data); 可以开启调试
  }
}
</script>
```

###备注
setUploadURL("") 参数为接收图片文件。php示例可参考 流式上传 或者 标准表单上传；C#示例可参考 流式上传 或者 标准表单上传；JSP示例可参考 流式上传 或者 标准表单上传