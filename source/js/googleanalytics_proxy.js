googleanalytics_proxy 
!function(a,b,c,d,e){var f=c.screen,g=encodeURIComponent,h=["ga="+a,"dt="+g(d.title),"dr="+g(d.referrer),"ul="+(e.language||e.browserLanguage||e.userLanguage),"sd="+f.colorDepth+"-bit","sr="+f.width+"x"+f.height,"vp="+Math.max(d.documentElement.clientWidth,c.innerWidth||0)+"x"+Math.max(d.documentElement.clientHeight,c.innerHeight||0),"z="+ +new Date];c.__ga_img=new Image,c.__ga_img.src=b+"?"+h.join("&")}("UA-118566890-1","https://ga.giuem.com",window,document,navigator,location);