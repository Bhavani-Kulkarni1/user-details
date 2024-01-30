function saveProfile() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  alert("Profile saved successfully!");
}

function logout() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";

  alert("Logged out successfully!");
}

const savedUsername = localStorage.getItem("username");
const savedEmail = localStorage.getItem("email");

if (savedUsername !== null && savedEmail !== null) {
  document.getElementById("username").value = savedUsername;
  document.getElementById("email").value = savedEmail;
} else {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
}
