// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("trix")
require("@rails/actiontext")
require("custom/method_1")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('application packs loaded');
document.addEventListener('turbolinks:load', () => {  
    console.log('turbolinks loaded')

    // document.getElementById("custombutton").addEventListener("click", () => {
    //     console.log('From method_2 pack/app.js');
    //     document.getElementsByTagName('h1')[0].innerText = "From method_2 pack/app.js"
    // })

    $('#custombutton').on('click', () => {
        alert('helo from jquery of application.js')
    })

})