jQuery(function(){
	activeNavStatus();
	jQuery('.J-readmore').bind("click", readMore);
	
	jQuery(window).scroll(function() {
		var scrollTop = jQuery(window).scrollTop();
		if(jQuery(".bm-header").hasClass('bm-fixed')){
			if(scrollTop >= 30){
				jQuery(".bm-header").addClass("fixed");
				//jQuery('.bm-logo').attr('src', 'template/zhanzhuai_keji/images/bm/logo.png');
			}else{
				jQuery(".bm-header").removeClass("fixed");
				//jQuery('.bm-logo').attr('src', 'template/zhanzhuai_keji/images/bm/logo.png');
			}
		}
	});
	if (jQuery(window).height() > (jQuery('.bm-footer').offset().top + 304)) {
		jQuery('.bm-footer').css('margin-top',
				jQuery(window).height() - jQuery('.bm-footer').offset().top - 304);
	}
	jQuery('#diy-fd-remen li').each(function(){
		var liWidth = jQuery(this).width();
		var spanWidth = jQuery(this).children('span').width();
		jQuery(this).children('a').width(liWidth - spanWidth - 20);
	});
	
	jQuery('#diy-fd-remen .remen-item').mouseover(function(){
		jQuery('#diy-fd-remen .remen-item').removeClass('active');
		jQuery(this).addClass('active');
	});

	jQuery('#diy_sd_3 .list-item').mouseover(function(){
		jQuery('#diy_sd_3 .list-item').removeClass('active');
		jQuery(this).addClass('active');
	});
	
	function readMore(){
		var $this = jQuery('.J-readmore');
		var catid = $this.attr('data-catid');
		var page = $this.attr('data-page');
		$this.text('加载中...');
		$this.unbind("click");
		jQuery.ajax({
			type : "POST",
			url : "forum.php?mod=ajax&inajax=yes&infloat=register&handlekey=register&ajaxmenu=1",
			data : "action=getPortals&page="+page+"&catid=1",
			dataType : "json",
			success : function(data){

				if(data == null){
					$this.text('暂无数据');
					$this.addClass('disabled');
					exit;
				}
				
				var obj = "";

				for(var i=0; i<data.length; i++){
					console.log(data[i]);
					obj += '<div class="bbda pb20 pt20 cl">';
					obj += '<div class="atc"><a href="portal.php?mod=view&aid='+data[i].aid+'" target="_blank"><img src="'+data[i].pic+'" alt="'+data[i].title+'" class="tn"></a></div>';
					obj += '<dl class="zhanzhuai_y ">';
					obj += '<dt class="zhanzhuai_dt"><a href="portal.php?mod=view&aid='+data[i].aid+'" target="_blank">'+data[i].title+'</a> </dt>';
					obj += '<dd class="zhanzhuai_dd">'+data[i].summary+'</dd>';
					obj += '<dd class="zhanzhuai_fb"> ';
					obj += '<span class="xg1">'+data[i].dateline+'</span>';
					obj += '<span class="xg1"> <span class="pipe">|</span> '+data[i].username+'</span>';

					if(data[i].manage){
						obj += '<span class="xg1"> <span class="pipe">|</span>';
						obj += '<label><a href="portal.php?mod=portalcp&amp;ac=article&amp;op=edit&amp;aid=10">编辑</a></label>';
						obj += '<span class="pipe">|</span>';
						obj += '<label><a href="portal.php?mod=portalcp&amp;ac=article&amp;op=delete&amp;aid=10" id="article_delete_10" onclick="showWindow(this.id, this.href, \'get\', 0);">删除</a></label>';
						obj += '</span>';
					}

					obj += '<div class="comments">';
					obj += '<i class="icon-bbs ib-comments"></i>';
					obj += '<span>&nbsp;'+data[i].commentnum+'</span>';
					obj += '</div>';
					obj += '</dd>';
					obj += '</dl>';
					obj += '</div>';
				}

				if(data.length == 15){
					$this.text('阅读更多');
					$this.bind("click", readMore);
					$this.attr('data-page', (parseInt(page)+1));
				}else{
					$this.text('我是底线');
					$this.addClass('disabled');
				}
					
				jQuery('.J-morezixun').before(obj);
				
			},
			error:function(){
				alert('出错了');
			}
		});
	}
	
	function activeNavStatus(){
		var url = window.location.pathname;
		var threadRE = new RegExp("thread");
		var forumRE = new RegExp("forum");
		var articleRE = new RegExp("article");
		var portalRE = new RegExp("portal");
		var newsRE = new RegExp("news");
	
		if(threadRE.test(url) || forumRE.test(url)){
			jQuery('.bm-header .nav-group .list-item').eq(6).addClass('a');
		}else if(articleRE.test(url) || portalRE.test(url) || newsRE.test(url)){
			jQuery('.bm-header .nav-group .list-item').eq(5).addClass('a');
		}
	}
});