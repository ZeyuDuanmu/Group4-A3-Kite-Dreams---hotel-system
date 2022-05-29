$(function(){
	function zjsq(obj, n) {
		obj.find('em').addClass('em' + n + '_' + n);
	}
	function zjsq1(obj, n) {
		obj.find('em').removeClass('em' + n + '_' + n); 
	}
	$('.goin_ul li a').hover(function () {
		var obj = $(this); 
		var index = $('.goin_ul li a').index(this) + 1;
		zjsq(obj, index);
	}, function () {
		var obj = $(this);
		var index = $('.goin_ul li a').index(this) + 1;
		zjsq1(obj, index);
	});
	
	var icon1_left = $('.bannerbox1 li').eq(0).find('.banner_ico1').attr('_left');
	var icon2_left = $('.bannerbox1 li').eq(0).find('.banner_ico1_1').attr('_left');
	$('.bannerbox1 li').eq(0).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
	$('.bannerbox1 li').eq(0).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
	var timer = null, now = 0;
	$('.banner_btn li a').click(function () {
		if($(this).hasClass('active')) return false;
		$('.banner_btn li a').removeClass('active');
		$(this).addClass('active');
		var index = $('.banner_btn li a').index(this);
		now = index;
		$('.banner_ico1').stop().animate({ left: -500 }, 500);
		$('.banner_ico1_1').stop().animate({ left: 1610 }, 500);
		$('.bannerbox1 li').stop().animate({ opacity: 0 }, 500);
		$('.bannerbox1 li').eq(index).stop().animate({ opacity: 1 }, 750, function () {
			$('.bannerbox1 li').eq(index).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
			$('.bannerbox1 li').eq(index).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
		});
	});
	
	timer = setInterval(function () {
		now++;
		$('.banner_btn li a').removeClass('active');
		if (now >= $('.bannerbox1 li').length) {
			now = 0;
			$('.banner_ico1').stop().animate({ left: -500 }, 500);
			$('.banner_ico1_1').stop().animate({ left: 1610 }, 500);
			$('.bannerbox1 li').eq($('.bannerbox1 li').length - 1).stop().animate({ opacity: 0 }, 500);
			$('.bannerbox1 li').eq(0).stop().animate({ opacity: 1 }, 750, function () {
				$('.bannerbox1 li').eq(0).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
				$('.bannerbox1 li').eq(0).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
			});
			$('.banner_btn li a').eq(0).addClass('active');
		}
		else {
			$('.banner_ico1').stop().animate({ left: -500 }, 500);
			$('.banner_ico1_1').stop().animate({ left: 1610 }, 500);
			$('.bannerbox1 li').eq(now - 1).stop().animate({ opacity: 0 }, 500);
			$('.bannerbox1 li').eq(now).stop().animate({ opacity: 1 }, 750, function () {
				$('.bannerbox1 li').eq(now).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
				$('.bannerbox1 li').eq(now).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
			});
			$('.banner_btn li a').eq(now).addClass('active');
		}
	}, 3000);
	$('.banner').hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(function () {
			now++;
			$('.banner_btn li a').removeClass('active');
			if (now >= $('.bannerbox1 li').length) {
				now = 0;
				$('.banner_ico1').stop().animate({ left: -500 }, 500);
				$('.banner_ico1_1').stop().animate({ left: 1610 }, 500);
				$('.bannerbox1 li').eq($('.bannerbox1 li').length - 1).stop().animate({ opacity: 0 }, 500);
				$('.bannerbox1 li').eq(0).stop().animate({ opacity: 1 }, 750, function () {
					$('.bannerbox1 li').eq(0).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
					$('.bannerbox1 li').eq(0).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
				});
				$('.banner_btn li a').eq(0).addClass('active');
			}
			else {
				$('.banner_ico1').stop().animate({ left: -500 }, 500);
				$('.banner_ico1_1').stop().animate({ left: 1610 }, 500);
				$('.bannerbox1 li').eq(now - 1).stop().animate({ opacity: 0 }, 500);
				$('.bannerbox1 li').eq(now).stop().animate({ opacity: 1 }, 750, function () {
					$('.bannerbox1 li').eq(now).find('.banner_ico1').stop().animate({ left: icon1_left }, 400);
					$('.bannerbox1 li').eq(now).find('.banner_ico1_1').stop().animate({ left: icon2_left }, 600);
				});
				$('.banner_btn li a').eq(now).addClass('active');
			}
		}, 3000);
	});
})