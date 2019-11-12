// require separately on body of layout via
//    <%= javascript_pack_tag 'home' %>

console.log('home js');

window.listenerButton = function listenerButton() {
    console.log('From pack/home.js');
    document.getElementsByTagName('h1')[0].innerText = "From pack/home.js"
}
