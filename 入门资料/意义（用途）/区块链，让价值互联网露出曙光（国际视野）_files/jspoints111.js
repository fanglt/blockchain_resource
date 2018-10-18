
      reqw = null;
      var reqw;

	 var cookieKey;
	  var paperid,artid,nodeid,isnodecomm,pointtype,attr,title,papername,paperdate;
	function pv(d)
	{
	document.pForm.Input2.value = d;
	
	}

	  function createStarsPage()
	  {  
	     
		 
	      //myCreateCookieKey();
		  var url;

//		  var ck = GetCookie(cookieKey);
//		  if (ck == cookieKey)
//		  {
//		    isexist = 1;
			url = "http://paperpost.people.com.cn/comment/showArticlePoint.jsp";
	       document.all.pointsform.action=url;
		   document.all.pointsform.target="pointsIframe";
	       document.all.pointsform.submit();
	       //document.all.n4Tab_Content1.style.display="none";
           //document.all.n4Tab_Content10.style.display="none";
//	       document.all.pointsIframe.height = 70;
//		   document.all.pointsIframe.width = 280;
//		   document.all.pointsIframe.frameborder = 0;
//		  }else{
//			}
	  }
	  function myCreateCookieKey()
	  {   
	      
		  attr = document.all.pointsform.attr.value;
		  
		  paperdate = document.getElementById("paperdatediv").innerText;
		   
		  if (attr == 2)
		  {
		      paperid = document.all.pointsform.channelid.value;

			  artid = document.all.pointsform.articleid.value;
			  papername = document.all.pointsform.channelname.value;
			  
			 
		  }else{
		      paperid = document.all.pointsform.siteid.value;
			  artid = document.all.pointsform.nsid.value;
			  papername = document.all.pointsform.sitename.value;
		  }
		  
		  nodeid = document.all.pointsform.nodeid.value ;
		  isnodecomm = document.all.pointsform.isnodecomm.value;
		  pointtype  = document.all.pointsform.pointtype.value;
		  //title =  document.all.pointsform.title.value;
		  pointtype = document.all.pointsform.pointtype.value;
	     cookieKey = attr + "#" + paperid + "#" + isnodecomm + "#" + artid + "#";
	 
	  //alert(cookieKey);
	  }
	function SetCookie(){
		
	    myCreateCookieKey();
		
		var expires = new Date ();
		expires.setTime(expires.getTime() + 31 * (24 * 60 * 60 * 1000));
		document.cookie = cookieKey + "=" + escape(cookieKey) + "; expires=" + expires.toGMTString();
	}
	function GetCookie(name) {
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1)
		{
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		}
		else
		{
			begin += 2;
		}
		var end = document.cookie.indexOf(";", begin);
		if (end == -1)
		{
			end = dc.length;
		}
		return unescape(dc.substring(begin + prefix.length, end));
	} 
	
	function submitPoints(pval)

	{ 
myCreateCookieKey();
//alert(11111);	 	 
  	  var ck = GetCookie(cookieKey);
		//alert(ck); 
//alert(cookieKey);
		  if (ck == cookieKey && cookieKey !=null)
		  { 
		      alert("请不要重复提交！");
			  return;  
		  }
	   //var pval = pval/10;
	    
	   SetCookie();
	   
	   var weburl = 'http://paperpost.people.com.cn/comment/articlePoint.jsp';
	   var attr = document.all.pointsform.attr.value;
	   var isnodecomm = document.all.pointsform.isnodecomm.value;
	   var pointtype = document.all.pointsform.pointtype.value;
	   var rank = pval;
//	   var articleid  = null;
//	   var channelid = null;
//	   var channelname = null;
//	   if (attr == 2)
//	   {
//	   	  //articleid = document.all.pointsform.articleid.value;
//	   	  channelid = document.all.pointsform.channelid.value;
//	   	  channelname = escape(document.all.pointsform.channelname.value);
//	     }
//	    else
//	   {
//	      //articleid = document.all.pointsform.nsid.value;
//	      channelid = document.all.pointsform.siteid.value;
//	      channelname = escape(document.all.pointsform.sitename.value);
//	   }
//	   //var arttitle = document.all.pointsform.title.value;
//	   var nodeid = document.all.pointsform.nodeid.value;
	  var url = weburl+ '?rank='+rank+'&nouse=0';
	
	   document.all.pointsform.action=url;
	   document.all.pointsform.submit();
	   //document.all.n4Tab_Content1.style.display="none";
//       document.all.n4Tab_Content10.style.display="none";
//	   document.all.pointsIframe.height = 70;
//	   document.all.pointsIframe.width = 280;
//	   document.all.pointsIframe.frameborder = 0;
	   }
	   
	   function getPaperDate(datestr)
      {
        var dstr = datestr.replace(/(^\s*)|(\s*$)/g, "");
        return dstr;
      }

