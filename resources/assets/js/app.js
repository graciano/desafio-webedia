//todo modularize this file

//dependencies from webpack
window.$ = window.jQuery = require('jquery');
const MediumEditor = require('medium-editor');
const debounce = require('debounce');

//function to send any form in laravel
// from my gist https://gist.github.com/graciano/4c41cc3c139ae5c7db70
var sendAjaxFormLaravel = function(form, callbacks){
    var formAction = form.attr('action');
    var formMethod = form.attr('method');
    var formData;
    if (formMethod.toLowerCase() == 'post') {
        formData = form.serializeArray();
        $.ajaxSetup({
            headers: { 'X-CSRF-Token' : window.Laravel.csrfToken }
        });
    }
    else
        formData = form.serialize();

    $.ajax({
        type: formMethod,
        url: formAction,
        data: formData,
        cache: false,
        success: (callbacks && callbacks.hasOwnProperty('success'))? callbacks.success : function(data) {
            console.log(data);
            console.log("success");
        },
        error: (callbacks && callbacks.hasOwnProperty('error'))? callbacks.error : function(data) {
            console.log(data);
            console.log("error");
        }
    },"json");
};

$(document).ready(function() {
    //push menu handling
    let $menuLeft = $('.pushmenu-left');
    let $buttonMenu = $('#button-menu');
    
    $buttonMenu.click(function() {
        $('body').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });

    //text editor handling
    let editorSelector = "#post-editor";
    
    //creating medium like wysiwyg
    let mediumEditor = new MediumEditor(editorSelector);

    // creating a debounce, to avoid performance issues
    // using a one second debounce
    let debounceSaveChanges = debounce(function(){
        console.log('saving changes');
        let $form = $("#form-post");
        let $inputHtml = $form.find("input[name='html_content']");
        $inputHtml.val($(editorSelector).html());
        sendAjaxFormLaravel($form);
    }, 1000);

    //mutation observer of content editable created bu medium editor
    // to save post via ajax
    let observer = new MutationObserver(debounceSaveChanges);
    let editor = document.querySelector(editorSelector);

    //activating observer in editor element
    observer.observe(editor, {
        attributes: true,
        childList: true,
        characterData: true
    });
});
