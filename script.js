const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

const nameCheck = /^[a-zA-Z ]{2,30}$/;
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const passwordCheck = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function validateForm(){
    if(nameCheck.test(firstName.value)){
        if (nameCheck.test(firstName.value)){
            if (emailCheck.test(email.value)){
                if (phoneCheck.test(telephone.value) || telephone.value === ''){
                    if (passwordCheck.test(password.value)){
                        if (password.value === cpassword.value && passwordCheck.test(cpassword.value)){
                            return true;
                        } else {
                            // cpassword
                            return false;
                        }
                    } else {
                        // password
                        return false;
                    }
                } else {
                    // telephone
                    return false;
                }
            } else {
                // email
                return false;
            }
        } else {
            // lastname 
            return false;
        }
    } else {
        // firstname
        return false;
    }
}

firstName.oninput = function(e){
    if (firstName.value.length < 1){
        firstName.classList.remove('correct')
        firstName.classList.remove('error')
    } else if(nameCheck.test(firstName.value)){
        firstName.classList.remove('error')
        firstName.classList.add("correct")
    } else if(!nameCheck.test(firstName.value)){
        firstName.classList.remove('correct')
        firstName.classList.add('error')
    }
};

lastName.oninput = function(e){
    if (lastName.value.length < 1){
        lastName.classList.remove('correct')
        lastName.classList.remove('error')
    } else if(nameCheck.test(lastName.value)){
        lastName.classList.remove('error')
        lastName.classList.add("correct")
    } else if(!nameCheck.test(lastName.value)){
        lastName.classList.remove('correct')
        lastName.classList.add('error')
    }
};

email.oninput = function(e){
    if (email.value.length < 1){
        email.classList.remove('error')
        email.classList.remove('correct')
    } else if (emailCheck.test(email.value)){
        email.classList.remove('error')
        email.classList.add('correct')
    } else if (!emailCheck.test(email.value)){
        email.classList.remove('correct')
        email.classList.add('error')
    }
};

telephone.oninput = function(e){
    if (telephone.value.length < 1){
        telephone.classList.remove('error')
        telephone.classList.remove('correct')
    } else if (phoneCheck.test(telephone.value)){
        telephone.classList.remove('error')
        telephone.classList.add('correct')
    } else if (!phoneCheck.test(telephone.value)){
        telephone.classList.remove('correct')
        telephone.classList.add('error')
    }
}

password.oninput = function(e){
    if (password.value.length < 1){
        password.classList.remove("error")
        document.getElementById('cpassword').disabled = true;
        document.getElementById('password-error').style.display = "none";
    } else if (passwordCheck.test(password.value)){
        password.classList.remove("error")
        password.classList.add("correct");
        document.getElementById('password-error').style.display = "none";
        document.getElementById('cpassword').disabled = false;
    } else if(!passwordCheck.test(password.value)){
        password.classList.remove("correct")
        password.classList.add("error")
        document.getElementById('password-error').style.display = "inline";
        document.getElementById('password-error').textContent = "*Must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters"
    }
};

cpassword.oninput = function(e){
    if(cpassword.value !== password.value){
        cpassword.classList.remove('correct')
        cpassword.classList.add('error')
        document.getElementById('cpassword-error').style.display = "inline";
        document.getElementById('cpassword-error').textContent = "*Passwords do not match."
    } else if(password.value === cpassword.value && passwordCheck.test(cpassword.value)){
        password.classList.remove('error');
        password.classList.add('correct');
        cpassword.classList.add('correct');
        document.getElementById('cpassword-error').style.display = "none";
    }
};