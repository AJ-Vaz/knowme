// Handle form submission (simple client-side validation)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message, we will get back to you soon!');
    // Clear form fields
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
