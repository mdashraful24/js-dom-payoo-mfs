document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('added money');

        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoneyNumber, pinNumber);

        if (pinNumber === '1234') {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            const updateBalance = balanceNumber + addMoneyNumber;

            document.getElementById('account-balance').innerText = updateBalance;
        }
        else {
            alert('Try again later')
        }
    })