
// step 1 -add eventlistener to deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
    // getting value from deposit field
    const depositField= document.getElementById('deposit');
    const newDepositAmount=depositField.value;
    // accesing deposit display
    const depositDisplay=document.getElementById('deposit-display');
    if(newDepositAmount==''||newDepositAmount<=0){
        alert('please enter number');

    }
    else{
    // adding the value to deposit disply 
    const previousDepositDisplay=depositDisplay.innerText;
    const previousDepositDisplayNumber= parseFloat(previousDepositDisplay) ;
    const newDepositAmountNumber = parseFloat(newDepositAmount);

    var currentTotal= previousDepositDisplayNumber + newDepositAmountNumber;
    depositDisplay.innerText=currentTotal;


    // get balance total
    // getting value from balance field

    const balanceDisplay=document.getElementById('balance-display');
    const previousBalanceDisplay=balanceDisplay.innerText;
    const previousBalanceDisplayNumber= parseFloat(previousBalanceDisplay) ;
    var currentBalanceTotal=previousBalanceDisplayNumber+newDepositAmountNumber;

    balanceDisplay.innerText=currentBalanceTotal;


    // clearing the deposit fields
    depositField.value='';
    

}})
    