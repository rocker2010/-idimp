 (function($, h, c) {
 	var a = $([]),
 		e = $.resize = $.extend($.resize, {}),
 		i, k = "setTimeout",
 		j = "resize",
 		d = j + "-special-event",
 		b = "delay",
 		f = "throttleWindow";
 	e[b] = 0;
 	e[f] = true;
 	$.event.special[j] = {
 		setup: function() {
 			if(!e[f] && this[k]) {
 				return false
 			}
 			var l = $(this);
 			a = a.add(l);
 			$.data(this, d, {
 				w: l.width(),
 				h: l.height()
 			});
 			if(a.length === 1) {
 				g()
 			}
 		},
 		teardown: function() {
 			if(!e[f] && this[k]) {
 				return false
 			}
 			var l = $(this);
 			a = a.not(l);
 			l.removeData(d);
 			if(!a.length) {
 				clearTimeout(i)
 			}
 		},
 		add: function(l) {
 			if(!e[f] && this[k]) {
 				return false
 			}
 			var n;

 			function m(s, o, p) {
 				var q = $(this),
 					r = $.data(this, d);
 				r.w = o !== c ? o : q.width();
 				r.h = p !== c ? p : q.height();
 				n.apply(this, arguments)
 			}
 			if($.isFunction(l)) {
 				n = l;
 				return m
 			} else {
 				n = l.handler;
 				l.handler = m
 			}
 		}
 	};

 	function g() {
 		i = h[k](function() {
 			a.each(function() {
 				var n = $(this),
 					m = n.width(),
 					l = n.height(),
 					o = $.data(this, d);
 				if(m !== o.w || l !== o.h) {
 					n.trigger(j, [o.w = m, o.h = l])
 				}
 			});
 			g()
 		}, e[b])
 	}
 })(jQuery, this);
 $(document).ready(function() {
 	//iCheck for checkbox and radio inputs
				$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
					checkboxClass: 'icheckbox_minimal-aero',
					radioClass: 'iradio_minimal-aero'
				});
 	//底部菜单
 	var navAll = $(".nav2,.nav3,.nav4,.nav5");
 	var navAllId = $("#nav2,#nav3,#nav4,#nav5");
 	var className = "inline_five ";
 	$(".nav1").click(function() {
 		if ($("#nav1").css('display')=="none"){
 			showIndexNav();
 			$("#navItem ul:visible").hide();
 			$("#navItem ul:visible").animate({bottom:0-$("#navItem ul:visible").height()}, 400);
 			//navAllId.hide();
// 			hideNav();
 		}else{
 			hideIndexNav();
 			$("#div_mask").hide();
 		};
 	});

 	$(navAll).click(function() {
// 		showNav();
		$("#div_mask").show();
 		hideIndexNav();
 		var classID = $(this).attr("class").replace("inline_five ", "");
 		var classID = classID.replace("mr2", "");
 		var isVisible = $("#" + classID).is(":visible");
 		if(isVisible) {
 			$("#navItem").animate({bottom:0-$("#navItem").height()}, 400,function(){$("#navItem").hide();$("#div_mask").hide();});//菜单隐藏
// 			$("#" + classID).animate({bottom:0-$("#" + classID).height()}, 400,function(){$("#div_mask,#" + classID).hide();});
 		}else{
 			$(navAllId).hide();
 			$("#" + classID).show();
 			$("#navItem").css("bottom",0-$("#navItem").height());
 			$("#navItem").show();
   			$("#navItem").animate({bottom:$("#navTopMenu").height()+10}, 400);
 		}
 	});

 	function showNav() {
 		$("#navItem").animate({
 			bottom: "59px"
 		}, 400);
 		$("#div_mask").show();
 		hideIndexNav();
 	}

 	function hideNav() {
 		
 	}

 	function showIndexNav() {
 		$("#nav1").css("display","block");
 		$("#nav1").animate({bottom:$("#navTopMenu").height()+10}, 400)
 		$("#div_mask").show();
 	}

 	function hideIndexNav() {
 		$("#nav1").animate({
 			bottom: "-120px"
 		}, 400,function(){$(this).hide();});
 	}
 	$("#div_mask").click(function() {
 		$("#navItem").animate({bottom:0-$("#navItem").height()}, 400,function(){
 			$("#navItem ul:visible").hide();hideIndexNav();$("#div_mask").hide();
 		});
 	});
 });
 // 底部菜单结束
 //-----------------------内容移动-----------------------
 var numAll = $("#fb>ul>li").length;
 var liNum;
 //$("#fb>ul>li").width($("#content").width());
 //$("#fb>ul").width($("#content").width() * numAll)
 $("#fb>ul>li:gt(0)").css("display", "none");
 $("#fb .loadingMask").css({
 	"left": $("#fb .loadingMask").width(),
 	"opacity": '1'
 });
 for(var j = 0; j < 10; j++) {
 	$("#fb .loadingMask").append("<div class='loadingMaskC' id='MaskC" + j + "'></div>");
 	$("#fb .loadingMask #MaskC" + j + "").css({
 		"left": $("#fb .loadingMask").width()
 	});
 }

 function moveL(num) {
 	var xzhi = -$("#fb>ul>li").width() * (num - 1);
 	liNum = num - 1;
 	$("#fb .loadingMask").css("display", "block");
 	$("#fb .loadingMask").animate({
 		left: 0
 	}, 500);
 	$("#fb .loadingMask #MaskC0").animate({
 		left: 0
 	}, 1000);
 	$("#fb .loadingMask #MaskC1").animate({
 		left: 0
 	}, 800);
 	$("#fb .loadingMask #MaskC2").animate({
 		left: 0
 	}, 600);
 	$("#fb .loadingMask #MaskC3").animate({
 		left: 0
 	}, 400);
 	$("#fb .loadingMask #MaskC4").animate({
 		left: 0
 	}, 100);
 	$("#fb .loadingMask #MaskC5").animate({
 		left: 0
 	}, 200);
 	$("#fb .loadingMask #MaskC6").animate({
 		left: 0
 	}, 400);
 	$("#fb .loadingMask #MaskC7").animate({
 		left: 0
 	}, 600);
 	$("#fb .loadingMask #MaskC8").animate({
 		left: 0
 	}, 800);
 	$("#fb .loadingMask #MaskC9").animate({
 		left: 0
 	}, 1000);
 	$("#fb .loadingMask #MaskC10").animate({
 		left: 0
 	}, 1000);
 	t = setTimeout(function() {
 		//$("#fb>ul").css("left",xzhi);
 		$("#fb>ul>li").css("display", "none");
 		$("#fb>ul>li:eq(" + liNum + ")").css("display", "block");
 		$("html,body").scrollTop(0);
 		$("#fb .loadingMask").animate({
 			opacity: 0
 		}, 500);
 		//$("#fb .loadingMask").css("opacity",1);
 	}, 3000);
 	p = setTimeout(function() {
 		$("#fb .loadingMask").css({
 			"left": $("#fb .loadingMask").width(),
 			"opacity": '1'
 		});
 		$("#fb .loadingMask").css("display", "none");
 		for(var l = 0; l < 10; l++) {
 			$("#fb .loadingMask #MaskC" + l + "").css({
 				"left": $("#fb .loadingMask").width()
 			});
 		}
 	}, 4000);
 }
 //-----------------------内容移动结束-----------------------
 //-----------------------选项卡切换----------------------
 $("#selMenu>li>a").click(
 		function() {
 			$("#selMenu>li>a").removeClass("redbtn").addClass("graybtn");
 			$(this).removeClass("graybtn").addClass("redbtn");
 		})
 	//-----------------------选项卡切换结束----------------------
 $(".selMen li a").click(
 		function() {
 			$(".selMen li a").removeClass("sel");
 			$(this).addClass("sel");
 		}
 	)
 	//-----------------------加载动画-----------------------
 function loading() {
 	$(".loading").show();
 }
 //-----------------------加载动画结束-----------------------