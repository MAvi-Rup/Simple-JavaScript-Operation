function getInputField(id){
    const input = document.getElementById(id+'-input')
    const inputValue = parseFloat(input.value)
    return inputValue
}

document.getElementById('calculate-total').addEventListener('click',(e)=>{
    const inputIncome = getInputField('income')
    const foodTotal = getInputField('food')
    const rentTotal = getInputField('rent')
    const clothesTotal = getInputField('clothes')
    const totalExpense = document.getElementById('expenses-total')
    const totalBalance = document.getElementById('balance-total')
   if(foodTotal>0 && rentTotal>0 && clothesTotal>0 && inputIncome>0){
       const tottal= foodTotal+rentTotal+clothesTotal
       if(tottal<inputIncome){
           totalExpense.innerText = tottal;
           totalBalance.innerText = inputIncome-tottal
       }else{
           alert('Insufficient Balance in your Account')
       }
   }else{
       alert('Please enter the right value on the field')
   }
})

document.getElementById('save-amount').addEventListener('click',()=>{
    //Saving Amount
    const saveinput = getInputField('save')
    const totalBalance = document.getElementById('balance-total')
    const savingAmount = document.getElementById('saving-total')
    if(saveinput>0){
        const savingMoney = (saveinput*totalBalance.innerText)/100
        savingAmount.innerText = savingMoney;
        const remainingBalance = document.getElementById('remaining-total')
        const lastBalance = totalBalance.innerText - savingMoney
        remainingBalance.innerText = lastBalance
    }else{
        alert('Please input a positive percentage of saving amount')
    }

    //Remainning Balance

})