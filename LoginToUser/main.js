


// To set error message.
function setErrorMessage(para, type, msg) {
    const paragraph = document.querySelector("#message");
    paragraph.textContent = msg;
    paragraph.classList.remove("login__welcome-message", "login__error-message");
    paragraph.classList.add(`login__${type}-message`);
}

// To remove error message.
function removeErrorMessage() {
        document.querySelector("#message").classList.remove('login__error-message')
        document.querySelector("#message").classList.add('login__welcome-message')
        document.querySelector("#message").textContent = "Welcome back! Please enter your credentials to continue."
}

// To make login succssfully.
function loginSucc(element) {
    document.querySelector('#container-box').classList.remove("container");
    document.querySelector('#container-box').classList.add("container--hidden");
    document.querySelector("#login-succ").classList.remove("succe-box--hidden");
    document.querySelector("#login-succ").classList.add("succe-box");
}



// To add multiple events.
document.addEventListener("DOMContentLoaded", () => {
    window.document.title = "Login Page";

    // To fucos input
    const inputUser = document.querySelector(".form_username");
    const inputPass = document.querySelector(".form_password");
    const inputs = document.querySelector("form input");
    inputs.addEventListener('click', e => {
        e.preventDefault();
        inputUser.classList.add("form__input");
        inputPass.classList.add("form__input");
        
        removeErrorMessage(inputs)
    });
    
    // To hoverd the button loigin
    const hovedLoginBox = document.querySelector("#box-login");
    inputs.addEventListener('blur', e => {
        hovedLoginBox.classList.add("hoverd-box");
    });

    // To showing error message.| and login succssfully
    const form = document.getElementById("form_login");
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (inputUser.value && inputPass.value) {
            document.title = "Login Succssfully"
            loginSucc(form);
        } else {
            setErrorMessage(form, "error" , 'Invalid username/password combination');
        }
    })

});



