System.register("chunks:///ttSidebar.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js","./LogicDefine-521e1078.js"],(function(){var t,e,i,n,r,c,a,o,d,s,u,h;return{setters:[function(e){t=e._},function(t){e=t.cclegacy},function(t){i=t.s,n=t.a,r=t.u,c=t.j,a=t._,o=t.d,d=t.e,s=t.v,u=t.t},function(t){h=t.k}],execute:function(){var p;e._RF.push({},"b5261htOrhEAZuHr+x6XZUe","TTSidebarUI",void 0);i("TTSidebarUI")(p=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).layerType=d.Panel,t.blockOnceAdType=s.Show,t.cSwitchChildrenCC_btn=null,t}t(i,e);var u=i.prototype;return u.onCreate=function(){switch(n.type){case c.wx:this.bottomAdType=r.Native;break;default:this.bottomAdType=r.Banner}this.addEvent(n._tt.sidebar.EventType.REWARD_CHANGE,this.updateView,this,n)},u.onOpen=function(){this.updateView()},u.updateView=function(){n._tt.sidebar.isReward?this.cSwitchChildrenCC_btn.index=0:n._tt.sidebar.checkReward()?this.cSwitchChildrenCC_btn.index=1:this.cSwitchChildrenCC_btn.index=2},u.onClickReward=function(){n._tt.sidebar.reward(),this.updateView(),a.addProp(h.tip),o.tip("领取成功！提示道具+1")},u.onClickTo=function(){n._tt.sidebar.to()},i}(u));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/ttSidebar', 'chunks:///ttSidebar.js'); 
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