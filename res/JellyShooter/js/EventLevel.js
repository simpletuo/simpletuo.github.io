
    function GoogleAnalyticsEvent(key1,Value1,key2,value2,key3,value3,key4,value4)
   {
	
		if(typeof GoogleTagEvent == "undefined") return;
		
		var objParems = {};
		if(key1!=null)
		{
			objParems[key1] = Value1;
		}
		
		
		if(key2!=null)
		{
			objParems[key2] = value2;
		}
		
		if(key3!=null)
		{
			objParems[key3] = value3;
		}
		
		if(key4!=null)
		{
			objParems[key4] = value4;
		}
		GoogleTagEvent(objParems);
   }
   
   ///关卡开始的方法  传入参数 levelName  string类型 如： Lv_1
   function LevelStart(levelName)
   {
	   GoogleAnalyticsEvent("event", "level_start", "level_name", levelName, null, null, null, null);
   }
   
   
   /*
	关卡结束  
		1. 参数 levelName  string类型 如： Lv_1     2
		2. 参数 isSuccess  bool类型 如： true 或 false 代表成功和失败
		3. 参数 isFirstPass  bool类型 如： true 或 false 代表是否第一次通关
   */
   function LevelEnd(levelName,isSuccess,isFirstPass)
   {
	   GoogleAnalyticsEvent("event", "level_end", "level_name", levelName, "level_success", isSuccess ? "success" : "fail", "level_first_pass", isFirstPass ? "true" : "");
   }