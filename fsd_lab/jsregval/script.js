document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = ""; // Clear previous error message

    // Username Validation
    const usernameRegex = /^[A-Za-z][A-Za-z0-9]{7,15}$/;
    if (!usernameRegex.test(username)) {
        errorMessage.textContent = "Username must be 8-16 characters, start with a letter, and contain only letters and numbers.";
        return;
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "Password must be 8-16 characters, include letters, at least 1 number, and exactly 1 special character.";
        return;
    }

    // Date of Birth Validation
    const dobRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dobRegex.test(dob)) {
        errorMessage.textContent = "Date of Birth must be in the format dd-mm-yyyy.";
        return;
    }

    // Contact Number Validation
    const contactRegex = /^\d+$/;
    if (!contactRegex.test(contact)) {
        errorMessage.textContent = "Contact Number must contain numbers only.";
        return;
    }

    // Email Validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|hotmail|rediffmail)\.com$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Mail ID must end with @gmail.com, @hotmail.com, or @rediffmail.com.";
        return;
    }

    // If all validations pass
    alert("Registration successful!");
});
