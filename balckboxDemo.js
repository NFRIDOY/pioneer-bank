
// //veryfy the email and password
// if (email.length > 0 && password.length > 0) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://pioneer.com/api/v1/login");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const response = JSON.parse(xhr.responseText);
//             if (response.status === "success") {
//                 window.location.href = "https://pioneer.com/";
//                 } else {
//                     alert("Login Failed");
//                     }
//                     }

//                 }
//                 xhr.onerror = function() {
//                     alert("Login Failed");
//                     }
//                     xhr.send(JSON.stringify({
//                         email: email,
//                         password: password
//                         }));
//                         }
//                         });

// const email = document.getElementsByClassName("login-items").value;
            // const password = document.getElementsByClassName("login-items").value;
            // console.log("Email: ",email);
            // console.log("Password: ",password);

            
            //----------------------------
// let withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
            // let currentBalance = parseFloat(document.getElementById("add-balance").innerText);

            // let currentWithdraw = parseFloat(document.getElementById("add-withdraw").innerText);
            // let newAddBalance = currentBalance - withdrawAmount;
            // currentWithdraw = currentWithdraw + withdrawAmount;
            // // let newAddWithdraw = currentWithdraw - withdrawAmount;
            // // newAddBalance = currentWithdraw;
            // // currentWithdraw = currentWithdraw + newAddWithdraw;
            // document.getElementById("add-withdraw").innerText = currentWithdraw;
            // document.getElementById("add-balance").innerText = newAddBalance;
            // // console.log(currentWithdraw,withdrawAmount);