const GamesInfo = {"Games": [{"name": "All Things Are Paintable", "img": "game_al.png", "url": "AllThingsArePaintable/game.html"}, {"name": "Makeup Art", "img": "game_Art.png", "url": "MakeupArt/game.html"}, {"name": "Hero Bicycle", "img": "game_Bicycle.png", "url": "HeroBicycle/game.html"}, {"name": "Princess Fashion Makeover", "img": "game_Fashion.png", "url": "PrincessFashionMakeover/game.html"}, {"name": "Makeup Star", "img": "game_Star.png", "url": "MakeupStar/game.html"}, {"name": "Halloween Party", "img": "game_Halloween.png", "url": "HalloweenParty/game.html"}, {"name": "Perfect Timing", "img": "game_Perfect.png", "url": "PerfectTiming/game.html"}, {"name": "Running Girl", "img": "game_Running.png", "url": "RunningGirl/game.html"}]};
const elBox = document.querySelector('.box_list');
const elTopAD = document.querySelector('.TopAD');
const elItem= document.querySelector('#img_item');
let i;
let games = GamesInfo.Games;
let len=games.length-1;
let serch = window.location.search;
for (i = 0; i <= len; i++) {
	let copy = elItem.cloneNode(true);
	let info = games[i];
	copy.src="img/"+info.img;
	let url = "../game/"+info.url+serch;
	copy.style.display="block";
	copy.onclick=function(){
		window.location.href =url;
	};
	//if(i==len){copy.style.marginBottom='200px'}
	elBox.appendChild(copy);
}
let itemNode4=elBox.childNodes[3];;
let times_bottom_banner_ad = 0;let times_bottom_banner_ad2 = 0;let times_top_banner_ad = 0;
let time_fresh_banner = 40000;//bannaer广告刷新时间 40秒
function appendAsenseAD(obj,_ins){if((typeof obj=="undefined") || (typeof _ins =="undefined")){return;}obj.innerHTML=_ins;let o=document.createElement("script");o.innerHTML="(adsbygoogle = window.adsbygoogle || []).push({});";obj.appendChild(o);}
function creatBottomBannerBox(){let _container=document.getElementById('bannerBox');if(_container==null){times_bottom_banner_ad = 0;let bannerBox=document.getElementById('bannerBox');if((typeof bannerBox) == "undefined" || bannerBox == null){bannerBox=document.createElement('Div');bannerBox.id="bannerBox";document.body.appendChild(bannerBox);} bannerBox.innerHTML='	<div id="bottom-banner-container" style="background-color:#f8f8f8;pointer-events:none; bottom: 0px; left: 0;  padding-top: 2px;  padding-bottom: 0px;  position: fixed;  visibility: visible; width: 100%; z-index: 19; "><div id="bottom-banner" align="center" style="overflow: hidden;margin: 0 auto;width: 100%;height: 100px;"></div></div>';}};
function RemoveBottomBannerBox(){let bannerBox = document.getElementById('bannerBox');if(bannerBox!=null){bannerBox.remove();}}
function ShowBottomContainer(){let _element= document.getElementById('bottom-banner-container');if(_element!=null){return};_element.style.backgroundColor="#fff";_element.style.boxShadow="0 0 5px 0 rgb(0 0 0 / 20%)"; _element.style.pointerEvents = 'auto';}
function show_banner(){creatBottomBannerBox();let _banner=document.getElementById('bottom-banner');_banner.innerHTML = "";appendAsenseAD(_banner,bottom_banner_Ad);setTimeout(check_banner,1000);if(typeof is_fresh_bottom_banner!="undefined"&&is_fresh_bottom_banner==true){setTimeout(show_banner,time_fresh_banner);} }
function reshow_banner(){RemoveBottomBannerBox();setTimeout(show_banner,6200)}
function check_banner(){let _banner=document.getElementById('bottom_banner_Ad'); if(_banner==undefined){return;}  var attribute = _banner.getAttribute("data-ad-status");if(attribute==null){times_bottom_banner_ad+=1;if(times_bottom_banner_ad==1){ShowBottomContainer();}if(times_bottom_banner_ad >=8){reshow_banner(); return;} setTimeout(check_banner,1000);return;} if(attribute=="unfilled"){reshow_banner(); return;}  }

