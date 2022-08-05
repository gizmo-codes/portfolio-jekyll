
(function($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
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


// Contact Form
$( document ).ready(function() {    
        
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'https://mailbear.omzig.dev/api/v1/form/VK4vEhI56YdBPyV5IaDEg3vDCt5MEfvJ',
        //url: 'http://192.168.1.186:4411/api/v1/form/10810dce-1074-4988-a8f5-4c538a749a95',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function(data) {
            console.log("Data: ",data)
            $contactForm.find('.overlay div').html('<div class="alert alert--loading"><i class="fa fa-circle-o-notch fa-spin"></i> &nbsp; Sending message...</div>');
            $contactForm.find('.overlay').fadeIn();
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.find('.overlay div').html('<div class="alert alert--success"><i class="fa fa-check"></i> &nbsp; Your message was sent successfully!</div>');
            $contactForm.find('.overlay').fadeIn();
        },
        error: function(err) {
            console.log("Error:",err)
            $contactForm.find('.alert--loading').hide();
            $contactForm.find('.overlay div').html('<div class="alert alert--error"><i class="fa fa-warning"></i> &nbsp; Oops, something went wrong :(<br>Please copy my Email in the bottom right instead!</div>');
            $contactForm.find('.overlay').fadeIn();
        }
    });
});
$contactForm.find('.overlay').click(function(e) {
    $(this).fadeOut(); 
});                
});


// Function to copy my eMail to clipboard when mail icon is clicked.
function copyEmail() {
    var copyText = "mail@omzig.dev";
    navigator.clipboard.writeText(copyText);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }