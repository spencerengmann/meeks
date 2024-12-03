document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
  
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
  
      
      const message = document.createElement('div');
      message.textContent =
        'Thank you for choosing us, we will contact you as soon as possible.';
      message.style.cssText = `
        background-color: #4caf50;
        color: white;
        padding: 15px;
        text-align: center;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 1.2rem;
      `;
  
     
      bookingForm.parentElement.appendChild(message);
  
      
      setTimeout(() => {
        message.remove();
      }, 10000);
    });
  });
  