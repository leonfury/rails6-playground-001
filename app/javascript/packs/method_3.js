// require separately on body of layout via
//    <%= javascript_pack_tag 'home' %>

console.log('method_3 js');

window.listenerButton = function listenerButton() {
    console.log('From pack/method_3.js');
    document.getElementsByTagName('h1')[0].innerText = "From pack/method_3.js"
}