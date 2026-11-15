/* 
Tristan Burditt - 100982847
Assignment 2
Web & Script Programming
main.js
*/

document.addEventListener('DOMContentLoaded', function (){
    var alertBox = document.querySelector('[data-autohide]');
    if (alertBox) {
        setTimeout(function() {
            alertBox.computedStyleMap.display = 'none';
        }, 8000)
    }
});