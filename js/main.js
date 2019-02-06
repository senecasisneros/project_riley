function mobile() {
  $(".nav").each(function() {
    let menulist = $(this)
      .children(".nav-menu")
      .html(); //Get the HTML contents of the first element in the set of matched elements.
    let menu =
      "<div class='nav-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div>";
    $(this).prepend(
      "<div class='nav-toggled nav-closed'>" +
        menu +
        "<ul>" +
        menulist +
        "</ul></div>"
    );
  });
}

function menuAdapt() {
  $(".nav").each(function() {
    if (
      $(this)
        .parent()
        .width() < 768
    ) {
      $(this)
        .children(".nav-menu")
        .hide(0);
      $(this)
        .children(".nav-toggled")
        .show(0);
    } else {
      $(this)
        .children(".nav-menu")
        .show(0);
      $(this)
        .children(".nav-toggled")
        .hide(0);
    }
  });
}

$(function() {
  mobile();
  menuAdapt();
  $(".nav-toggled, .nav-toggled .nav-button").click(function() {
    if ($(this).is(".nav-closed")) {
      $(this)
        .find("> ul")
        .stop()
        .show(300);
      $(this).removeClass("nav-closed");
    } else {
      $(this)
        .find(" > ul")
        .stop()
        .hide(300);
      $(this).addClass("nav-closed");
    }
  });
});

/* 	hide mobile menu on resize */
$(window).resize(function() {
  menuAdapt();
});
