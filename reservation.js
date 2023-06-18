const form = document.querySelector('#reservation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = form.elements['name'].value;
  const surname = form.elements['surname'].value;
  const guests = form.elements['guests'].value;
  const seatingPlan = form.elements['seating-plan'].value;
  const date= form.elements['date'].value;
  const request= form.elements['request'].value===null ? "No personal request" : "Personal request is saved";

  // Create reservation object
  const reservation = {
    name,
    surname,
    guests,
    seatingPlan,
    date,
    request,
  };

  // Store reservation in local storage
  localStorage.setItem('reservation', JSON.stringify(reservation));

  // Redirect to confirmation page
  window.location.href = 'confirmation.html';
});
