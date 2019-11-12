// required from application.js via
//  require("custom/cuba")
console.log('custom/cuba loaded');

// function require window. to export to front end
window.listenerCuba = function listenerCuba() {
    console.log('From custom/cuba.js');
    document.getElementsByTagName('h1')[0].innerText = "From custom/cuba.js"
}
