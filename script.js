document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  // Allowed usernames and passwords
  if (
    (username === "ICT" && password === "2424") ||
    (username === "ICT2" && password === "8899") ||
    (username === "khati chhas gang" && password === "4899")
  ) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    // ⬇️ YAHI PAR apna link daalna hai
    window.location.href = "https://sujalkk48.github.io/forICTstudent/";  

    // Example:
    // window.location.href = "https://www.youtube.com/";
    // window.location.href = "https://www.instagram.com/";
    // window.location.href = "https://sujalkk48.github.io/forICTstudent/";

  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});


