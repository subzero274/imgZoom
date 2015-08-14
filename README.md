# imgZoom
###可带背景颜色的图片放大插件
* 实例地址：http://www.byfan.cn/m/shirt/detail.html?act_id=241
* 调用方法
```javascript
var showImg = new zoom({
      "id": ".showImg",
      "appendId": ".zoomAll",
      "appendBg": "#fff",
      "multiple": 2,
      "showWidth": 470,
      "background": "rgba(255,255,255,0.5)",
  });
```
##参数说明
* id:要放大的图片
* appendId：图片放大的展示容器
* appendBg：图片放大展示需要带的背景颜色
* multiple：放大倍数
* showWidth:展示容器的宽度
* background：图片细节选择框的颜色
