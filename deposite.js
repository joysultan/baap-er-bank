document.getElementById('btn-deposite').addEventListener('click', function(){
        const depositeField = document.getElementById('deposite-field');

        const newDepositeAmountString = depositeField.value;

        const newDepositeAmount = parseFloat(newDepositeAmountString);

        const depositeTotalElement = document.getElementById('deposite-total');

        const previousDepositeTotalString = depositeTotalElement.innerText;
        
        const previousDepositeTotal = parseFloat(previousDepositeTotalString);

        const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

        depositeTotalElement.innerText = currentDepositeTotal;

        const balanceTotalElement = document.getElementById('balance-total');

        const previousBalanceTotal = balanceTotalElement.innerText;

        const previousBalance = parseFloat(previousBalanceTotal);


        const currentBalanceTotal = previousBalance + newDepositeAmount;

        balanceTotalElement.innerText = currentBalanceTotal;

        
        depositeField.value = '';
})