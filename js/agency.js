/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.navbar').outerHeight()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// FAQ accordion
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".faq-item .faq-q");

  items.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("is-open");

      // close others (option: comment these 2 lines if you want multiple open)
      document.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
        openItem.classList.remove("is-open");
        var b = openItem.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      // toggle current
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      } else {
        item.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
});

