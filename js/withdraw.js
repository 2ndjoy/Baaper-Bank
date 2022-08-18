
// step 1 -add eventlistener to withdraw
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // getting value from withdraw field
    const withdrawField= document.getElementById('withdraw');
    const newwithdrawAmount=withdrawField.value;
    // accesing withdraw display
    const withdrawDisplay=document.getElementById('withdraw-display');
    const previouswithdrawDisplay=withdrawDisplay.innerText;
    const previouswithdrawDisplayNumber=parseFloat(previouswithdrawDisplay);
    if(newwithdrawAmount=='' || newwithdrawAmount<=0){
        alert('please enter number');

    }
    else{
    // adding the value to withdraw disply 
    // const previouswithdrawDisplay=withdrawDisplay.innerText;
    // withdrawDisplay.innerText=newwithdrawAmount;
    const newwithdrawAmountNumber= parseFloat(newwithdrawAmount) ;

    const balanceDisplay=document.getElementById('balance-display');
    const previousBalanceDisplay=balanceDisplay.innerText;
    const previousBalanceDisplayNumber= parseFloat(previousBalanceDisplay) ;

    
    var currentBalanceTotal=previousBalanceDisplayNumber-newwithdrawAmountNumber;
    if (currentBalanceTotal>=0 ) {
        balanceDisplay.innerText=currentBalanceTotal;


         var currentWithdrawTotal= previouswithdrawDisplayNumber + newwithdrawAmountNumber;
         withdrawDisplay.innerText=currentWithdrawTotal;
         withdrawField.value='';
    }
    else{
        alert("Please add money")
    }

    // var currentWithdrawTotal= previouswithdrawDisplayNumber + newwithdrawAmountNumber;

    // withdrawDisplay.innerText=currentWithdrawTotal;
    // withdrawField.value='';
    
    }


    




})