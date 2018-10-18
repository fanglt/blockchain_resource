hasScrolled = function(){
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.isopenCommunityPressed = true;

function openCommunity(){
  if (window.isopenCommunityPressed === false) {
    document.getElementById("open-hide-community").style.textDecoration = "none";
    document.getElementById("open-hide-community").style.color = "#000000";
    document.getElementById("community-list").style.display = "none";
    window.isopenCommunityPressed = true;
    return;
  } else if (window.isopenCommunityPressed === true) {
    document.getElementById("open-hide-community").style.textDecoration = "underline";
    document.getElementById("open-hide-community").style.color = "#24b2fa";
    document.getElementById("community-list").style.display = "block";
    window.isopenCommunityPressed = false;
  }
}

function goToRound1(){
  document.getElementById("slider").style.marginLeft = "0";
  document.getElementById("round-1").classList.add("active-round");
  document.getElementById("round-2").classList.remove("active-round");
  document.getElementById("round-3").classList.remove("active-round");
}

function goToRound2(){
  document.getElementById("slider").style.marginLeft = "-100%";
  document.getElementById("round-1").classList.remove("active-round");
  document.getElementById("round-2").classList.add("active-round");
  document.getElementById("round-3").classList.remove("active-round");
}

function goToRound3(){
  document.getElementById("slider").style.marginLeft = "-200%";
  document.getElementById("round-1").classList.remove("active-round");
  document.getElementById("round-2").classList.remove("active-round");
  document.getElementById("round-3").classList.add("active-round");
}

function sliderRight(){
  var leftRanger = document.getElementById("slider").style.marginLeft;
  if (leftRanger == 0 || leftRanger == "0px") {
    goToRound2();
  } else if (leftRanger == "-100%") {
    goToRound3();
  } else if (leftRanger == "-200%") {
    goToRound1();
  }
}

function sliderLeft(){
  var leftRanger = document.getElementById("slider").style.marginLeft;
  if (leftRanger == 0 || leftRanger == "0px") {
    goToRound3();
  } else if (leftRanger == "-100%") {
    goToRound1();
  } else if (leftRanger == "-200%") {
    goToRound2();
  }
}

jQuery(document).ready(function($){


  $('.dropLogin .dropbtn').click(function(e){
    var $d = $('#dropdown-login');
    if ($d.is(":visible")) { $d.hide() } else { $d.show(); }
  });
  $('.sidenav-main-mobile-links>ul>li').each(function(){
    if ($(this).find('.sub-menu').length) {
      $(this).addClass('has-sub');
      $(this).children('a').click(function(e){
        e.preventDefault();
        var subMenu = $(this).parent().find('.sub-menu');
        if (subMenu.css('display') === 'none') {
          subMenu.show();
        } else {
          subMenu.hide();
        }
      });
    }
  });

  $('.upload-ava-form input:submit').attr('style', 'display:none!important');
  $('.upload-ava-form input:file').on("change", function() {
    if ($(this).val()) {
      $('.upload-ava-form input:submit').fadeIn();
    }
  });

  $('form.upload-ava-form').on("submit", function() {
    $('.profile-ava, form.upload-ava-form').css('opacity', 0.5);
    document.body.style.cursor = 'wait';
  });
  if ($('.single-guides').length || $('.single-post').length || $('.single-events').length ) {
    $( window ).scroll(function() {
      var cardRightHeight = $('.card-right').height();
      var scroll = $(window).scrollTop();
      var sticky = $( ".card-counters.sticky" );

      if (!$('.single-events').length) {
        if (scroll > 477 && scroll < cardRightHeight + 300) {
          sticky.css( "top", (scroll - 400) + "px" );
        } else if(scroll > cardRightHeight + 300) {
          sticky.css( "top", (cardRightHeight - 100) + "px" );
        } else {
          sticky.css( "top", "50px" );
        }
      } else {
        if (scroll > 600 && scroll < cardRightHeight + 520) {
          sticky.css( "top", (scroll - 600) + "px" );
        } else if(scroll > cardRightHeight + 520) {
          sticky.css( "top", (cardRightHeight - 90) + "px" );
        } else {
          sticky.css( "top", "50px" );
        }
      }

    });
  }

  $('.gform_wrapper').on('submit', 'form', function() {
    $('input[type=submit]', this).css('opacity', 0);
  });

  // expand hentry
  bh = $('body').height();
  wh = $(window).height();
  if (bh < wh) {
    $he = $('#main .hentry');
    heh = $he.height();
    $he.height(heh + wh - bh - 1);
  }

  $('.main-header #opennav').on('click', function(){
    $("body").append("<div class='mobile-overlay'></div>");
    $("html").css('overflow', 'hidden');
    $("#mySidenav").css('right', 0);
    setTimeout(function(){
      $("#close-sidenav").show();
    }, 300);
  });

  $('#close-sidenav').on('click', function(){
    $("#mySidenav").css('right', '-220px');
    $("html").css('overflow', 'auto');
    $("#close-sidenav").hide();
    $( ".mobile-overlay" ).remove();
  });

  $('.business-page .input-text>label').each(function(){
    $(this).clone().appendTo(".material-input");
  });

  $('.steps-list__mob, .recruiters-steps-list__mob,.about-testimonials-list, .about-team-list__mob, .ourclients-list-mob, .testimonials').slick({
    dots: true
  });

  $('.main-team-owl').slick({
    dots: false,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }]
  });


  if($.isFunction($('.ourclients-list-desk').owlCarousel)) {
    $('.ourclients-list-desk').owlCarousel({
      nav: false,
      autoHeight: true,
      responsive: {
        0: {
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          items: 1
        },
        992: {
          items: 3,
          mouseDrag: false,
          touchDrag: false,
          dots: false,
        }
      }
    });
  }

  /*if($.isFunction($('.main-team-owl').owlCarousel)) {
    $('.main-team-owl').owlCarousel({
      autoHeight: true,
      nav: true,
      responsive: {
        0: {
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          items: 1
        },
        992: {
          items: 4,
          dots: false,
        }
      }
    });
  }*/

  $('.search-field-mobile').on('focus', function(){
    $('.topbar-content .float-right').animate({
      marginRight: "-230px",
    }, 2000);
  });

  $('.search-field-mobile').on('focusout', function(){
    $('.topbar-content .float-right').animate({
      marginRight: "0",
    }, 1200);
  });

  //

  if ($('body').children('#wpadminbar').length > 0) {
    document.getElementById("mySidenav").style.top = "46px";
  }

  $(".course-hide-btn").on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  $('.toggle-search-js').on('click', function(){
    $('.search-wrapper').toggleClass('hidden-on-mobile');
    if (!$('.search-wrapper').hasClass('hidden-on-mobile')) {
      $('.search-wrapper input').focus();
    }
  });

  if ($('.success-message')[0]) {
    $(window).scrollTop($('.success-message').offset().top);
  }

  $(document).on("gform_confirmation_loaded", function(e, form_id){
    $('.pum.pum-overlay').addClass('pum-success');
    $(".success-button .button").on("click", function(e){
      e.preventDefault();
      $(".pum-close.popmake-close").trigger("click");
    });
  });

  // material forms

  $('form.material, .popmake form.material, .material form, .widget.gform_login_widget, .gform_wrapper form').materialForm();

  $('.material-input label').click(function(){
    $(this).parent().find('input').trigger("focus");
  });

  if ($('form.material').find('.validation_error')[0]) {
    $(window).scrollTop($('form.material .fields-group-wrap').offset().top);
  }

  // style form again after update (ajax)

  $(document).bind('gform_post_render', function(event, formId){

    $('.popmake form.material, .user-account .gform_wrapper form, .popup-auth-container .gform_wrapper form').materialForm();

    $('.popmake .material-input label').click(function(){
      $(this).parent().find('input').trigger("focus");
    });

    $('.material-select').click(function(){
      $(this).children('input').prop("checked", true);
    });

    // autocomplete
		if ($.browser.chrome) {
			$("input").each(function() {
        $(this).attr('autocomplete', 'false'); //FALSE AS OF 2015
      });
      $("form").each(function() {
        $(this).attr('autocomplete', 'false'); //FALSE AS OF 2015
      });
		} else {
			$("input").each(function() {
        $(this).attr('autocomplete', 'off');
      });
      $("form").each(function() {
        $(this).attr('autocomplete', 'off');
      });
		}

    $('.material-input label, .popmake .material-input label').on('click', function(){
      $(this).siblings('input').trigger("focus");
      return false;
    });

    if ($('form.material').find('.validation_error')[0]) {
      $(window).scrollTop($('form.material .fields-group-wrap').offset().top);
    }

    $('.material-select').click(function(){
      $(this).children('input').prop("checked", true);
    });

    $('.material-input textarea')
      .on('focus', function(){
        $(this).siblings('label').fadeOut();
        return false;
      })
      .on('blur', function(){
        if ($(this).val().trim() == '') {
          $(this).siblings('label').fadeIn();
        }
        return false;
      });

  });


  $('.account-left-side a').on('click', function () {
    $('.account-left-side a').each(function (i, item) {
      $(item).removeClass('current')
    });
    $(this).addClass('current');
  })

});

