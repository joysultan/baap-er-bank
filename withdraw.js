document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawElement = document.getElementById('withdraw-field');
    const withdrawElementString = newWithdrawElement.value;
    const newWithdraw = parseFloat(withdrawElementString);
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    const currentWithdraw = previousWithdraw + newWithdraw;
    previousWithdrawElement.innerText = currentWithdraw;

    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotal = balanceTotalElement.innerText;

    const previousBalance = parseFloat(previousBalanceTotal);
    
    const totalWithdraw = previousBalance - newWithdraw;
    balanceTotalElement.innerText = totalWithdraw;
    newWithdrawElement.value = '';
    
})