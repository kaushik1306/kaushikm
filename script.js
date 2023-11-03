document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (username === "" || password === "" || confirmPassword === "") {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // You would normally send this data to a server for registration.
    alert("Registration successful!");
    document.getElementById("login-username").value = username;
    document.getElementById("login-password").value = password;

    // Show the login form
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

function login() {
    // You would normally validate login credentials and handle this on the server.
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    if (loginUsername === "user" && loginPassword === "password") {
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-display").textContent = loginUsername;
    } else {
        alert("Invalid login credentials.");
    }
}

function navigateDashboard() {
    const selectedOption = document.getElementById("dropdown-menu").value;
    alert("Navigating to " + selectedOption);
}
