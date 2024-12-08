document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const signupButton = document.getElementById("signup-button");
    const successMessage = document.getElementById("signup-success");
    const errorMessage = document.getElementById("signup-error");

    signupButton.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        if (!username || !email || !password) {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }

        const emailExists = users.some((user) => user.email === email);

        if (emailExists) {
            errorMessage.textContent = "Email already exists. Try a different one.";
            errorMessage.style.display = "block";
            return;
        }

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        successMessage.style.display = "block";
        successMessage.textContent = "Account created successfully!";
    });
});
