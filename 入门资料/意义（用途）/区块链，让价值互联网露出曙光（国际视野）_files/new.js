 var browser;
 var b_version;
 var version;
 var browserType=0;
 browser=navigator.appName;
 b_version=navigator.appVersion;
 version = parseFloat(b_version);
 if(browser.indexOf("Microsoft Internet Explorer")!=-1||
	browser.indexOf("Microsoft")!=-1)
	browserType = 1;
 else if(browser.indexOf("Netscape")!=-1)
	browserType = 2;
function closeMenu(id){
document.getElementById(id).style.display = "none";
}
function writeErWeiMa(){
var swidth=window.screen.width;
var sheight=window.screen.height;
if(swidth>=1280)
{
var leftNum=90-(swidth-1280)*2/80;
if(swidth>=1920) leftNum=78;
var khdhtml='';
khdhtml+='<div id="wxmenu2" class="fixed2" style="display:block;left:'+leftNum+'%">';
khdhtml+='<div><a href="http://www.people.com.cn/GB/123231/365206/index.html" target="_blank" title="人民日报手机客户端" alt="人民日报手机客户端"><img src="http://paper.people.com.cn/rmrb/tplimg/rmrbkhd.jpg" border="0"></a><a target="_top" href="javascript:closeMenu(\'wxmenu2\');" style="top:-36px;position:relative;float:right;left:-2px;" alt="关闭" title="关闭"><img src="http://paper.people.com.cn/rmrb/tplimg/close.jpg" border="0"/></a></div>';
khdhtml+='<div class="rmrbkhd" style="height:421px;">';
khdhtml+='<div style="height:5px;width:100%;"></div>';
khdhtml+='<div><a href="https://itunes.apple.com/cn/app/ren-min-ri-bao-guan-fang-shou/id625077646?l=en&mt=8" target="_blank" title="ISO下载" alt="ISO下载"><img style="margin-left:6px" src="http://paper.people.com.cn/rmrb/tplimg/rmrbkhdiso.jpg" border="0"/></a></div>';
khdhtml+='<div style="height:5px;width:100%;"></div>';
khdhtml+='<div><a href="http://rmrbdata.people.com.cn/soft/rmrb.apk" target="_blank" title="Android下载" alt="Android下载"><img style="margin-left:6px"src="http://paper.people.com.cn/rmrb/tplimg/rmrbkhdandroid.jpg" border="0"/></a></div>';
khdhtml+='<div style="height:5px;width:100%;"></div>';
khdhtml+='<div><a href="#" target="_top" title="微信扫一扫,使用小程序" alt="微信扫一扫,使用小程序"><img style="margin-left:6px" src="http://paper.people.com.cn/rmrb/tplimg/rmrbweixinxiaochengxu.jpg" border="0"/></a></div>';

khdhtml+='</div>';
khdhtml+='<div>';
khdhtml+='<div class="rmrgsjb">';
khdhtml+='<div style="height:116px;width:100%;"></div>';
khdhtml+='<div style="width:100%;text-align:right;"></div>';
khdhtml+='</div>';
document.write(khdhtml);
}
}
