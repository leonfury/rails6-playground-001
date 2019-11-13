// required from application.js via
//  require("custom/cuba")
console.log('custom/method_1 loaded');

// function require window. to export to front end
window.listenerCuba = function listenerCuba() {
    console.log('From custom/method_1.js');
    document.getElementsByTagName('h1')[0].innerText = "From custom/method_1.js"
}

window.viewlib = function viewlib(id) {
    console.log('viewlib triggered');
    var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
    var lib = {};
    lib["authenticity_token"] = AUTH_TOKEN;
    lib["id"] = id

    $.ajax({
        url: "/viewlib",
        method: "POST",
        data: lib,
        dataType: "JSON",
        success: function(result){
            console.log(result);
            alert(`Title Description: ${result['desc']}`);
        },
        error: function(error){
            console.log(error);
            alert('Uh oh! Something went wrong! Please try again.');
        }
    });
}