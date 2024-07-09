
// This Function below sends the email to the specified email
function sendNewsletterEmail() {
    var email = document.getElementById("newsletterEmail").value;
    var subject = "Newsletter Subscription";
    var body = `Hello,\n\nI would like to subscribe to the newsletter with the email: ${email}.\n\nThank you.`;

    // Construct the mailto URL
    var mailtoUrl = `mailto:Info@hysyncs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto URL
    window.location.href = mailtoUrl;
  }


// This Function below sends a quote to the whatsapp number specified
function sendQuote(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var service = document.getElementById("service").value;
    var note = document.getElementById("note").value;

    // Format the message
    var message = `Hello, I would like to request a quote:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nService: ${service}\nSpecial Note: ${note}`;

    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(message);

    // Open the WhatsApp URL
    var whatsappUrl = `https://wa.me/2347031951607?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }




  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000, // 5 seconds
      autoplayHoverPause: true
    });
  });


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

