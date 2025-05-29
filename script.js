function checkLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  if (username === "Raka" && password === "221122") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    message.textContent = "Username atau password salah!";
  }
}