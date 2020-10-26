// CREDIT W3Schools website for core code below. Reduces navbar size on scroll.

function mobileFunction(x) {
  if (x.matches) { // If media query matches
    window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("navbar").style.minHeight = "45px";
          document.getElementById("navbar").style.padding = "0px 8px 0px 8px";
                    document.getElementById("navbar-toggler").style.margin = "4px 8px 4px 8px";

          document.getElementById("logo").style.fontSize = "1rem";
                } else {
          document.getElementById("navbar").style.minHeight = "98px";
          document.getElementById("logo").style.fontSize = "2rem";
          
        }
      }
  } else {
       window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("navbar").style.minHeight = "55px";
                    document.getElementById("navbar").style.padding = "0px 8px 4px 8px";
          document.getElementById("logo").style.fontSize = "1rem";
        //   document.getElementById("navbarToggler").style.height = "0.1rem";
        } else {
          document.getElementById("navbar").style.minHeight = "98px";
          document.getElementById("logo").style.fontSize = "2rem";
          
        }
      }
  }
}

var x = window.matchMedia("(max-width: 990px)")
mobileFunction(x) // Call listener function at run time
x.addListener(mobileFunction) // Attach listener function on state changes

//Automatically closing toggler on click. Solution found at https://bootstrapstudio.io/forums/topic/how-to-get-a-website-menu-to-collapse-after-selection-on-mobile/ and code provided by user buntonn.
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  //Adds an offset to anchor tags, allowing headings to be places under below the fixed navbar, rather than be obscured by it. Code found on Stack Overflow and written by user Eric Olsen.

  window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 120);
});