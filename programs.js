document.addEventListener("DOMContentLoaded", function () {
    // Add Fade-In Animation to Content
    document.querySelector(".programs-section").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".programs-section").style.transition = "opacity 1.5s ease-in-out";
        document.querySelector(".programs-section").style.opacity = "1";
    }, 300);
});

// Form Submission Handling
document.getElementById("enrollment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get user input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let program = document.getElementById("program").value;

    // Validate fields
    if (name === "" || email === "") {
        alert("⚠️ Please fill in all the fields.");
        return;
    }

    // Show Success Animation
    let form = document.getElementById("enrollment-form");
    form.style.transition = "transform 0.8s ease-out";
    form.style.transform = "scale(0.95)";
    setTimeout(() => {
        form.style.transform = "scale(1)";
    }, 800);

    // Display Confirmation Alert
    setTimeout(() => {
        alert(`✅ Enrollment Successful!\n\n📌 Name: ${name}\n📧 Email: ${email}\n📚 Program: ${program}`);
        form.reset(); // Clear form fields
    }, 1000);
});
