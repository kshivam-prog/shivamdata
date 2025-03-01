document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let membership = document.getElementById("membership").value;

    if (fullName && email && password && membership) {
        alert("Account Created Successfully! Welcome to Air India.");
    } else {
        alert("Please fill in all the fields.");
    }
});
