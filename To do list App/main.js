$(document).ready(function () {
    $('#button').click(function () {
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append('<div class="item">' + toAdd + '</div>');
      $('.list:even').css({"background-color":"#ffffff;"});
      
      $('.item').filter(':even').css("background-color", "#f1f1f1");
    }); 
    $(document).on('click', '.item', function() {
        $(this).fadeOut(200);
       
        });
      
        $(function() {
        $(".list").sortable();
        $(".list").disableSelection();
      });
      
    });