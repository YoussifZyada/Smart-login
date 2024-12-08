const user = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!user) {
            alert("You must be logged in to view this page.");
            window.location.href = './index.html';
        } else {
            document.getElementById("username").textContent = user.username;
        }

        document.getElementById("logout-button").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            window.location.href = './index.html';
        });