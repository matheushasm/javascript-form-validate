class Form {
    #email = null;
    #password = null;

    constructor(emailInput, passwordInput) {
        this.#email = emailInput;
        this.#password = passwordInput;
    }

    formValidate(eventForm) {
        eventForm.preventDefault();

        if(this.#emailValidate() && this.#passwordValidate() ) {
            return eventForm.target.submit();
        }
    }

    #emailValidate() { 
        const value = String(this.#email.value).toLowerCase().trim();
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(value === '') {
            this.#inputStyle(this.#email);
            return false;
        }

        if(!value.match(re)) {
            this.#email.value = '';
            this.#inputStyle(this.#email, '#f00', 'Must be a valid email');
            return false;
        }
        return true;
    }

    #passwordValidate() {
        const value = String(this.#password.value).trim();

        if(value === '') {
            this.#inputStyle(this.#password);
            return false;
        }

        if(value.length < 8 || value.length > 16) {
            this.#password.value = '';
            this.#inputStyle(this.#password, '#f00', 'Must have between 8 and 16 characters.');
            return false;
        }

        if(!value.match(/[a-z]/) || !value.match(/[A-Z]/) || !value.match(/[0-9]/)) {
            this.#password.value = '';
            this.#inputStyle(this.#password, '#f00', 'Must have small and upper letters');
            return false;
        }
        return true;
    }

    #inputStyle(input, borderColor='#f00', message='Required field') {
        input.style.borderColor =   borderColor;
        input.placeholder = message;
    }
}

export default class FormValidate extends Form {}