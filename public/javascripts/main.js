document.addEventListener('DOMContentLoaded', function (){
    var alertBox = document.querySelector('[data-autohide]');
    if (alertBox) {
        setTimeout(function() {
            alertBox.computedStyleMap.display = 'none';
        }, 8000)
    }
});