System.register("chunks:///privacy.js",["./rollupPluginModLoBabelHelpers-6d5f8388.js","cc","./Main-c13e2f9e.js"],(function(){var t,e,n,r,i,c;return{setters:[function(e){t=e._},function(t){e=t.cclegacy},function(t){n=t.s,r=t.a6,i=t.e,c=t.t}],execute:function(){var a;e._RF.push({},"47985OVqclEVYZt7preuGzu","PrivacyDecUIItem",void 0);var o,p=n("PrivacyDecUIItem")(a=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).url="",t}t(n,e);var r=n.prototype;return r.init=function(t){this.url=t},r.listInit=function(){this.SpriteLoaderCC.setSpriteFrameUrl(this.url,!0)},n}(r))||a;e._RF.pop(),e._RF.push({},"d99absQn+FBe56xnrZEXFRD","PrivacyDecUI",void 0);n("PrivacyDecUI")(o=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).layerType=i.NoticeUp,t.cLabel_top_dec=null,t._openData=null,t}return t(n,e),n.prototype.onOpen=function(){var t=this;this.cLabel_top_dec.string=this._openData.gameName,this.ListCC.render(this._openData.count,p,(function(e,n,r){e.init("privacy/texture/"+t._openData.path+(t._openData.pathPirfix||"")+(r+1))})),this.ListCC.ScrollView.scrollToTop(0)},n}(c));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/privacy', 'chunks:///privacy.js'); 
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