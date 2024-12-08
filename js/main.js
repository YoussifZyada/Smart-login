const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("login-error");

    errorMessage.style.display = "none";

    const user = users.find((user) => user.email === email);

    if (!user) {
        errorMessage.textContent = "Email doesn't exist. Please sign up first.";
        errorMessage.style.display = "block";
    } else if (user.password !== password) {
        errorMessage.textContent = "Invalid password. Please try again.";
        errorMessage.style.display = "block";
    } else {
        window.location.href = `home.html?username=${encodeURIComponent(user.username)}`;
    }
});
