function notNullChecker(num) {
    if (num > 0) {
        return true;
    }
    else {
        alert("Plz Enter Digit");
        return false;
    }

    // if (num === null || num === undefined || num === "") {
    //     alert("Please enter a number");
    //     // return false;
    // }
    // else {
    //     return num;
    // }
    // inputAmount
}
// document.getElementById("diposit-amount").value=0;
// console.log(document.getElementById("diposit-amount").value);

function isEnoughBalance(Balance, input) {
    if (Balance >= input) {
        return true;
    }
    else {
        return false;
    }
}
function isConfirm(Balance, input) {
    const confirm = confirm("Are you sure?");
    if (confirm) {
        return true;
    }
    else {
        return false;
    }
}


function amountUpdate(valueId, targetId) {
    let inputAmount = parseFloat(document.getElementById(valueId).value);
    inputAmount = notNullChecker(inputAmount);
    let currentAmount = parseFloat(document.getElementById(targetId).innerText);
    currentAmount = currentAmount + inputAmount;
    document.getElementById(targetId).innerText = currentAmount;
}
function amountWithdraw(valueId, targetId) {
    let inputAmount = parseFloat(document.getElementById(valueId).value);
    let currentBalance = parseFloat(document.getElementById(targetId).innerText);
    // inputAmount = notNullChecker(inputAmount);
    currentBalance = currentBalance - inputAmount;
    document.getElementById(targetId).innerText = currentBalance;
}

// Diposit-btn event handler
const dipositBtn = document.getElementById("diposit-btn");
dipositBtn.addEventListener("click", function () {
    //HOW TO USE amountUpdate("INPUT", "UPDATE");
    amountUpdate("diposit-amount", "add-diposit");
    amountUpdate("diposit-amount", "add-balance");

    document.getElementById("diposit-amount").value = ""; // Clearing the input Section
})

// Withdraw-btn event handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    let input = parseFloat(document.getElementById("withdraw-amount").value);
    let Balance = parseFloat(document.getElementById("add-balance").innerText);

    if (notNullChecker(input)) {
        if (isEnoughBalance(Balance, input)) {
            if (Balance == input) {
                // document.body.innerHTML = "Equal";
                const con = confirm("Are You Sure? You Want to Withdraw All Amount?");
                console.log("Are You Sure? You Want to Withdraw All Amount?", con);
                // isConfirm();
                if (con) {
                    amountUpdate("withdraw-amount", "add-withdraw");
                    amountWithdraw("withdraw-amount", "add-balance");
                }
                else {
                    alert("Your Tansection is canceled");
                }
            }
        }
        else {
            alert("You Do not Have Enough Balance");
        }
    }
    else {
        alert("Your Tansection is canceled");
    }


    document.getElementById("withdraw-amount").value = ""; // Clearing the input Section
})
