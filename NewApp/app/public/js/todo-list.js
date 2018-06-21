$(document).ready(function(){
  $('form').on('submit', function(){
      var item = $('form input');
      var todo = {item: item.val()};
      $.ajax({
        type:'POST',
        data: todo,
        url: '/',
        success: function(data){
          location.reload();
        }
      });
  });

  $('li').on('click', function(){
    var item = $(this).text();
    $.ajax({
      type: 'DELETE',
      url: '/' + item,
      success: function(data)
      {
        location.reload();
      }
    })
  })

});
