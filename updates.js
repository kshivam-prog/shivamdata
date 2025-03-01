document.addEventListener("DOMContentLoaded", function() {
    // Simulated real-time flight data (Replace with API in real project)
    const flightData = [
        { flight: "AI-101", origin: "Delhi", destination: "New York", departure: "10:30 AM", arrival: "8:45 PM", status: "On Time", location: "Over Atlantic Ocean" },
        { flight: "AI-202", origin: "Mumbai", destination: "London", departure: "2:15 PM", arrival: "6:30 PM", status: "Delayed", location: "Mumbai Airport" },
        { flight: "AI-303", origin: "Chennai", destination: "Dubai", departure: "5:00 PM", arrival: "7:45 PM", status: "Boarding", location: "Gate 5" },
        { flight: "AI-404", origin: "Bangalore", destination: "Singapore", departure: "7:00 AM", arrival: "12:15 PM", status: "Departed", location: "Over Bay of Bengal" },
        { flight: "AI-505", origin: "Hyderabad", destination: "Sydney", departure: "9:45 PM", arrival: "6:30 AM", status: "Scheduled", location: "Hyderabad Airport" },
        { flight: "AI-606", origin: "Kolkata", destination: "Bangkok", departure: "1:30 PM", arrival: "4:50 PM", status: "On Time", location: "Approaching Bangkok" }
    ];

    const tableBody = document.querySelector("#flightTable tbody");

    // Populate the flight data table
    flightData.forEach(flight => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${flight.flight}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.departure}</td>
            <td>${flight.arrival}</td>
            <td class="status-${flight.status.replace(" ", "-").toLowerCase()}">${flight.status}</td>
            <td>${flight.location}</td>
        `;

        tableBody.appendChild(row);
    });
});
