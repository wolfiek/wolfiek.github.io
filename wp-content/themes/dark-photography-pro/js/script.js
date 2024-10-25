/* ===============================================
  Open header search
=============================================== */

function dark_photography_pro_open_search_form() {

  jQuery('.header-search .search-form').addClass('is-open');
  jQuery('body').addClass('no-scrolling');
  setTimeout(function(){
     jQuery('.search-form  #header-searchform input#header-s').filter(':visible').focus();
     jQuery('.close-search-form').show();
     jQuery('.search-form #searchform #search').focus();
  }, 100);

  return false;
}

jQuery( ".header-search a.open-search-form").on("click", dark_photography_pro_open_search_form);

/* ===============================================
  Close header search
=============================================== */

function dark_photography_pro_close_search_form() {
  jQuery('.header-search .search-form').removeClass('is-open');
  jQuery('body').removeClass('no-scrolling');
  jQuery('.close-search-form').hide();
}

jQuery( ".header-search a.close-search-form").on("click", dark_photography_pro_close_search_form); 


/* ===============================================
	TRAP TAB FOCUS ON MODAL SEARCH
============================================= */

jQuery('.search-form #searchform #search').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform :input.search-submit').focus();
  }
});

jQuery('.search-form #searchform :input.search-submit').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form a.close-search-form').focus();
  }
});

jQuery('.search-form a.close-search-form').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform #search').focus();
  }
});
 
/* ===============================================
	OWL CAROUSEL SLIDER SECTION 
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#slider .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL OUR COUNTER SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#counter .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:20,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL Testimonial SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#testimonial .owl-carousel');
    owl.owlCarousel({
    nav: true,
    margin:30,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL OUR TEAM SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#our_team .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:20,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL RECENT BLOG SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#recent_blog .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:30,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});


/* ===============================================
  OWL CAROUSEL SPONSORS SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#sponsors .owl-carousel');
    owl.owlCarousel({
    nav: false,
    margin:30,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 6
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

 
/* ===============================================
  SCROLL TO TOP BUTTON
=============================================== */
var btn = jQuery('#button_scroll');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});


/* ===============================================
 PRELOADER
=============================================== */

jQuery(window).load(function(){
  jQuery('.cssloader').fadeOut('slow',function(){jQuery(this).remove();});
});


/* ===============================================
  OPEN Menu
============================================= */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* ===============================================
 STICKY HEADER
=============================================== */
  
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 0){  
    jQuery('#site-navigation').addClass("fix-sticky");
  }
  else{
    jQuery('#site-navigation').removeClass("fix-sticky");
  }
});

/* ===============================================
  COUNTER SECTION
============================================= */
   
jQuery(document).ready(function() {

  var counters = jQuery(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 0);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});



/* ===============================================
 PRODUCTS IMAGE HOVER EFFECTS
=============================================== */


jQuery( ".img-wrapper" ).hover(
  function() {
    jQuery(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    jQuery(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $overlay = jQuery('<div id="overlay"></div>');
var $image = jQuery("<img>");
var $prevButton = jQuery('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = jQuery('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = jQuery('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
jQuery("#gallery_div").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
jQuery(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = jQuery(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  jQuery(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  jQuery("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = jQuery("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = jQuery('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = jQuery($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = jQuery("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) { 
    // Fade in the next image
    jQuery("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    jQuery("#overlay img").attr("src", jQuery($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  jQuery("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = jQuery("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = jQuery('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = jQuery($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  jQuery("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  jQuery("#overlay").fadeOut("slow");
});

