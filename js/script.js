 //event pada saat link diklik 
$('.page-scroll').on('click', function(e) {

	// ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element ybs
    var elemenTujuan = $(tujuan);



  // pindahkan scroll
   $('html , body').animate({
   scrollTop: elemenTujuan.offset().top - 50
   }, 1300, 'easeInOutQuad');

   e.preventDefault();


});



// parallax cokkk
// about

$(window).on ('load', function(){
     $('.pKiri').addClass('pMuncul');
     $('.pKanan').addClass('pMuncul');
 
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

    // jumbotron cok
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'

	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'

	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'

	});


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 300 ){
		$('.portfolio .thumbnail').each(function(i) {
           setTimeout(function() { 
            $('.portfolio .thumbnail').eq(i).addClass('muncul');

           }, 300 * (i+1));


		});



		


	}	

});