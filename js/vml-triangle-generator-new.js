(function( $ ) {
  
    var triangleClass;
    var borderColor;
    var triangleWidth;  
    var triangleHeight;
    var triangleHalfWidth;  
    var triangleHalfHeight;
    var orientation;  
    var triangleCode;
    var triangleCss;
  

 function updateTriangle() { 
    if(triangleClass!==''){
      triangleClass='class="'+$('#triangleClass').val()+'"';
    }else{
      triangleClass='';
    }
    borderColor=$('#borderColor').val();
    triangleWidth=$('#triangleWidth').val();
    triangleHeight=$('#triangleHeight').val();
    triangleHalfWidth=$('#triangleWidth').val()/2;
    triangleHalfHeight=$('#triangleHeight').val()/2;
    orientation=$('#orientation').val();
    triangleLeftWidth = $('#triangleLeftWidth').val();
    triangleRightWidth = $('#triangleRightWidth').val();
    triangleTopHeight = $('#triangleTopHeight').val();
    triangleBottomHeight =$('#triangleBottomHeight').val();
    orientation=$('#orientation').val();
    

    if($('#orientation').val()==='bottom'|| $('#orientation').val()==='top'){
      if($("input:radio[value='isoceles']").is(":checked")) {
        $('#topBottom').hide();
        $('#leftRight').hide();
         $('#triangleWidth').prop('disabled', false); 
        $('#triangleHeight').prop('disabled', false);        
      }else if($("input:radio[value='scalene']").is(":checked")) {
        $('#topBottom').show();
        $('#leftRight').hide();
        triangleTotalWidth= parseInt($('#triangleLeftWidth').val()) + parseInt($('#triangleRightWidth').val());
        $('#triangleWidth').val(triangleTotalWidth);
        $('#triangleWidth').prop('disabled', true); 
        $('#triangleHeight').prop('disabled', false);

      }else{
        $('#topBottom').hide();
        $('#leftRight').hide();
        $('#triangleWidth').prop('disabled', false); 
        $('#triangleHeight').prop('disabled', false);
      }
   } else if($('#orientation').val()==='right'|| $('#orientation').val()==='left'){
      if($("input:radio[value='isoceles']").is(":checked")) {
        $('#topBottom').hide();
        $('#leftRight').hide();
         $('#triangleWidth').prop('disabled', false); 
        $('#triangleHeight').prop('disabled', false);
      }else if($("input:radio[value='scalene']").is(":checked")) {
        $('#topBottom').hide();
        $('#leftRight').show();
         triangleTotalHeight= parseInt($('#triangleTopHeight').val()) + parseInt($('#triangleBottomHeight').val());
        $('#triangleHeight').val(triangleTotalHeight);
        $('#triangleHeight').prop('disabled', true); 
        $('#triangleWidth').prop('disabled', false); 
      }else{
        $('#topBottom').hide();
        $('#leftRight').hide();
        $('#triangleWidth').prop('disabled', false); 
        $('#triangleHeight').prop('disabled', false);
      }
    }else if($('#orientation').val()==='top right'|| $('#orientation').val()==='top left' || $('#orientation').val()==='bottom left' || $('#orientation').val()==='bottom right'){
    $('#topBottom').hide();
        $('#leftRight').hide();
        $('#triangleHeight').prop('disabled', false); 
        $('#triangleWidth').prop('disabled', false);
      }

  if($('#orientation').val()==='top' && $("input:radio[value='isoceles']").is(":checked")){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:0 solid transparent;border-right:'+triangleHalfWidth+'px solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+';border-left: '+triangleHalfWidth+'px solid transparent"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m 500,0 l1000,1000 0,1000xe" style="width:'+triangleWidth+'px; height:'+triangleHeight+'px" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:0 solid transparent;border-right:'+triangleHalfWidth+'px solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+';border-left: '+triangleHalfWidth+'px solid transparent&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m 500,0 l1000,1000 0,1000xe&quot; style=&quot;width:'+triangleWidth+'px; height:'+triangleHeight+'px&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;'; 
    } else if($('#orientation').val()==='top' && $("input:radio[value='scalene']").is(":checked")){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:0 solid transparent;border-right: '+triangleRightWidth+'px solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+';border-left: '+triangleLeftWidth+'px solid transparent"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" coordsize="'+triangleTotalWidth+','+triangleHeight+'" path="m '+triangleLeftWidth+',0 l'+triangleTotalWidth+','+triangleHeight+' 0,'+triangleHeight+'xe" style="width:'+triangleTotalWidth+'px; height:'+triangleHeight+'px" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:0 solid transparent;border-right: '+triangleRightWidth+'px solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+';border-left: '+triangleLeftWidth+'px solid transparent&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; coordsize=&quot;'+triangleTotalWidth+','+triangleHeight+'&quot; path=&quot;m '+triangleLeftWidth+',0 l'+triangleTotalWidth+','+triangleHeight+' 0,'+triangleHeight+'xe&quot; style=&quot;width:'+triangleTotalWidth+'px; height:'+triangleHeight+'px&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;';   
  }
  else if($('#orientation').val()==='top right'){  
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height : 0;width : 0;border-top : 0 solid transparent; border-right :'+triangleWidth+'px solid '+borderColor+';border-bottom :'+triangleHeight+'px solid transparent;border-left :0 solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l1000,0 1000,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+'  style=&quot;height : 0;width : 0;border-top : 0 solid transparent; border-right :'+triangleWidth+'px solid '+borderColor+';border-bottom :'+triangleHeight+'px solid transparent;border-left :0 solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l1000,0 1000,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }
  else if($('#orientation').val()==='right' && $("input:radio[value='isoceles']").is(":checked")){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleHalfHeight+'px solid transparent; border-right: 0 solid transparent;border-bottom: '+triangleHalfHeight+'px solid transparent;border-left: '+triangleWidth+'px solid '+borderColor+';"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l1000,500 0,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+'  style=&quot;height:0;width:0;border-top:'+triangleHalfHeight+'px solid transparent; border-right: 0 solid transparent;border-bottom: '+triangleHalfHeight+'px solid transparent;border-left: '+triangleWidth+'px solid '+borderColor+';&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l1000,500 0,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }else if($('#orientation').val()==='right' && $("input:radio[value='scalene']").is(":checked")){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleTopHeight+'px solid transparent; border-right: 0 solid transparent;border-bottom:'+triangleBottomHeight+'px solid transparent;border-left:'+triangleWidth+'px solid '+borderColor+';"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l'+triangleWidth+','+triangleTopHeight+' 0,'+triangleTotalHeight+'xe" coordsize="'+triangleWidth+','+triangleTotalHeight+'" style="width:'+triangleWidth+'px;height:'+triangleTotalHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:'+triangleTopHeight+'px solid transparent; border-right: 0 solid transparent;border-bottom:'+triangleBottomHeight+'px solid transparent;border-left:'+triangleWidth+'px solid '+borderColor+';&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l'+triangleWidth+','+triangleTopHeight+' 0,'+triangleTotalHeight+'xe&quot; coordsize=&quot;'+triangleWidth+','+triangleTotalHeight+'&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleTotalHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }
  else if($('#orientation').val()==='bottom right'){
      trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:0 solid transparent;border-right:0 solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+'; border-left :'+triangleWidth+'px solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m 1000,0 l1000,1000 0,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
      triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:0 solid transparent;border-right:0 solid transparent;border-bottom:'+triangleHeight+'px solid '+borderColor+'; border-left :'+triangleWidth+'px solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m 1000,0 l1000,1000 0,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  } 
  else if($('#orientation').val()==='bottom' && $("input:radio[value='isoceles']").is(":checked")){
      trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleHeight+'px solid '+borderColor+';border-right: '+triangleHalfWidth+'px solid transparent;border-bottom: 0 solid transparent;border-left: '+triangleHalfWidth+'px solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l1000,0 500,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
      triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height : 0;width : 0;border-top:'+triangleHeight+'px solid '+borderColor+';border-right: '+triangleHalfWidth+'px solid transparent;border-bottom: 0 solid transparent;border-left: '+triangleHalfWidth+'px solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l1000,0 500,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }else if($('#orientation').val()==='bottom' && $("input:radio[value='scalene']").is(":checked")){
      trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleHeight+'px solid '+borderColor+';border-right: '+triangleRightWidth+'px solid transparent;border-bottom: 0 solid transparent;border-left: '+triangleLeftWidth+'px solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l'+triangleTotalWidth+',0 '+triangleLeftWidth+','+triangleHeight+'xe" coordsize="'+triangleTotalWidth+','+triangleHeight+'" style="width:'+triangleTotalWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
      triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:'+triangleHeight+'px solid '+borderColor+';border-right: '+triangleRightWidth+'px solid transparent;border-bottom: 0 solid transparent;border-left: '+triangleLeftWidth+'px solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l'+triangleTotalWidth+',0 '+triangleLeftWidth+','+triangleHeight+'xe&quot; coordsize=&quot;'+triangleTotalWidth+','+triangleHeight+'&quot; style=&quot;width:'+triangleTotalWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n';  
  }
  else if($('#orientation').val()==='bottom left'){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleHeight+'px solid transparent;border-right :0 solid transparent;border-bottom :0 solid transparent;border-left:'+triangleWidth+'px solid '+borderColor+';"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l1000,1000 0,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:'+triangleHeight+'px solid transparent;border-right :0 solid transparent;border-bottom :0 solid transparent;border-left:'+triangleWidth+'px solid '+borderColor+';&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l1000,1000 0,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }
  else if($('#orientation').val()==='left'&& $("input:radio[value='isoceles']").is(":checked")){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleHalfHeight+'px solid transparent;border-right:'+triangleWidth+'px solid '+borderColor+';border-bottom: '+triangleHalfHeight+'px solid transparent;border-left: 0 solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m 0,500 l1000,0 1000,1000xe" style="width:'+triangleWidth+'px;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:'+triangleHalfHeight+'px solid transparent;border-right:'+triangleWidth+'px solid '+borderColor+';border-bottom: '+triangleHalfHeight+'px solid transparent;border-left: 0 solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m 0,500 l1000,0 1000,1000xe&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }else if($('#orientation').val()==='left'&& $("input:radio[value='scalene']").is(":checked")){
   trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height:0;width:0;border-top:'+triangleTopHeight+'px solid transparent;border-right: '+triangleWidth+'px solid '+borderColor+';border-bottom: '+triangleBottomHeight+'px solid transparent;border-left: 0 solid transparent;"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m 0,'+triangleTopHeight+' l'+triangleWidth+',0 '+triangleWidth+','+triangleTotalHeight+'xe" coordsize="'+triangleWidth+','+triangleTotalHeight+'" style="width:'+triangleWidth+'px;height:'+triangleTotalHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height:0;width:0;border-top:'+triangleTopHeight+'px solid transparent;border-right: '+triangleWidth+'px solid '+borderColor+';border-bottom: '+triangleBottomHeight+'px solid transparent;border-left: 0 solid transparent;&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m 0,'+triangleTopHeight+' l'+triangleWidth+',0 '+triangleWidth+','+triangleTotalHeight+'xe&quot; coordsize=&quot;'+triangleWidth+','+triangleTotalHeight+'&quot; style=&quot;width:'+triangleWidth+'px;height:'+triangleTotalHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }
  else if($('#orientation').val()==='top left'){
    trianglePreview = '<!--[if !mso]><!-->\n<div '+triangleClass+' style="height : 0;width : 0;border-top :'+triangleHeight+'px solid '+borderColor+'; border-right :'+triangleWidth+'px solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent"></div>\n<!--<![endif]-->\n<!--[if mso]>\n<v:shape xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" path="m,l1000,0 0,1000xe" style="width:'+triangleWidth+'px ;height:'+triangleHeight+'px;" fillcolor="'+borderColor+'" stroked="f"></v:shape>\n<![endif]-->\n';
    triangleCode = '&lt;!--[if !mso]&gt;&lt;!--&gt;\n&lt;div '+triangleClass+' style=&quot;height : 0;width : 0;border-top :'+triangleHeight+'px solid '+borderColor+'; border-right :'+triangleWidth+'px solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent&quot;&gt;&lt;/div&gt;\n&lt;!--&lt;![endif]--&gt;\n&lt;!--[if mso]&gt;\n&lt;v:shape xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; path=&quot;m,l1000,0 0,1000xe&quot; style=&quot;width:'+triangleWidth+'px ;height:'+triangleHeight+'px;&quot; fillcolor=&quot;'+borderColor+'&quot; stroked=&quot;f&quot;&gt;&lt;/v:shape&gt;\n&lt;![endif]--&gt;\n'; 
  }

  $('#trianglePreview').html(trianglePreview);
  $('#triangleCode').html(triangleCode);

  }
/*end Update triangle*/
  $(document).ready(function(){
  updateTriangle();
})  
 
$( "input, select" ).on('change',function() {
  updateTriangle();
});

})(jQuery);