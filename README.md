# Javascript Form Validade

This is a simple form page with a vanilla javascript validation.<br/>
This form tries to bring a better user experience by showing where is the incorrect field or wrong. 

The rules are:
- Email field must be a valid email 
- Password must have between 8 and 16 characters, small letters, capital letters, and numbers.



![Screeshot](/screeshots/formValidate.jpg)
<br/><br/>



# Validation

All validations rules are on <b>form.js</b> on <b>formValidation</b> class.

The constructor receives 2 parameters: email and password HTML selector to validate each and return a warning directly on the field.
<hr/>

The only public function is <b>formValidate</b>, which receives a boolean value from email and password validation and returns true (the form is valid).

    formValidate() {
        if(this.#emailValidate() && this.#passwordValidate() ) {
            return true;
        }
    }
<hr/>

<h2>Email and Password Validation</h2>
Both are private functions. The first validation is to check field value is not empty.
<br/><br/>

<h3>Email</h3>
On email, validation checks if is filled a valid email, then removes all empty spaces and converts all letters to lowercase.
<br/><br/>

<h3>Password</h3>
On the password case firstly remove all empty spaces and check password length, then check if is a valid password between 8 and 16 characters, and contains small letters, capital letters, and numbers.
<hr/>