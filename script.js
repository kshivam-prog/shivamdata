// Membership Form Submission
document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Membership registered successfully!');
});

// Staff Ticket Booking Form Submission
document.querySelector('.staff-booking form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Staff ticket booked successfully!');
});
