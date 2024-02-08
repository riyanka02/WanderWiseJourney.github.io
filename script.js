alert("Welcome to WanderWiseJourney website");

function toggleForm() {
    var form = document.getElementById("signupForm");
    form.classList.toggle("hidden");
}

function submitForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can add further logic here, such as sending the data to a server or validating the inputs.

    // For simplicity, let's log the values to the console.
    console.log("Email: " + email);
    console.log("Password: " + password);
}
