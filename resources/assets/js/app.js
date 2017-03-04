//todo modularize this file

//dependencies from webpack
window.$ = window.jQuery = require('jquery');
const MediumEditor = require('medium-editor');
const debounce = require('debounce');

//function to send any form in laravel
// from my gist https://gist.github.com/graciano/4c41cc3c139ae5c7db70
let sendAjaxFormLaravel = function(form, callbacks){
    let formAction = form.attr('action');
    let formMethod = form.attr('method');
    let formData;
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
let pureTextFromHtml = function(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
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
    //post form
    let $form = $("#form-post");
    
    //creating medium like wysiwyg
    let mediumEditor = new MediumEditor(editorSelector);

    // creating a debounce, to avoid performance issues
    // using a one second debounce
    let debounceSaveChanges = debounce(function(){
        console.log('saving changes');
        let $inputHtml = $form.find("input[name='html_content']");
        $inputHtml.val($(editorSelector).html());
        sendAjaxFormLaravel($form);
    }, 1000);

    //mutation observer of content editable created bu medium editor
    // to save post via ajax
    let saveChangesObserver = new MutationObserver(debounceSaveChanges);
    let editor = document.querySelector(editorSelector);

    let observerOptions = {
        attributes: true,
        childList: true,
        characterData: true
    };


    if (!window.Laravel.newPost) {
        //activating observer in editor element
        saveChangesObserver.observe(editor, observerOptions);
    } else { 
        //handling new post page
        // object to check if some of the fields were changed by the user
        let changedFields = {
            'title': false,
            'slug': false,
            'preview_text': false,
            'lead': false,
            'excerpt': false
        };
        for (let field in changedFields){
            if (changedFields.hasOwnProperty(field)) {
                 $("#field-"+field)
                    .on('change', function(ev) {
                        changedFields[field] = true;
                    });
            }
        }
        //
        let changeHrefObserver;
        let debouceHrefChange = debounce(function() {
            console.log('starting function');
            let $inputHtml = $form.find("input[name='html_content']");
            $inputHtml.val($(editorSelector).html());
            //generating values for fields from text if they're not changed
            // by the user
            let text = pureTextFromHtml($inputHtml.val());
            for (let field in changedFields){
                if (changedFields.hasOwnProperty(field)
                    && !changedFields[field]
                    && field != 'slug') {

                    let $input = $("#field-"+field);
                    let length = parseInt($input.attr('data-length'));
                    length = isNaN(length)? 10 : length;
                    length = Math.min(length, text.length);
                    $input.val(text.substring(0, length));
                }
            }
            // save the post if it's bigger than 300 characters and
            // change the window to a edit post one
            if (text.length > 300) {
                console.log('entered if');
                sendAjaxFormLaravel($form, {
                    success: function(data){
                        console.log(data);
                        //change form to edit post instead of new post
                        $form.attr('action', data['action']);
                        let inputMethod = data['input-method'];
                        $form.append(inputMethod);

                        //getting generated slug if its different
                        let $inputSlug = $('#field-slug');
                        $inputSlug.val(data['post']['slug']);

                        //changing URL for when the user presses F5
                        history.pushState(
                                          data,
                                          "Write Post - Webedia",
                                          data['edit-url']
                                          );
                        //now that is an edit post page, swap the observers
                        changeHrefObserver.disconnect();
                        saveChangesObserver.observe(editor, observerOptions);
                    }
                });
            }
        }, 1000);

        changeHrefObserver = new MutationObserver(debouceHrefChange);
        changeHrefObserver.observe(editor, observerOptions);
    }
});
