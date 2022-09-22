import {c, cs} from './helpers/selectors.js'
import { runSlide } from './slide.js'
import Validate from './form.js'

startLoader();

setTimeout( () => {
    stopLoader();
}, 1000)

const emailInput = c('#email');
const passwordInput = c('#password');
const validate = new Validate(emailInput, passwordInput);
c('#loginForm').addEventListener('submit', event => validate.formValidate(event));

runSlide()

function startLoader() {
    c('.container').style.opacity = '0';
    c('.loaderArea').style.height = '100vh';
}

function stopLoader() {
    c('.loaderArea').style.height = '0px';
    c('.container').style.opacity = '1';
}