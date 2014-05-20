//document ready
$(function() {

	var src;
	var purchased=0;

  init();  

  //fancy box enlarge
  $('.full a').fancybox();

	function init(){
		//initialize all a data-full
	$('.previews a').each(function(index){
		$(this).attr('data-full',music[index].imageUrlLarge);
	});
	//initialize all img srcs
	$('.previews a img').each(function(index){
		$(this).attr('src',music[index].imageUrlSmall);
	});

	updateMusicInfo(0);
	src = music[0].imageUrlLarge;

	//
	$('.full img').attr('src',music[0].imageUrlLarge);

  }

  //
  function updateGallery(selection,src){

		updateMusicInfo(getMusicIndex(src));
		$('.full a').attr('href',src);
		
		$('.full img').hide();
		//put that source onto, preview full,
		$('.full img').attr('src',src);
		
		$('.full img').fadeIn(1000);
		//when add selected class to clicked thumbnail, remove previous
		$('.selected').removeClass();
		$(selection).addClass('selected');

		//update artist name, album name, description by using currentMusicIndex variable.
  }


	//on clicking a thumbnail image
	$('.previews a').on('click',function(e){
		e.preventDefault();
		src = $(this).attr('data-full');
		currentMusicIndex++;
		updateGallery(this,src);
	});//thumbnail on click

  //navigate images using arrow key 
	$(document).keyup(function(e) {
		//down button
		if (e.keyCode === 40){
			//ignore down key if last image selected
			if ($('.previews a.selected').next().length !== 0 ){
				src = $('.previews a.selected').next().attr('data-full');
				var nextSelection = $('.previews a.selected').next();
				currentMusicIndex++;
				updateGallery(nextSelection,src);
			}
		}
		//up button
		else if (e.keyCode === 38){
			//ignore up key if first image selected
			if ($('.previews a.selected').prev().length !== 0 ){
				src = $('.previews a.selected').prev().attr('data-full');
				var nextSelection = $('.previews a.selected').prev();
				currentMusicIndex--;
				updateGallery(nextSelection,src);
			}
		}
	});//arrow key nav

	//clicking 'buy' adds to cart
	$('#buy').on('click',function(){
		if (! music[currentMusicIndex].isPurchased){
			purchased++;
			music[currentMusicIndex].isPurchased=true;
			$('#total').text(purchased);
			$('#buy').addClass('purchased');
		}

	});

	//reset total bought items
	$('svg').on('click',function(){ 
		purchased = 0;
		for (var i = 0; i < music.length; i++){
			music[i].isPurchased = false;
			$('#buy').removeClass('purchased');
			$('#total').text('');
		}
	});

	//clicking 'play' plays song
	$('.buttons button#preview').on('click',function(e){
		
		e.preventDefault();

		for (var i = 0; i < music.length; i++) {
			$('audio')[i].pause();
		}

		$('audio')[currentMusicIndex].play();
  });
	
});//document ready

	