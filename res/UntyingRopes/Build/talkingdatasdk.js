//var TD = require('./tdweapp');
var talksdk={
  unityDriver:'JsUnityCallManager'
}
// talksdk.JsTest=function(str) {
//     console.log("JsTest" + str);
//     GameGlobal.Module.SendMessage(test.unityDriver, 'JsCallUnityTest', JSON.stringify(str));
// }
talksdk.onShow=function() {
    //TD.Page.load(true); // true: Tabs method
},
talksdk.onHide=function() {
    //TD.Page.unload(); // if autoOnPageUnload == false
}
talksdk.bindEvent=function(eventId,eventLabel,value1,value2) {
    //console.log("talksdk.bindEvent:" + eventId + "/" + eventLabel + "/" + value1 + "/" + value2);
    TDAPP.onEvent(eventId, eventLabel, { key: value1, value: value2 });
  //GameGlobal.tdAppSdk.event({
  //  id: eventId,
  //  label: eventLabel,
  //  params: {
  //    key: value1,
  //    value: value2
  //  }
  //});
}
var GameGlobal = {};
GameGlobal.talksdk = talksdk;