function creatBottombannerBox2(){let _container=document.getElementById('bannerBox2');if(_container==null){times_bottom_banner_ad2 = 0;let bannerBox2=document.getElementById('bannerBox2');if((typeof bannerBox2) == "undefined" || bannerBox2 == null){bannerBox2=document.createElement('Div');bannerBox2.id="bannerBox2";elBox.insertBefore(bannerBox2, itemNode4);} bannerBox2.innerHTML='	<div id="bottom-banner-container2" style="background-color:#fff;pointer-events:none;left: 0;padding-top: 2px;padding-bottom: 0px;margin-bottom:0.4rem;width: 11rem;"><div id="bottom-banner2" align="center" style="overflow: hidden;margin: 0 auto;width: 100%;height: 100px;"></div></div>';}};
function RemoveBottombannerBox2(){let bannerBox2 = document.getElementById('bannerBox2');if(bannerBox2!=null){bannerBox2.remove();}}
function ShowBottomContainer2(){let _element= document.getElementById('bottom-banner-container2');if(_element!=null){return};_element.style.backgroundColor="#fff";_element.style.boxShadow="0 0 5px 0 rgb(0 0 0 / 20%)"; _element.style.pointerEvents = 'auto';}
function show_banner2(){creatBottombannerBox2();let _banner=document.getElementById('bottom-banner2');_banner.innerHTML = "";appendAsenseAD(_banner,bottom_banner_Ad2);setTimeout(check_banner2,1000);if(typeof is_fresh_bottom_banner!="undefined"&&is_fresh_bottom_banner==true){setTimeout(show_banner2,time_fresh_banner);} }
function reshow_banner2(){RemoveBottombannerBox2();setTimeout(show_banner2,7320)}
function check_banner2(){let _banner=document.getElementById('bottom_banner_Ad2'); if(_banner==undefined){return;}  var attribute = _banner.getAttribute("data-ad-status");if(attribute==null){times_bottom_banner_ad2+=1;if(times_bottom_banner_ad2==1){ShowBottomContainer2();}if(times_bottom_banner_ad2 >=8){reshow_banner2(); return;} setTimeout(check_banner2,1000);return;} if(attribute=="unfilled"){reshow_banner2(); return;}  }

let todAdId ="TopAD";
function RemoveTopAD(){let ele = document.getElementById(todAdId);if(ele!=null){ele.remove();}}
function CreateTopAD(){RemoveTopAD();times_top_banner_ad=0;let item = elTopAD.cloneNode(true);item.id=todAdId;item.style.display="block";elBox.insertBefore(item, elBox.firstChild);appendAsenseAD(item,top_banner_Ad);setTimeout(check_TopAD,1000);}
function reshow_TopAD(){RemoveTopAD();setTimeout(CreateTopAD,5620)}
function check_TopAD(){let _banner=document.getElementById('top_banner_Ad'); if(_banner==undefined){return;}  var attribute = _banner.getAttribute("data-ad-status");if(attribute==null){times_top_banner_ad+=1;if(times_top_banner_ad==1){}if(times_top_banner_ad >=8){reshow_TopAD(); return;} setTimeout(check_TopAD,1000);return;} if(attribute=="unfilled"){reshow_TopAD(); return;}  }

function loadGoogleADJS(){	if(google_adScene_js != undefined){let script = document.createElement("script");script.async = true;script.src = google_adScene_js;script.setAttribute("data-ad-frequency-hint","20s");script.setAttribute("crossorigin","anonymous");document.head.appendChild(script);};}
		
function show_bottom_ads(){show_banner();setTimeout(show_banner2,2130);}
function showADS(){loadGoogleADJS();CreateTopAD();setTimeout(show_bottom_ads,2220);}
setTimeout(showADS,1200);
