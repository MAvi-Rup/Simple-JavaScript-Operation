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
   if(foodTotal>0 && rentTotal>0 && clothesTotal>0){
       const tottal= foodTotal+rentTotal+clothesTotal
       if(tottal<inputIncome){
           totalExpense.innerText = tottal;
           totalBalance.innerText = inputIncome-tottal
       }else{
           alert('Insufficient Balance in your Account')
       }
   }else{
       alert('Expenses can not be negative value')
   }
})

document.getElementById('save-amount').addEventListener('click',()=>{
    const saveinput = getInputField('save')
    
})