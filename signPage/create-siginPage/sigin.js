function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function setWelcomeMessage(welcomeMessage, message) {
    const welcomeMessageA = welcomeMessage.querySelector('#welcomeMessage');

    welcomeMessageA.classList.remove("hidden__welcome-message");
    welcomeMessageA.classList.add("welcome__message")
    welcomeMessageA.textContent = message;
}

function removeWelcomeMessage(removed, msg) {
    const welcomeMessageR = removed.querySelector('#welcomeMessage');

    welcomeMessageR.textContent = msg;
    welcomeMessageR.classList.remove("welcome__message");
    welcomeMessageR.classList.add("hidden__welcome-message")
    
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        createAccountForm.classList.remove("form__hidden");
        window.document.title = "SignUp Page"
    });

    document.querySelector("#linkLogin").addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        createAccountForm.classList.add("form__hidden");
        window.document.title = "Login Page";
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault()

        // Preform your AJAX/Fetch login
        
        setFormMessage(loginForm, "error", "Invalid username/password combination");

        setWelcomeMessage(loginForm, "Welcome In Our Website");
    });

    loginForm.addEventListener('click', e => {
        removeWelcomeMessage(loginForm, "msg");
        e === "msg";
    })

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length")
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});