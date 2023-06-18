const reservation = JSON.parse(localStorage.getItem('reservation'));

const message = `
  Thank you for your reservation, ${reservation.name} ${reservation.surname}!
  You have reserved a table for ${reservation.guests} guests.
  Your desired reservation date is ${reservation.date}.
  Your seating plan preference is ${reservation.seatingPlan}.
  ${reservation.request}.

`;

document.querySelector('#confirmation-message').textContent = message;

// Clear reservation from local storage
localStorage.removeItem('reservation');
