//document ready
    $(function() {
      var src;
      var currentMusicIndex = 0;

      function init(){
        //initialise all a data-full
      $('.previews a').each(function(index){
        $(this).attr('data-full',music[index].imageUrlLarge);
      });
      //initialise all img srcs
      $('.previews a img').each(function(index){
        $(this).attr('src',music[index].imageUrlSmall);
      });

      $('.full a ').attr('href',music[0].imageUrlLarge);
      $('.full a img ').attr('src',music[0].imageUrlLarge);
      $('.artist').empty().append(music[0].artist);

    }

    init();
    function updateGallery(nextSelection,src){
        $('.full a').attr('href',src);
        
        $('.full img').hide();
        //put that source onto, preview full,
        $('.full img').attr('src',src);
        
        $('.full img').fadeIn(1000);
        //when add selected class to clicked thumbnail, remove previous
        $('.selected').removeClass();
        $(nextSelection).addClass('selected');

        //update artist name, album name, description by using currentMusicIndex variable.

        
        updateMusicInfo();
    }

    function updateMusicInfo(){
      $('.artist').empty().append(music[currentMusicIndex].artist);
      $('.album').empty().append(music[currentMusicIndex].album);
    }

      //on clicking a thumbnail image
      $('.previews a').on('click',function(e){
        e.preventDefault();
        src = $(this).attr('data-full');
        currentMusicIndex++;
        updateGallery(this,src);

      });//thumbnail on click

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
          });


      //fancy box enlarge
      $('.full a').fancybox();



      
    });//document ready

  