// To set error message.(Login Form)
function setErrorMessage(para, type, msg) {
    const paragraph = document.querySelector("#message");
    paragraph.textContent = msg;
    paragraph.classList.remove("login__welcome-message", "login__error-message");
    paragraph.classList.add(`login__${type}-message`);
}


// To remove error message.(Login Form)
function removeErrorMessage() {
        document.querySelector("#message").classList.remove('login__error-message')
        document.querySelector("#message").classList.add('login__welcome-message')
        document.querySelector("#message").textContent = "Welcome back! Please enter your credentials to continue."
}


// To make login succssfully.(Login Form)
function loginSucc(element) {
    document.querySelector('#container-box').classList.remove("container");
    document.querySelector('#container-box').classList.add("container--hidden");
    document.querySelector("#login-succ").classList.remove("succe-box--hidden");
    document.querySelector("#login-succ").classList.add("succe-box");
}


// To add multiple events.(All)
document.addEventListener("DOMContentLoaded", () => {
    window.document.title = "Login Page";

    // To transfer sign page step one (Sign Form Step One)
    const loginForm = document.querySelector('#container-box');
    const signFormStepOne = document.querySelector('#container-stepOne');
    document.querySelector('#goToSteps').addEventListener('click', (e) => {
        e.preventDefault();
        signFormStepOne.classList.remove('container--hidden');
        loginForm.classList.add('container--hidden')
        window.document.title = "sign Page step one";
    })


    // To transfer sign page step two (Sign Form Step One) 
    const signFormStepTwo = document.querySelector("#container-stepTwo");
    const firstNextButton = document.querySelector('#nextButton')
    firstNextButton.addEventListener("click", (e) => {
        e.preventDefault();
        signFormStepOne.classList.add('container--hidden');
        signFormStepTwo.classList.remove('container--hidden');
        window.document.title = "sign Page step two";
    });


    // To fucos first next box (Sign Form Step One) 
    document.querySelector('#singConfPass').addEventListener('blur', (e) => {
        e.preventDefault();
        document.querySelector('#box-next').classList.add("hoverd-box")
    });


    // To fucos second next box (Sign Form Step Two) 
    document.querySelector('#textAreaStTwo').addEventListener('blur', (e) => {
        e.preventDefault();
        document.querySelector('#box-next-stepTwo').classList.add("hoverd-box")
    });


    // To transfer sign page step three (Sign Form Step Two)
    const signFormStepTh = document.querySelector('#container-stepThree');
    document.querySelector('#box-next-stepTwo').addEventListener('click', (e) =>{
        e.preventDefault();
        signFormStepTh.classList.remove('container--hidden');
        signFormStepTwo.classList.add('container--hidden');
        window.document.title = "sign Page last step";
    });


    // To fucos button step three (Sign Form Step Three) 
    const AcceptTerms = document.querySelector('#accept');
    AcceptTerms.addEventListener('focus', (e) => {
        e.preventDefault();
        document.querySelector('#buttonStepTh').classList.add('hoverd-box')
    });


    // To fucos input (Login Form)
    const inputUser = document.querySelector(".form_username");
    const inputPass = document.querySelector(".form_password");
    const inputs = document.querySelector("form input");
    inputs.addEventListener('click', e => {
        e.preventDefault();
        inputUser.classList.add("form__input");
        inputPass.classList.add("form__input");
        
        removeErrorMessage(inputs)
    });


    // To hoverd the button loign (Login Form)
    const hovedLoginBox = document.querySelector("#box-login");
    document.querySelector('#form_password').addEventListener('blur', e => {
        hovedLoginBox.classList.add("hoverd-box");
    });


    // To showing error message.| and login succssfully (Login Form)
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



