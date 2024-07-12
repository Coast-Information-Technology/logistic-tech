// This function send the quote form information to whatsapp
function sendQuote(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const companyName = document.getElementById('CompanyName').value;
    const companyAddress = document.getElementById('CompanyAddress').value;
    const service = document.getElementById('service').value;
    const dos = document.getElementById('dos').value;
    const origin = document.getElementById('origin').value;
    const note = document.getElementById('note').value;
    const psd = document.getElementById('psd').value;
    const ped = document.getElementById('ped').value;
    const tod = document.getElementById('tod').value;
    const qt = document.getElementById('qt').value;
    const weight = document.getElementById('weight').value;
    const dimension = document.getElementById('dimension').value;
    const shi = document.getElementById('shi').value;
    const arc = document.getElementById('arc').value;

    const whatsappNumber = '07031951607';
    const whatsappMessage = `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Company Name: ${companyName}
        Company Address: ${companyAddress}
        Service: ${service}
        Destination of Service: ${dos}
        Origin: ${origin}
        Special Note: ${note}
        Preferred Start Date: ${psd}
        Preferred End Date: ${ped}
        Types of Goods: ${tod}
        Quantity: ${qt}
        Weight: ${weight}
        Dimension: ${dimension}
        Special Handling Instructions: ${shi}
        Additional Requirements or Comments: ${arc}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
}


// This function send the contact form information to whatsapp
function submitFormToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const whatsappNumber = '2347031951607'; // WhatsApp number with country code
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nSubject: ${subject}\nMessage: ${message}`
    )}`;
    
    window.open(whatsappURL, '_blank');
  }


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

