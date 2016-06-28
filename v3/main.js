$(document).ready(function() {


	$(document).on('click', '.click-btn', function(){

		$(this).removeClass('click-btn');

		$('.random').css('background-image', 'url(img/0.jpg)');
		$('.random').css('opacity', '0');

		actualRotate = $('.bootle').attr('data-rotate');
		
		random = Math.floor((Math.random() * 360) + 1000);

		num = parseInt(actualRotate) + random;

		// $('.val').text(num);
		rotate = 'rotate('+num+'deg)';
		$('.bootle').css('transform', rotate );
		$('.bootle').attr('data-rotate', num );
		
		rotate = parseInt(num) / 360;
		round = Math.floor( rotate );
		obrot =  rotate - round ;
		pozycja = obrot * 360;

		if( pozycja >= 0 && pozycja <= 90 ){
			var img = 1;
			var url = 'http://www.brita.pl/brita/pl-pl/cms/cpd_explore_pitcher.grid?ctcCategory=cpd_explore_pitcher';
		}
		
		if( pozycja >= 90 && pozycja <= 180 ){
			var img = 2;
			var url = 'http://www.brita.pl/brita/pl-pl/cms/wkady/cpd_explore_cartridges.grid?ctcCategory=cpd_explore_cartridges';
		}

		if( pozycja >= 180 && pozycja <= 270 ){
			var img = 3;
			var url = 'http://www.brita.pl/brita/pl-pl/cms/cpd_explore_baterie_01.grid?nid=cpd_explore_onlineactive&ctcCategory=cpd_explore_onlineactive';
		}

		if( pozycja >= 270 && pozycja <= 360 ){
			var img = 4;
			var url = 'http://www.brita.pl/brita/pl-pl/cms/cpd_explore_hotwatersystems.grid?ctcCategory=cpd_explore_hotwatersystems';
		}

		setTimeout(function(){
			$('.random').css('background-image', 'url(img/'+img+'.jpg)');
			$('.random').css('opacity', '1');
			$('.click').addClass('click-btn');
		}, 2500);
		
		setTimeout(function(){
			window.parent.location.href = url;
		}, 4000);

	});


});//end document ready