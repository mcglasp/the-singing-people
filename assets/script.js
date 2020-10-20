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
          document.getElementById("navbar").style.height = "54px";
          document.getElementById("navbar").style.padding = "0px 8px 4px 8px";
          document.getElementById("logo").style.fontSize = "0.5rem";
                } else {
          document.getElementById("navbar").style.height = "98px";
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
          document.getElementById("navbar").style.height = "45px";
          document.getElementById("logo").style.fontSize = "1rem";
          document.getElementById("navbarToggler").style.height = "0.1rem";
        } else {
          document.getElementById("navbar").style.height = "98px";
          document.getElementById("logo").style.fontSize = "2rem";
          
        }
      }
  }
}

var x = window.matchMedia("(max-width: 990px)")
mobileFunction(x) // Call listener function at run time
x.addListener(mobileFunction) // Attach listener function on state changes