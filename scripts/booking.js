// Function to detect if the user is on a mobile device
function isMobile() {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get user input
  const name = event.target.elements["name"].value.trim();
  const message = event.target.elements["comments"].value.trim();

  // Create a temporary link element for redirection
  const a = document.createElement("a");

  if (isMobile()) {
    // If on mobile, redirect to SMS app
    a.href = `sms:2084031180?body=Hello, my name is ${name}.%0A${message}`;
  } else {
    // If on desktop, redirect to email client
    a.href = `mailto:spencerengmann@gmail.com?subject=Booking Request&body=Hello, my name is ${name}.%0A${message}`;
  }

 
  a.click();
}

// Initialize the booking form functionality
function initBookingForm() {
  const bookingForm = document.getElementById("booking-form");

  // Attach event listener to the form
  bookingForm.addEventListener("submit", handleFormSubmission);
}

// Call the init function on DOM content loaded
document.addEventListener("DOMContentLoaded", initBookingForm);
