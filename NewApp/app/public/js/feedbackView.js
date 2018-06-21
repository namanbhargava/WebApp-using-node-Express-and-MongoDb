$(document).ready(function(){
  $.ajax({
    url : '/api',
    type: 'GET',
    success: function(data){
      var output = '';
      $.each(data, function(key,item){
        output += '<h2>Name:'+item.name+'<button type="button"><span class="remove" id ="'+key+'">Delete</span></button></h2>';
        output += '<h3>Title:'+item.title+'</h3>';
        output += '<h4>Message:'+item.message+'</h4></hr>';
      });
      $('.output').html(output);
    }
  })

$('form').on('submit', function(){

  var todo = {name: $('.name').val(),
              title: $('.title').val(),
              message: $('.message').val()}
  $.ajax({
    url: '/api',
    type: 'POST',
    data: todo,
    success: function(data){
      var newoutput = '';
      $.each(data, function(key,item){
        newoutput += '<h2>Name:'+item.name+'<button type="button"><span class="remove" id ="'+key+'">Delete</span></button></h2>';
        newoutput += '<h3>Title:'+item.title+'</h3>';
        newoutput += '<h4>Message:'+item.message+'</h4><hr />';
      });
      $('.output').html(newoutput);
    }
  })
})

  $('.output').on('click', function(e){
    if(e.target.className == "remove")
    {
      $.ajax({
        url : '/api/'+ e.target.id,
        type: 'DELETE',
        success:function(data){
          var newoutput2 = '';
          $.each(data, function(key,item){
            newoutput2 += '<h2>Name:'+item.name+'<button type="button"><span class="remove" id ="'+key+'">Delete</span></button></h2>';
            newoutput2 += '<h3>Title:'+item.title+'</h3>';
            newoutput2 += '<h4>Message:'+item.message+'</h4><hr />';
          });
          $('.output').html(newoutput2);
        }
      })
   }
  })
})
