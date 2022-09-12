c = (c) => document.querySelector(c);
cs = (cs) => document.querySelectorAll(cs); 


startLoader();

setTimeout( () => {
    stopLoader();
}, 2000)

function startLoader() {
    c('.container').style.opacity = '0';
    c('footer').style.display = 'none';
    c('.loaderArea').style.height = '100vh';
}

function stopLoader() {
    c('.loaderArea').style.height = '0px';
    c('.container').style.opacity = '1';
    c('footer').style.display = 'block';
}