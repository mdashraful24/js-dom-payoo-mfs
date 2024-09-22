// // Step-1: set event handler
// document.getElementById('btn-login').addEventListener('click', function () {

//     // Step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     // console.log('loin button click');

//     // step-3: get the phone, pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step-4: validate phone and pin
//     // this is temporary. You should do like this.
//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('you are login');
//         // step-5: allow user to use the website
//     }
//     else {
//         alert('wrong phone number or pin');
//     }
// })


document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        // bad way to validate
        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('you are logged in');
            window.location.href = '/js-dom-payoo-mfs/home.html';
        }
        else {
            alert('Wrong phone number or pin');
        }
    })