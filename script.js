document.addEventListener("DOMContentLoaded", function () {
  const loginSection = document.getElementById("login-section");
  const portfolioSection = document.getElementById("portfolio-section");
  const errorMessage = document.getElementById("error-message");

  // Hide portfolio initially
  portfolioSection.style.display = "none";

  // 🔹 Validate Login
  function validateLogin(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Dummy authentication (replace with real authentication)
    if (email === "laksh@example.com" && password === "1234") {
      loginSection.style.display = "none";  // Hide login form
      portfolioSection.style.display = "block"; // Show portfolio
      setTimeout(() => portfolioSection.classList.add("show"), 100); // Smooth transition
    } else {
      errorMessage.style.display = "block";
    }
  }

  // 🔹 Logout Function
  function logout() {
    portfolioSection.classList.remove("show");
    setTimeout(() => {
      portfolioSection.style.display = "none";
      loginSection.style.display = "flex"; // Show login form again
    }, 500);
  }

  // 🔹 Open Popup
  function openPopup(id) {
    let popup = document.getElementById(id);
    popup.style.display = "block";  // Make popup visible
    setTimeout(() => popup.classList.add("show"), 50); // Smooth fade-in
  }

  // 🔹 Close Popup
  function closePopup(id) {
    let popup = document.getElementById(id);
    popup.classList.remove("show"); // Remove show class
    setTimeout(() => popup.style.display = "none", 400); // Hide popup after transition
  }

  // 🔹 Attach functions globally (so they can be used in HTML)
  window.validateLogin = validateLogin;
  window.logout = logout;
  window.openPopup = openPopup;
  window.closePopup = closePopup;
});