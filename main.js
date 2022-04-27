// Loader Screen //

$(window).on('load', function() {
	$(".loader").slideUp("slow");
	});

	setTimeout(function(){ 
		$('.loader').slideUp("slow");
	}, 2000);

// Homepage Blur on Scroll //

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	$('.header-background-home').css({
		filter:"blur(" + (scroll/200) + "px)"
	})
})

// Other Blur on Scroll //

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	$('.header-background-about, .header-background-products, .header-background-reviews, .header-background-contact, .header-background-gallery').css({
		filter:"blur(" + (scroll/50) + "px)"
	})
})

// "To Top" Button //

var mybutton = document.getElementById("to-top-button-container");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

document.body.scrollTo({top: 0, behavior: 'smooth'});
document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

// Universal Maps Button //

function mapsSelector() {
	if
	  ((navigator.platform.indexOf("iPhone") != -1) || 
	   (navigator.platform.indexOf("iPad") != -1) || 
	   (navigator.platform.indexOf("iPod") != -1))
	  window.open("maps://maps.google.com/maps/dir/?daddr=35.6132567,-88.8361511&amp;ll=");
  else
	  window.open("https://maps.google.com/maps/dir/?daddr=35.6132567,-88.8361511&amp;ll=");
  }

//Contact//

let grid = document.querySelector('.grid');
let msnry = new Masonry( grid, {
	itemSelector: 'none',
	columnWidth: '.grid__col-sizer',
	gutter: '.grid__gutter-sizer',
	percentPosition: true,
	stagger: 30,
	visibleStyle: { transform: 'translateY(0)', opacity: 1 },
	hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});
imagesLoaded( grid, function() {
	grid.classList.remove('are-images-unloaded');
	msnry.options.itemSelector = '.grid__item';
	let items = grid.querySelectorAll('.grid__item');
	msnry.appended( items );
});
let infScroll = new InfiniteScroll( grid, {
	path: getPenPath,
	append: '.grid__item',
	outlayer: msnry,
	status: '.page-load-status',
});
componentDidMount(); {
	window.instgrm.Embeds.process();
  }