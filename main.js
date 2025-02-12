
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

// Form Submission Handling (Example - using a simple alert for now)
const contactForm = document.querySelector('.contact-form');

if (contactForm) { // Check if the form exists on the page
  contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      //add logic to handle requests

      // For this example, we'll just show an alert:
      alert("Message sent! (This is a placeholder.  You'll need to implement actual form submission.)");

      contactForm.reset(); // Clear the form after submission
  });
}


// Initialize and Manage Dark Theme (Moved from inline script)
const themeSwitch = document.getElementById("theme-switch");

if (themeSwitch) { // Check if the element exists
  themeSwitch.checked = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", themeSwitch.checked);

  themeSwitch.addEventListener("change", () => {
      document.body.classList.toggle("dark", themeSwitch.checked);
      localStorage.setItem("theme", themeSwitch.checked ? "dark" : "light");
  });
}


// Add Tooltips (Example - using a simple approach.)
const skillIcons = document.querySelectorAll('.skills-imgs img'); // Select all skill icons

skillIcons.forEach(icon => {
  const tooltipText = icon.getAttribute('title'); // Get text from title attribute

  if (tooltipText) { // Only add tooltip if title attribute is present
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.textContent = tooltipText;

      icon.parentNode.insertBefore(tooltip, icon.nextSibling);  // Insert after the icon

      icon.addEventListener('mouseover', () => {
          tooltip.style.display = 'block'; // Show the tooltip
      });

      icon.addEventListener('mouseout', () => {
          tooltip.style.display = 'none'; // Hide the tooltip
      });

      // Position the tooltip (you might need to adjust this based on your layout)
      tooltip.style.position = 'absolute';
      tooltip.style.top = icon.offsetTop - tooltip.offsetHeight - 5 + 'px'; // Position above the icon
      tooltip.style.left = icon.offsetLeft + icon.offsetWidth / 2 - tooltip.offsetWidth / 2 + 'px'; // Center horizontally
  }
});