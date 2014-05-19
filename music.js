var music = [
	{
		'id':1,
		'artist':'Beatles',
		'album': 'Abbey Road',
		'imageUrlLarge':'images/albums/album-abbeyroad-large.jpg',
		'imageUrlSmall':'images/albums/album-abbeyroad-small.jpg',
		'songUrl': 'http://rovimusic.rovicorp.com/playback.mp3?c=j0IW4o-WinqVfwctc53hXP3pqi0RS20pHqZddGAWQOA=&f=J',
		'description':'Abbey Road shows a band still clearly in its prime, capable of songwriting and recording feats other groups could only envy. Working for the first time exclusively on an eight-track tape machine, their mastery of the studio was undeniable, and Abbey Road still sounds fresh and exciting 40 years on (indeed, of the 2009 remasters, the improvements and sonic detail here are the most striking). There\'s not a duff note on the damn thing.'
	},
	{
		'id':2,
		'artist':'Bob Marley & The Wailers',
		'album': 'Legend',
		'imageUrlLarge':'images/albums/album-bobmarley-large.jpg',
		'imageUrlSmall':'images/albums/album-bobmarley-small.jpg',
		'songUrl': 'http://rovimusic.rovicorp.com/playback.mp3?c=QnFvsNJ3H76juK_9zVYqyWjIb8Tr8vVfGLIuM5x_WSg=&f=J',
		'description':'The classic Marley album, the one that any fair-weather reggae fan owns, Legend contains 14 of his greatest songs. Some may argue that the compilation shortchanges his groundbreaking early ska work or his status as a political commentator, but this isn\'t meant to be definitive, it\'s meant to be an introduction, sampling the very best of his work. And it does that remarkably well, offering all of his genre-defying greats and an illustration of his excellence, warmth, and humanity.'
	},
	{	'id':3,
		'artist':'Kanye West',
		'album': 'Yeezus',
		'imageUrlLarge':'images/albums/album-yeezus-large.jpg',
		'imageUrlSmall':'images/albums/album-yeezus-small.jpg',
		'songUrl': 'http://rovimusic.rovicorp.com/playback.mp3?c=S7a9VAlyH9WMuBxFUW_5_TqpU4hxl5saPDaNIVORh-E=&f=J',
		'description':'"Yeezus" is a medley of several genres -- new wave, punk, rock, and of course hip-hop. Those looking for vintage soul sounds or even full-on raps from start to finish will be thrown several curves here. It\’s an album with numerous emotional layers as well. There are a few lighthearted moments, and cuts about love along with lust. But mostly, West is just plain mad -- angry at naysayers,  \“The Man\” censoring his art, and even at his own celeb status.'
	},
	{	'id':4,
		'artist':'Pink Floyd',
		'album': 'The Dark Side of the Moon',
		'imageUrlLarge':'images/albums/album-pinkfloyd-large.jpg',
		'imageUrlSmall':'images/albums/album-pinkfloyd-small.jpg',
		'songUrl': 'http://rovimusic.rovicorp.com/playback.mp3?c=hIzYGfNje1cR64cquskMmPKUU23ZQzDPVjJ3ONioHGo=&f=J',
		'description':'Dark Side of the Moon, was composed by Pink Floyd and was originally released on March 24 of 1973, a wonderful year to be alive. The hazy landscapes expressed therein are the perfect setting for perceiving the mundane details littered throughout life. With ten glistening movements including an overture, an elegy, and psychedelic and neo-baroque styles ending with a superlative finale, Dark Side of the Moon is quick to become a favorite of all music lovers.',
	},
	{	'id':5,
		'artist':'Jay-Z',
		'album': 'Magna Carta Holy Grail',
		'imageUrlLarge':'images/albums/album-magnacarta-large.jpg',
		'imageUrlSmall':'images/albums/album-magnacarta-small.jpg',
		'songUrl':'http://rovimusic.rovicorp.com/playback.mp3?c=uLr7yniBEQZOE6_SMVyX7fKUU23ZQzDPVjJ3ONioHGo=&f=J',
		'description':'It\'s inevitable that the usual litany of labels and put-downs dominates Jay-Z\'s concerns; Shawn Carter\'s wraps-to-riches story is the meta-narrative to all his albums and only fades a little in the umpteenth retelling. ... [But] it\'s the varied production – the sinuous work of Timbaland, in the main--that really elevates Magna Carta Holy Grail beyond the usual Jay-Z document.',
	}
];






  //
  function updateMusicInfo(i){
    $('.artist').empty().append(music[i].artist);
    $('.album').empty().append(music[i].album);
    $('.album-info').empty().append(music[i].description);
  }

  //
  function getMusicIndex(imageUrlLarge){
    var isDone = false; var i = 0;

    //find the music object that has
    //the same imageURL as the one provided
    while (!isDone && i < music.length){
        if (imageUrlLarge === music[i].imageUrlLarge){
            console.log(music[i]);
            isDone= true;
        }
        else{
            i++;
        }
    }//while
    return i;
  }



