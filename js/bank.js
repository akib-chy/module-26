document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const updateTotalAmount = parseFloat(previousDepositText);
    const newDepositTotal = updateTotalAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceUpdateTotal = parseFloat(balanceTotalText);
    const balanceTotalAmount = balanceUpdateTotal + depositAmount;
    balanceTotal.innerText = balanceTotalAmount;
}) 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawTotalAmount = parseFloat(withdrawAmountText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotalText = parseFloat(newWithdrawTotal);
    const totalWithdrawAmmount = withdrawTotalAmount + newWithdrawTotalText;
    console.log(totalWithdrawAmmount)
    withdrawTotal.innerText = totalWithdrawAmmount;
    
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    const balanceTotalUpdate = balanceTotalAmmount - withdrawTotalAmount;
    balanceTotal.innerText = balanceTotalUpdate;
    withdrawInput.value = ''; */
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    const totlaBalance = balanceTotalAmmount - withdrawTotalAmount;
    balanceTotal.innerText = totlaBalance;
    withdrawInput.value = '';
})