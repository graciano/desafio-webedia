window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
    let $menuLeft = $('.pushmenu-left');
    let $buttonMenu = $('#button-menu');
    
    $buttonMenu.click(function() {
        $('body').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });
});
