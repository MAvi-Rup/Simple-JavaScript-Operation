//Get Input Function
function getInputField(id){
    const input = document.getElementById(id+'-input')
    const inputValue = parseFloat(input.value)
    return inputValue
}
//Error Message Function
function errMessage(message){
    const alert = `                
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Error! </strong>${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    const alertText = document.getElementById('alert-info')
    alertText.innerHTML = alert;
}
// Calulate Function
function calculateUpdate(foodTotal,rentTotal,clothesTotal,inputIncome,totalExpense,totalBalance){
    if(foodTotal>0 && rentTotal>0 && clothesTotal>0 && inputIncome>0){
        const tottal= foodTotal+rentTotal+clothesTotal
        if(tottal<inputIncome){
            totalExpense.innerText = tottal;
            totalBalance.innerText = inputIncome-tottal
            document.getElementById('alert-info').style.display= 'none'
        }else{
            document.getElementById('alert-info').style.display= 'block'
            document.getElementById('balance-total').innerText= ''
            document.getElementById('expenses-total').innerText= ''
            errMessage('Insufficient Balance in your Account')
        }
    }else{
        document.getElementById('alert-info').style.display= 'block'
        errMessage('No Negative Value is Allowed Please Fill up this correctly')
        document.getElementById('balance-total').innerText= ''
        document.getElementById('expenses-total').innerText= ''
    }
}
//Add event Listener Calculate
document.getElementById('calculate-total').addEventListener('click',(e)=>{
    const inputIncome = getInputField('income')
    const foodTotal = getInputField('food')
    const rentTotal = getInputField('rent')
    const clothesTotal = getInputField('clothes')
    const totalExpense = document.getElementById('expenses-total')
    const totalBalance = document.getElementById('balance-total')
    calculateUpdate(foodTotal,rentTotal,clothesTotal,inputIncome,totalExpense,totalBalance)
})
//Add event Listener Saving amount
document.getElementById('save-amount').addEventListener('click',()=>{
    //Saving Amount 
    const saveinput = getInputField('save')
    const totalBalance = document.getElementById('balance-total')
    const totalBalanceValue = parseInt(totalBalance.innerText)
    const savingAmount = document.getElementById('saving-total')
    if(saveinput>0 && saveinput<=100){
        if(totalBalanceValue>0){
            //Saving Amount
            const savingMoney = (saveinput*totalBalance.innerText)/100
            savingAmount.innerText = savingMoney.toFixed(2);
            //Remainning Balance
            const remainingBalance = document.getElementById('remaining-total')
            const lastBalance = totalBalance.innerText - savingMoney
            remainingBalance.innerText = lastBalance.toFixed(2);
            document.getElementById('alert-info').style.display= 'none'
        }else{
            document.getElementById('saving-total').innerText= ''
            document.getElementById('remaining-total').innerText= ''
            return errMessage("Your Balance Cannot be 0")
        }
    }else{
        document.getElementById('alert-info').style.display= 'block'
        document.getElementById('saving-total').innerText= ''
        document.getElementById('remaining-total').innerText= ''
        return errMessage("Please fill-up the input field correctly")
    }
})