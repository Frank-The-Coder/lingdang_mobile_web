

$(document).ready(function(){
	let transform = 4000;
	let tradecount = 2;
	let childcount_accountcase = parseInt($('#ld_solution').get(0).childElementCount) - (tradecount*2-2);
	let casei = 0;
	let progress = $(".ld-solution-dot li");

	let transtime_accountcase;
	transform_time_accountcase();

	function transform_time_accountcase(){
		transtime_accountcase =setInterval(trade_project_transfrom_accountcase,transform);
	}
	function trade_project_transfrom_accountcase(){
		casei = casei + 1;
		$('#ld_solution').css('transition-duration','300ms');
		$('#ld_solution').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color(casei);
		setTimeout(trade_project_stop_accountcase,300);
	}
	function trade_project_stop_accountcase(){
		$('#ld_solution').css('transition-duration','0ms');
		if(casei == childcount_accountcase-1){
			casei = -1;
			$('#ld_solution').css('left','0');
		}
		else if(casei == 1-tradecount){
			casei = casei + childcount_accountcase;
			$('#ld_solution').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		}

		change_progress_color(casei);
	}

	function trade_project_transfrom_left_accountcase(){
		clearInterval(transtime_accountcase);
		casei = casei - 1;
		$('#ld_solution').css('transition-duration','300ms');
		$('#ld_solution').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color_right(casei);
		setTimeout(trade_project_stop_accountcase,300);
		transform_time_accountcase();
	}
	function trade_project_transfrom_right_accountcase(){
		clearInterval(transtime_accountcase);
		casei = casei + 1;
		$('#ld_solution').css('transition-duration','300ms');
		$('#ld_solution').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color(casei);
		setTimeout(trade_project_stop_accountcase,300);
		transform_time_accountcase();
	}
	$('#ld-solution-left').bind('click',function(){
		trade_project_transfrom_left_accountcase();
	});
	$('#ld-solution-right').bind('click',function(){
		trade_project_transfrom_right_accountcase();
	});

	function change_progress_color(which_one){
		$(".ld-solution-dot li:eq("+(which_one-1)+")").css('background-color', '#cccccc');
		$(".ld-solution-dot li:eq("+(casei+tradecount-2)+")").css('background-color', '#2587ee');
	}

	function change_progress_color_right(which_one){
		$(".ld-solution-dot li:eq("+(which_one+tradecount-2)+")").css('background-color', '#2587ee');
		if(which_one == childcount_accountcase-tradecount+1){
			which_one = -tradecount+1;
		}
		$(".ld-solution-dot li:eq("+(which_one+tradecount-1)+")").css('background-color', '#cccccc');
	}


	var html = document.querySelector('html');
	window.onscroll = function (e){
		if(html.scrollTop>0){
			$('.header').addClass('header_shadow');
		}else{
			$('.header').removeClass('header_shadow');
		}
	}
});



$(document).ready(function(){
	let transform = 4000;
	let tradecount = 2;
	let childcount_accountcase = parseInt($('#ld_value').get(0).childElementCount) - (tradecount*2-2);
	let casei = 0;
	let progress = $(".ld-value-dot li");

	let transtime_accountcase;
	transform_time_accountcase();

	function transform_time_accountcase(){
		transtime_accountcase =setInterval(trade_project_transfrom_accountcase,transform);
	}
	function trade_project_transfrom_accountcase(){
		casei = casei + 1;
		$('#ld_value').css('transition-duration','300ms');
		$('#ld_value').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color(casei);
		setTimeout(trade_project_stop_accountcase,300);
	}
	function trade_project_stop_accountcase(){
		$('#ld_value').css('transition-duration','0ms');
		if(casei == childcount_accountcase-1){
			casei = -1;
			$('#ld_value').css('left','0');
		}
		else if(casei == 1-tradecount){
			casei = casei + childcount_accountcasez;
			$('#ld_value').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		}

		change_progress_color(casei);
	}

	function trade_project_transfrom_left_accountcase(){
		clearInterval(transtime_accountcase);
		casei = casei - 1;
		$('#ld_value').css('transition-duration','300ms');
		$('#ld_value').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color_right(casei);
		setTimeout(trade_project_stop_accountcase,300);
		transform_time_accountcase();
	}
	function trade_project_transfrom_right_accountcase(){
		clearInterval(transtime_accountcase);
		casei = casei + 1;
		$('#ld_value').css('transition-duration','300ms');
		$('#ld_value').css('left','calc(-'+(casei+tradecount-1)+'00% / 1.95)');
		change_progress_color(casei);
		setTimeout(trade_project_stop_accountcase,300);
		transform_time_accountcase();
	}
	$('#ld-value-left').bind('click',function(){
		trade_project_transfrom_left_accountcase();
	});
	$('#ld-value-right').bind('click',function(){
		trade_project_transfrom_right_accountcase();
	});

	function change_progress_color(which_one){
		$(".ld-value-dot li:eq("+(which_one-1)+")").css('background-color', '#cccccc');
		$(".ld-value-dot li:eq("+(casei+tradecount-2)+")").css('background-color', '#2587ee');
	}

	function change_progress_color_right(which_one){
		$(".ld-value-dot li:eq("+(which_one+tradecount-2)+")").css('background-color', '#2587ee');
		if(which_one == childcount_accountcase-tradecount+1){
			which_one = -tradecount+1;
		}
		$(".ld-value-dot li:eq("+(which_one+tradecount-1)+")").css('background-color', '#cccccc');
	}
});


