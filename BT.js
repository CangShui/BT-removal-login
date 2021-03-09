// ==UserScript==
// @icon            https://www.bt.cn/favicon.ico
// @name            BT去登录弹窗
// @namespace       https://github.com/CangShui/BT-removal-login
// @description     手动编辑下面的@match后面的IP地址为你的宝塔面板地址IP即可
// @match           *192.168.1.1*
// @version         0.0.1
// @author          cangshui.net

// ==/UserScript==

var t1 = window.setInterval(delbt,200);

function delbt() {

var idObject = document.getElementById('layui-layer-shade1');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer-shade2');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer-shade3');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer-shade4');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer1');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer2');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer3');
if (idObject != null)
idObject.parentNode.removeChild(idObject);

var idObject = document.getElementById('layui-layer4');
if (idObject != null)
idObject.parentNode.removeChild(idObject);


}