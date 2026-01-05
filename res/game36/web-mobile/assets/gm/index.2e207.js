System.register("chunks:///gm.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js"],(function(){var t,n,e,a,i,o,r,c,p,u;return{setters:[function(n){t=n._},function(t){n=t.cclegacy},function(t){e=t.s,a=t.K,i=t.d,o=t.x,r=t.N,c=t.e,p=t.t,u=t.h}],execute:function(){var l;n._RF.push({},"a3c6ciCEHtKDq/LeCt32H+O","GMDataItem",void 0);var s,f=e("GMDataItem")(l=a("gm/GMDataItem")(l=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))||this).cLabelDec=null,t.data=null,t}t(e,n);var a=e.prototype;return a.init=function(t){this.data=t,this.cLabelDec.string=t.dec,this.EditBox.node.active=!!t.inputTip,t.inputTip&&(this.EditBox.placeholder=t.inputTip)},a.onClickItem=function(){i.close("gm/prefab/GMDataUI"),this.data.click(this.EditBox.string)},e}(o))||l)||l;n._RF.pop(),n._RF.push({},"014b75lo6VCQYf5Qr/+Fv3I","GMDataUI",void 0);var h;e("GMDataUI")(s=a("gm/GMDataUI")(s=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))||this).layerType=c.Top,t}return t(e,n),e.prototype.onOpen=function(){this.ListCC.render(r.getDatas(),f,(function(t,n){t.init(n)}))},e}(p))||s);n._RF.pop(),n._RF.push({},"54eb4qWubJAeK4+Q44ywZ9X","GMUI",void 0);e("GMUI")(h=a("gm/GMUI")(h=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))||this).layerType=c.Top,t}return t(e,n),e.prototype.onClickBtn=function(){u.isProChange||i.open("gm/prefab/GMDataUI")},e}(p))||h);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/gm', 'chunks:///gm.js'); 
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