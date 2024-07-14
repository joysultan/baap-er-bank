document.getElementById('btn-deposite').addEventListener('click', function(){
        const depositeField = document.getElementById('deposite-field');
        const newDepositeAmount = depositeField.value;
        const depositeTotalElement = document.getElementById('deposite-total');
        const PreviousdepositeTotal = depositeTotalElement.innerText;
        depositeTotalElement.innerText = newDepositeAmount;
        depositeField.value = '';



})