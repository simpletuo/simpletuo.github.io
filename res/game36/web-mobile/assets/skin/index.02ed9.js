System.register("chunks:///skin.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js"],(function(){var i,t,n,e,o,r,s,a,c,u,h,p,f,d,l;return{setters:[function(t){i=t._},function(i){t=i.cclegacy},function(i){n=i.s,e=i.i,o=i.d,r=i.f,s=i.x,a=i.a,c=i.u,u=i.j,h=i.p,p=i.g,f=i.e,d=i.v,l=i.t}],execute:function(){var w;t._RF.push({},"19921HTx39Bg4e+rwJ0Xa3Y","SkinUIItem",void 0);var k,y=n("SkinUIItem")(w=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).config=null,i}i(n,t);var s=n.prototype;return s.initArrow=function(i){this.config=i,this.updateView()},s.updateView=function(){var i=0;i=e.arrowSkin.has(this.config.id)?e.arrowSkin.cur==this.config.id?2:1:0,this.ControllerCC.index=i,this.SpriteLoaderCC.setSpriteFrameUrl(this.config.icon_url)},s.onClick=function(){var i=this;switch(this.ControllerCC._index){case 0:r.showVideo("获取"+("skin_item"==this.config.configName?"箭头":"背景")+"皮肤-id{"+this.config.id+"}",(function(){e.arrowSkin.unlock(i.config.id),o.tip("获得成功")}));break;case 1:o.tip("使用成功"),e.arrowSkin.use(this.config.id);break;case 2:o.tip("正在使用中")}},n}(s))||w;t._RF.pop(),t._RF.push({},"7143cuYD8FIoLyRP1Z9PShW","SkinUI",void 0);n("SkinUI")(k=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).layerType=f.Panel,i.blockOnceAdType=d.None,i}i(n,t);var o=n.prototype;return o.onCreate=function(){switch(a.type){case u.wx:this.bottomAdType=c.Native;break;default:this.bottomAdType=c.Banner}this.addEvent(h.EventType.CHANGE,this.noAnimUpdateView,this,e.arrowSkin),this.addEvent(h.EventType.UNLOCK,this.noAnimUpdateView,this,e.arrowSkin)},o.onOpen=function(){this.ListCC.isPlayAnim=!0,this.updateView()},o.noAnimUpdateView=function(){this.ListCC.isPlayAnim=!1,this.updateView()},o.updateView=function(){this.ListCC.render(p.arr.skin_item,y,(function(i,t){i.initArrow(t)}))},n}(l));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/skin', 'chunks:///skin.js'); 
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