document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    const previousTotalWithdraw = previousWithdrawTotal + newWithdraw;
    withdrawTotal.innerText = previousTotalWithdraw;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotal);
    const currentTotalWithdraw = previousBalance - newWithdraw;
    
    balanceTotalElement.innerText = currentTotalWithdraw;

    withdrawField.value = '';




})