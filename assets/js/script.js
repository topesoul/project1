if (document.getElementById("parallaxElementId")) {
    var scrolled = window.scrollY || window.pageYOffset;
    var parallaxElement = document.getElementById("parallaxElementId");
  
    // Define a function to update the parallax effect
    function updateParallax() {
      var coords = scrolled * 0.5 + "px";
      parallaxElement.style.transform = "translateY(" + coords + ")";
    }
  
    // Define a function to handle the scroll event
    function handleScroll() {
      // Update the scrolled variable
      scrolled = window.scrollY || window.pageYOffset;
      // Request the browser to run the updateParallax function
      requestAnimationFrame(updateParallax);
    }
  
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('mailingListSignup');
    if (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }
  });
  