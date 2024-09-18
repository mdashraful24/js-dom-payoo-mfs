// Step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function () {
    
    // Step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('loin button click');

    // step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})