$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//主選單設定
	$(".js-navbar").click(function () {
		$(".navbar").toggleClass("now");
	})

	$(".js-nav").find('a').click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top - 63 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});

	$(".js-main").find('div').click(function () {
		var section = $(this).attr("data-target");
		$("html,body").animate({ scrollTop: $(section).offset().top - 63 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});

	//頁籤按鈕切換設定
	$(".js-toggle-menu").find('button').click(function () {
		$(this).parents(".js-toggle-menu").find('button').removeClass('active');
		$(this).addClass("active");
		$(this).parents(".js-toggle-menu").find('span').removeClass('ti-arrow-circle-down').addClass('ti-arrow-circle-right');
		$(this).find('span').removeClass('ti-arrow-circle-right').addClass('ti-arrow-circle-down');

	});
	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}



	});

	//----------------gotop功能-----------------
	$(".gotop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$(".navbar").addClass("top");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$(".navbar").removeClass("top");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度

		/*$(".section").each(function (i, element) {//選單標示設定
			if (st > $(".section").eq(i).offset().top + $(".section").eq(i).outerHeight(true) / 2 - wh) {//i離開畫面時
				index = i;
				$('nav li').find("a").css('color', '#FFFFFF');
				$('nav li').eq(index - 1).find("a").css('color', '#FCE76D');
			}
			
			if (st < $(".section").eq(1).offset().top - 84 ) {
				$('nav li').find("a").css('color', '#FFFFFF');
			}
		});*/
	});

	
	//展覽廠商設定
	for(var i=1 ; i < 8 ; i++){
		let smartCompany=$("#img-smart"+i);
		let smartCompanyEn=$("#img-en-smart"+i);
		smartCompany.magnificPopup({
			delegate: '.slide-popup', // child items selector, by clicking on it popup will open
			type: 'image',
			image: {
				titleSrc: function (item) {
					return item.el.find('img').attr('alt');
				}
			},
			gallery: {
				enabled: true
			},
		});
	  }

	  for(var i=1 ; i < 12 ; i++){
		let techCompany=$("#img-tech"+i);
		let techCompanyEn=$("#img-en-tech"+i);
		techCompany.magnificPopup({
			delegate: '.slide-popup', // child items selector, by clicking on it popup will open
			type: 'image',
			image: {
				titleSrc: function (item) {
					return item.el.find('img').attr('alt');
				}
			},
			gallery: {
				enabled: true
			},
		});
	  }

})//JS尾端	