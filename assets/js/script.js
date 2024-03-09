document.addEventListener("DOMContentLoaded", function () {
  
  // Parallax functionality
  var parallaxElement = document.getElementById("parallaxElementId");
  var scrolled;

  // Function to update parallax effect based on scroll position
  function updateParallax() {
    var coords = scrolled * 0.5 + "px";
    parallaxElement.style.transform = "translateY(" + coords + ")";
  }

  // Function to handle the scroll event and update parallax
  function handleScroll() {
    scrolled = window.scrollY; // Updated to use scrollY instead of pageYOffset
    requestAnimationFrame(updateParallax);
  }

  // Add scroll event listener if parallax element exists
  if (parallaxElement) {
    window.addEventListener("scroll", handleScroll);
  }

  // Form validation functionality
  var form = document.getElementById('mailingListSignup');
  
  // Event listener for form submission
  if (form) {
    form.addEventListener('submit', function (event) {
      // Check form validity and prevent default if invalid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      // Add 'was-validated' class on form submission
      form.classList.add('was-validated');
    }, false);
  }
});
