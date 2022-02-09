// Deposit Balance and Total Balance 

document.getElementById('depo-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('depo-input').value;

    if (depositInput < 0) {
        alert('Invalid Amount!');
        document.getElementById('depo-input').value = '';
    }
    else {
        // deposite balance
        const depoBalance = document.getElementById('depo-blnc');
        const depoOldBalance = parseInt(depoBalance.innerText);


        const depoCurrentBalance = depoBalance.innerText = parseInt(depositInput);

        const depoNewBalance = depoOldBalance + depoCurrentBalance;
        depoBalance.innerText = depoNewBalance;

        // total balance 
        const totalBalance = document.getElementById('bank-blnc');
        const currentBankBalance = parseInt(totalBalance.innerText);
        const newBankBalance = currentBankBalance + parseInt(depositInput);
        totalBalance.innerText = newBankBalance;


        // clear input 
        document.getElementById('depo-input').value = '';
    }


})


// withdraw balance and total balance calculation 

document.getElementById('wtd-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('wtd-input').value;
    if (withdrawInput < 0) {
        alert('Invalid Amount!')
        document.getElementById('wtd-input').value = '';
    }
    else {
        const withdrawBalance = document.getElementById('wtd-blnc');
        const withdrawCurrentBalance = parseInt(withdrawBalance.innerText);


        const withdrawNewBalance = withdrawCurrentBalance + parseInt(withdrawInput);

        withdrawBalance.innerText = withdrawNewBalance;


        // balance calculation 
        const balance = document.getElementById('bank-blnc');
        const currentBalance = parseInt(balance.innerText);
        const newBalance = currentBalance - withdrawInput;
        balance.innerText = newBalance;

        document.getElementById('wtd-input').value = '';
    }
})