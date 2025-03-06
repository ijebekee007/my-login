function ValidateAndstoredata() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    //simple validation 
    if(name === ''|| email === '' || password === '' || confirmpassword === '') {
        alert('Please fill in all fields');
        return;
    }
    //Username validation (example: only letters,special character and numbers allowed)
    const usernameijk007 =/^[a-zA-Z0-9]+$/;
    if(!usernameijk007.text(name)) {
        alert('Invalid username. Only letters, special character and numbers are allowed');
        return;
    }

    // store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('e-mail',email);
    localStorage.setItem('password',password);
    localStorage.setItem('confirmpassword',confirmpassword);

    // store data in local storage
    localStorage.getItem('e-mail',email);
    localStorage.getItem('password',password);

    // Add event listener to a button 
    document.getElementById('submit').addEventListener('click', ValidateAndstoredata);
}
function signup() {
    const name = document.getElementById('signupNameField').value;
    const email = document.getElementById('signupEmailField').value;
    const phone= document.getElementById('signupPhoneField').value;
    const password= document.getElementById('signupPasswordField').value;
    const recaptchaResponse = grecaptcha.getResponse();
}

    //simple validation 
    if (name === ''|| email === '' || password === '' || confirmpassword === '') {
        alert('Please fill in all fields');
        return;
    }
    //Username validation (example: only letters,special character and numbers allowed)
    const usernameijk007 =/^[a-zA-Z0-9]+$/;
    if(!usernameijk007.text(name)) {
        alert('Invalid username. Only letters, special character and numbers are allowed');
        return;
    }

    // store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('e-mail',email);
    localStorage.setItem('password',password);
    localStorage.setItem('confirmpassword',confirmpassword);

    // store data in local storage
    localStorage.getItem('e-mail',email);
    localStorage.getItem('password',password);

    // Add event listener to a button 
    document.getElementById('submit').addEventListener('click', ValidateAndstoredata);

function googlerecaptcha() {
    grecaptcha.ready.function()
        grecaptcha.execute('6LdiZusqAAAAAEQSF26hyvh1NRBM1dCN4upmgwHA',{action: 'submit'}).then(function(token) {
            //you can now use the token to verify the user on the server side
    });
    document.getElementById("loginform").addEventListener("submit", function(event) {
    Event.preventDefault(); //prevent form submission
    });

    if(!recaptchaResponse){
        alert('please complete the reCAPTCHA');
        return;
    }
    //get reCAPTCHA response
    let recaptchaResponse= grecaptcha.getResponse();

    if (!recaptchaResponse){
        document.getElementById("error-message").textContent="please verify that you are human";
        return;
    }
    //if reCAPTCHA is verified, proceed wwith form submission
    alert("Login Sucessful! (Proceed to backend validation");
    //You can now seend form data to your backend server

    function displayerrorMessage(message){
        const errormesaage = document.getElementById('errorMessage');
        errormesaage.textContent =message
    }
}