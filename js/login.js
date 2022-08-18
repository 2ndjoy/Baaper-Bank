// step 1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2- get the email address inside the email field
    // always remember to use .value to get text from an input value
    const userEmail= document.getElementById('user-email');
    const email = userEmail.value;
    // step 3 get passwprd
    // set id on the html
    // get the element
    // get the value from the element

    const userPassword=document.getElementById('user-password');
    const password=userPassword.value;

    //DANGER: do notverify email password on the client side
    // step 4 verify email and password
    if (email=='rahul@gmail.com' && password=='1235') {
        // location.href = "file:///G:/programing%20hero/milestone%205.1/Baaper%20Bank/bank.html";
        window.location.href='bank.html';
    }
    else{
        alert('Invalid user');
    }

})