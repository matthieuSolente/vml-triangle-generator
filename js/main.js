
/***********************************************/
/* COPY PASTE   */
/***********************************************/
function copyPaste(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.copyPaste').text()).select();
    document.execCommand("copy");
    $temp.remove();
}

/***********************************************/
/************ COPY TO CLIPBOARD FUNCTION *******/
/***********************************************/

  $('.copyPaste').wrap('<div class="copyPaste-block"></div>');   
    $('.copyPaste-block').each(function(){     
      $(this).append('<button type="button" class="copy" onclick="copyPaste(this)" aria-hidden="false" aria-label="Copy to clipboard"><span class="visually-hidden">Copy to Clipboard</span></button>');
    });
  

/******************************************************/
/********** TEMPLATE TOGGLE PREVIEW SCREEN ************/
/******************************************************/    
$('#codeBtn').on('click',function(){
  $('#previewScreen,#codeScreen').toggleClass('hide');
  $(this).text(($(this).text() == 'Preview') ? 'Code' :'Preview');fadeIn();
})