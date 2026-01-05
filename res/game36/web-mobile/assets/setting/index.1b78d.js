System.register("chunks:///setting.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js","./GameTypeDefine-222143b3.js"],(function(){var e,t,i,n,c,s,o,l,u,h,r,a,C,d;return{setters:[function(i){e=i._,t=i.i},function(e){i=e.cclegacy},function(e){n=e.s,c=e.a,s=e.u,o=e.j,l=e.k,u=e.w,h=e.n,r=e.e,a=e.v,C=e.t},function(e){d=e.E}],execute:function(){var p;i._RF.push({},"52af3yS6apPi5dNpKPnKLiB","SettingUI",void 0);n("SettingUI")(p=function(i){function n(){for(var e,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(e=i.call.apply(i,[this].concat(n))||this).layerType=r.Panel,e.blockOnceAdType=a.Show,e.cSwitchChildrenCC_music=null,e.cSwitchChildrenCC_sound=null,e.cSwitchChildrenCC_btn=null,e.cBtns=null,e.cAUser=null,e.cADec=null,e}e(n,i);var C=n.prototype;return C.onCreate=function(){switch(c.type){case o.wx:this.bottomAdType=s.Native;break;default:this.bottomAdType=s.Banner}},C.onOpen=function(){this.updateView(),t.openPrivacy?(this.cAUser.active=!0,this.cADec.active=!0):(this.cAUser.active=!1,this.cADec.active=!1),l.isRun?this.cSwitchChildrenCC_btn.index=0:this.cSwitchChildrenCC_btn.index=1,this.cSwitchChildrenCC_btn.node.active=l.type!=d.index},C.onClickReset=function(){if(l.hasRun()&&(this.closeUI(),l.reset(),c.type==o.tt)){var e=window.tt,t="首页";switch(l.type){case d.level:t="关卡";break;case d.today:t="挑战";break;case d.shape:t="彩虹";break;case d.custom:t="自定义";break;case d.customEditor:t="编辑器"}e.reportAnalytics("enterMode",{mode:t})}},C.onClickExit=function(){this.closeUI(),l.settingExit()},C.onClickAUser=function(){u.openUserUI()},C.onClickADec=function(){u.openDecUI()},C.onClickSwitchChildrenCC_music=function(){1==h.getVolume(!0)?h.setVolume(!0,0):h.setVolume(!0,1),this.updateView()},C.onClickSwitchChildrenCC_sound=function(){1==h.getVolume(!1)?h.setVolume(!1,0):h.setVolume(!1,1),this.updateView()},C.updateView=function(){1==h.getVolume(!0)?this.cSwitchChildrenCC_music.index=0:this.cSwitchChildrenCC_music.index=1,1==h.getVolume(!1)?this.cSwitchChildrenCC_sound.index=0:this.cSwitchChildrenCC_sound.index=1},n}(C));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/setting', 'chunks:///setting.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});