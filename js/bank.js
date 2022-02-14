function getInputValue(inputId){
    const allInput = document.getElementById(inputId);
    const allAmountText = allInput.value;
    const allAmount = parseFloat(allAmountText);
    allInput.value = '';
    return allAmount;
}
function getInnerText(previousAmount, amount){
    const totalText = document.getElementById(previousAmount);
    const totalAmmountText =  totalText.innerText;
    const totalAmmount = parseFloat(totalAmmountText);
    totalText.innerText = totalAmmount + amount ;
}
function updateBalance(amount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else{
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}
// document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */


//     const depositAmount = getInputValue('deposit-input');

//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const updateTotalAmount = parseFloat(previousDepositText);

//     const newDepositTotal =  updateTotalAmount + depositAmount;
//     depositTotal.innerText = newDepositTotal;
//     depositInput.value = '';

//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceUpdateTotal = parseFloat(balanceTotalText);

//     const balanceTotalAmount = balanceUpdateTotal + depositAmount;
//     balanceTotal.innerText = balanceTotalAmount;
// }) 


document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = getInputValue('deposit-input');

   /*  const depositTotalText = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotalText.innerText;
    const depositTotal = parseFloat(depositTotalAmount);
    depositTotalText.innerText = depositTotal + depositInput; */ 

    getInnerText('deposit-total', depositInput);

   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositInput; */

    updateBalance(depositInput, true);
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawTotalAmount = parseFloat(withdrawAmountText); */

    const withdrawTotalAmount = getInputValue('withdraw-input');

   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotalText = parseFloat(newWithdrawTotal);
    const totalWithdrawAmmount = withdrawTotalAmount + newWithdrawTotalText; */

    getInnerText('withdraw-total', withdrawTotalAmount);

    // withdrawTotal.innerText = totalWithdrawAmmount;
    
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText);
    const balanceTotalUpdate = balanceTotalAmmount - withdrawTotalAmount;
    balanceTotal.innerText = balanceTotalUpdate;
    withdrawInput.value = ''; */

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText); 

    const totlaBalance = balanceTotalAmmount - withdrawTotalAmount;
    balanceTotal.innerText = totlaBalance; */
    updateBalance(withdrawTotalAmount , false);
})