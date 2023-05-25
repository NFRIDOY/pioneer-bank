// login btn event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
})
