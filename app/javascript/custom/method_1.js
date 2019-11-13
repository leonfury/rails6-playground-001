// required from application.js via
//  require("custom/cuba")
console.log('custom/method_1 loaded');

// function require window. to export to front end
window.listenerCuba = function listenerCuba() {
    console.log('From custom/method_1.js');
    document.getElementsByTagName('h1')[0].innerText = "From custom/method_1.js"
}
