System.register("chunks:///platform.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js"],(function(){var t,e,n,o,i,r,s;return{setters:[function(e){t=e._},function(t){e=t.cclegacy},function(t){n=t.s,o=t.H,i=t.T,r=t.x,s=t.b}],execute:function(){var c;e._RF.push({},"8fead3vpRJCebltsTfegXF2","RecordTemp",void 0);var a;n("RecordTemp")(c=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this)._startTime=-1,t.duration=-1,t._onStartRecord=null,t._onStopRecord=null,t.isUpdate=!1,t}t(n,e);var r=n.prototype;return r.onLoad=function(){e.prototype.onLoad.call(this),this.setPositionY(o().height,!0)},r.startRecord=function(t){var e=this;this.duration=t,this._startTime=i.second(),this.isUpdate=!0,this.getCountDownByLabel("开始"),this.scheduleOnce((function(){e._onStartRecord&&e._onStartRecord()}),1)},r.pauseRecord=function(){this.isUpdate=!1,this.getCountDownByLabel("暂停")},r.resumeRecord=function(){this.isUpdate=!0},r.stopRecord=function(){var t=this;this.isUpdate=!1,this.Label.string="停止",this.scheduleOnce((function(){t._onStopRecord&&t._onStopRecord()}),1)},r.onUpdate=function(){this.getCountDownByLabel("进行中")||this.stopRecord()},r.getCountDownByLabel=function(t){var e=this.getCountDown();return-1!=e&&e>=0&&(this.Label.string=t+i.numMinute(1e3*e),!0)},r.getCountDown=function(){return-1==this._startTime?-1:this._startTime+this.duration-i.second()},r.onStartRecord=function(t){this._onStartRecord=t},r.onStopRecord=function(t){this._onStopRecord=t},n}(r));e._RF.pop(),e._RF.push({},"51e35+FBKhL05Ae9ZXXM/rW","RewardedVideoTemp",void 0);n("RewardedVideoTemp")(a=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).cLabelTime=null,t.onCloseCallBack=null,t}t(n,e);var i=n.prototype;return i.onLoad=function(){e.prototype.onLoad.call(this),this.setSize(o())},i.onEnable=function(){e.prototype.onEnable.call(this),s.clearUpdateAddTime(this.uuid+"test"),this.SwitchChildrenCC.index=1},i.onUpdate=function(){if(0!=this.SwitchChildrenCC.index){var t=s.updateAddTime(this.uuid+"test");this.cLabelTime.string=Math.floor(.5-t)+"秒",t>=.5&&(this.SwitchChildrenCC.index=0)}},i.onClickClose=function(){this.onCloseCallBack&&(0==this.SwitchChildrenCC.index?this.onCloseCallBack(!0):this.onCloseCallBack(!1))},n}(r));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/platform', 'chunks:///platform.js'); 
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