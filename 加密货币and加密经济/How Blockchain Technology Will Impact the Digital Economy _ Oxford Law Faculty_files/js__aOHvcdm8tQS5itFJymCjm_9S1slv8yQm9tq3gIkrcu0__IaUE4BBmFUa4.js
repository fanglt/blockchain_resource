/* Source and licensing information for the line(s) below can be found at https://www.law.ox.ac.uk/sites/all/themes/custom/oxlawtheme/js/plugins.js. */
(function(n){var e,r=function(){},t=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn',],o=t.length,i=(window.console=window.console||{});while(o--){e=t[o];if(!i[e]){i[e]=r}}}(jQuery));function debounce(e,n){var t=null;return function(){var o=_this,i=arguments;clearTimeout(t);t=setTimeout(function(){e.apply(o,i)},n)}};function throttle(n,e,i){e||(e=250);var t,o;return function(){var u=i||this,r=+new Date,l=arguments;if(t&&r<t+e){clearTimeout(o);o=setTimeout(function(){t=r;n.apply(u,l)},e)}
else{t=r;n.apply(u,l)}}};;
/* Source and licensing information for the above line(s) can be found at https://www.law.ox.ac.uk/sites/all/themes/custom/oxlawtheme/js/plugins.js. */
(function(){var t,e;this.Harvey=function(){function i(){}return i.states={},i.attach=function(e,i){var s;return this.states.hasOwnProperty(e)||(this.states[e]=[],this._add_css_for(e)),s=new t(e,null!=i?i.setup:void 0,null!=i?i.on:void 0,null!=i?i.off:void 0),this.states[e].length||this._watch_query(e),this.states[e].push(s),this._window_matchmedia(e).matches&&this._update_states([s],!0),s},i.detach=function(t){var e,i,s,n,h,r;for(h=this.states[t.condition],r=[],e=s=0,n=h.length;n>s;e=++s)i=h[e],r.push(t===i?this.states[i.condition][e]=void 0:void 0);return r},i._watch_query=function(t){var e=this;return this._window_matchmedia(t).addListener(function(i){return e._update_states(e.states[t],i.matches)})},i._update_states=function(t,e){var i,s,n,h;for(h=[],s=0,n=t.length;n>s;s++)i=t[s],h.push(e?i.activate():i.deactivate());return h},i._mediaList={},i._window_matchmedia=function(t){return window.matchMedia&&"addListener"in window.matchMedia("all")?(t in this._mediaList||(this._mediaList[t]=window.matchMedia(t)),this._mediaList[t]):(this._listening||this._listen(),t in this._mediaList||(this._mediaList[t]=new e(t)),this._mediaList[t])},i._listen=function(){var t,e=this;return t=window.addEventListener||window.attachEvent,t("resize",function(){var t,i,s,n;s=e._mediaList,n=[];for(i in s)t=s[i],n.push(t._process());return n}),t("orientationChange",function(){var t,i,s,n;s=e._mediaList,n=[];for(i in s)t=s[i],n.push(t._process());return n}),this._listening=!0},i._add_css_for=function(t){return this.style||(this.style=document.createElement("style"),this.style.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(this.style)),t="@media "+t+" {.harvey-test{}}",this.style.styleSheet?void 0:this.style.appendChild(document.createTextNode(t))},i}(),t=function(){function t(t,e,i,s){this.condition=t,this.setup=e,this.on=i,this.off=s}return t.prototype.active=!1,t.prototype.is_setup=!1,t.prototype.activate=function(){return this.active?void 0:(this.is_setup||("function"==typeof this.setup&&this.setup(),this.is_setup=!0),"function"==typeof this.on&&this.on(),this.active=!0)},t.prototype.deactivate=function(){return this.active?("function"==typeof this.off&&this.off(),this.active=!1):void 0},t}(),e=function(){function t(t){this.media=t,this._listeners=[],this.matches=this._matches()}return t.prototype.addListener=function(t){return void this._listeners.push(t)},t.prototype._process=function(){var t,e,i,s,n,h;if(e=this._matches(),this.matches!==e){for(this.matches=e,n=this._listeners,h=[],i=0,s=n.length;s>i;i++)t=n[i],h.push(t(this));return h}},t.prototype._matches=function(){return this._tester||this._get_tester(),this._tester.innerHTML='&shy;<style media="'+this.media+'">#harvey-mq-test{width:42px;}</style>',this._tester.removeChild(this._tester.firstChild),42===this._tester.offsetWidth},t.prototype._get_tester=function(){return this._tester=document.getElementById("harvey-mq-test"),this._tester?void 0:this._build_tester()},t.prototype._build_tester=function(){return this._tester=document.createElement("div"),this._tester.id="harvey-mq-test",this._tester.style.cssText="position:absolute;top:-100em",document.body.insertBefore(this._tester,document.body.firstChild)},t}()}).call(this);;/**/
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});;/**/
/* Source and licensing information for the line(s) below can be found at https://www.law.ox.ac.uk/sites/all/themes/custom/oxlawtheme/js/oxlaw.js. */
(function(t){'use strict';var c='481px',l='769px',n='993px',r='1201px',i=25,o=150,e=i;Harvey.attach('screen and (min-width: '+n+')',{on:function(){e=o},off:function(){e=i},});window.OWL_CAROUSEL_DEFAULT_OPTIONS={items:2,itemsDesktop:[1199,2],pagination:!1,paginationNumbers:!1,navigation:!0,navigationText:['',''],rewindNav:!0,scrollPerPage:!1,slideSpeed:600,paginationSpeed:600,rewindSpeed:1000,};function s(a){if(a!==undefined){t('html,body').stop().animate({scrollTop:a-e,},1000);return!1}};function a(e){e.each(function(){if(!t(this).hasClass('is-fixed')){t(this).data('offsetTop',t(this).offset().top)}})};Drupal.behaviors.moveContent={attach:function(e,a){function i(t,e){t.click(function(t){t.preventDefault();e.toggleClass('open')})};Harvey.attach('screen and (max-width: '+n+')',{setup:function(){var e=t('.nav-secondary'),a=e.clone(!0).addClass('mobile-nav-secondary').hide();t('.page-header').before(a)},on:function(){t('.nav-secondary').hide();t('.mobile-nav-secondary').show();i(t('.mobile-submenu-btn'),t('.mobile-nav-secondary'));var e=t('.page-nav-bar').not('.node-type-homepage .page-nav-bar');if(e.length){t('<style class="anchor-nav-inline-styling">.page-nav-bar.is-open{height:'+e.height()+'px}</style>').appendTo('head');e.addClass('is-ready');var a=t('h5.mobile',e);a.on('click',function(){e.toggleClass('is-open')})}},off:function(){t('.sidebar .nav-secondary').show();t('.mobile-nav-secondary').hide();t('.anchor-nav-inline-styling').remove();var e=t('.page-nav-bar').not('.node-type-homepage .page-nav-bar'),a=t('h5.mobile',e);e.removeClass('is-ready');a.unbind('click')},})},};Drupal.behaviors.openSubNav={attach:function(e,a){t('.subnav-btn').click(function(e){e.preventDefault();t(this).next().toggleClass('open')})},};Drupal.behaviors.inputButtons={attach:function(e,a){t('input[type=reset], input[type=button], input[type=submit]').each(function(){if(!t(this).parent().hasClass('btn')){t(this).addClass('btn')}})},};Drupal.behaviors.fluidVideos={attach:function(t,e){fluidvids.init({selector:['iframe','object'],players:['www.youtube.com','player.vimeo.com'],})},};Drupal.behaviors.toggle={attach:function(e,a){n(t('.mobile-menu'),t('.navs'));n(t('.search-menu'),t('.block-funnelback'));n(t('.filter-bar h5'),t('.filter-bar'));function n(t,e){t.click(function(t){t.preventDefault();e.toggleClass('open')})}},};Drupal.behaviors.oxlaw_publications={attach:function(e,a){t('.citation-toggle',e).click(function(e){t(this).next('.publication-extras').toggleClass('open');t(this).toggleClass('button-selected');e.preventDefault()})},};Drupal.behaviors.oxlaw_options={attach:function(e,a){t('.option-details-toggle',e).click(function(e){t(this).closest('article').find('.option-details').toggle();t(this).closest('article').toggleClass('active');e.preventDefault()});if(t('.option-details-toggle').length){var i=window.location.hash,n=t(i);if(i.length&&n.length){t('.option-details-toggle',n).trigger('click');t('body').scrollTop(n.offset().top+50)}}},};Drupal.behaviors.attribution={attach:function(e,a){t('.field-attribution .svg',e).click(function(e){t(this).parent().toggleClass('active')})},};Drupal.behaviors.anchorNavigationFollowing={attach:function(n,i){var o=[],s=t('.page-nav-bar .field-items a');s.each(function(){var e=t(t(this).attr('href'));if(e.length){a(e);o.push(e)}});if(o.length){var c=t(o);t(window).scroll(debounce(function(a){var n=a.currentTarget.pageYOffset;c.each(function(a){if(n<t(this).data('offsetTop')-e*2){s.removeClass('active');if(a-1>=0){s.eq(a-1).addClass('active')};return!1}})},200));t(window).on('resize',debounce(function(){a(c)},200))}},};Drupal.behaviors.stickies={attach:function(e,i){var o;Harvey.attach('screen and (min-width: '+n+')',{setup:function(){o=t('.sticky')},on:function(){if(o.length){a(o);t(window).on('scroll.stickies',throttle(function(e){var a=e.currentTarget.pageYOffset;o.each(function(){if(t(this).data('offsetTop')<a){t(this).addClass('is-fixed');t('body').addClass(t(this).data('body-stuck-class'))}
else{t(this).removeClass('is-fixed');t('body').removeClass(t(this).data('body-stuck-class'))}})},100));t(window).on('resize.stickies',debounce(function(){a(o)},200))}},off:function(){t(window).off('scroll.stickies, resize.stickies')},})},};Drupal.behaviors.smoothScrolling={attach:function(e,a){t('a[href*=#]:not([href=#]):not(.ui-tabs-anchor)').not('.tab-person-link').click(function(e){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var a=t(this.hash);a=a.length?a:t('[name='+this.hash.slice(1)+']');if(a.length){e.preventDefault();s(a.offset().top)}}})},};Drupal.behaviors.readMoreToggle={attach:function(e,a){t('.readmore-toggle').click(function(){var e=t(this).attr('href');t(e).toggle();return!1})},}}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.law.ox.ac.uk/sites/all/themes/custom/oxlawtheme/js/oxlaw.js. */
