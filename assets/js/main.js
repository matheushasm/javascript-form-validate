import {c, cs} from './helpers/selectors.js'
import { runSlide } from './slide.js'
import FormValidate from './form.js'

startLoader();
setTimeout( () => {
    stopLoader();
}, 1000)

runSlide()

const emailHtmlInput = c('#email');
const passwordHtmlInput = c('#password');
const formValidate = new FormValidate(emailHtmlInput, passwordHtmlInput);
c('#loginForm').addEventListener('submit', event => {
    event.preventDefault();

    if(formValidate.formValidate()) {
        return event.target.submit();
    }
});

function startLoader() {
    c('.container').style.opacity = '0';
    c('.loaderArea').style.height = '100vh';
}

function stopLoader() {
    c('.loaderArea').style.height = '0px';
    c('.container').style.opacity = '1';
}