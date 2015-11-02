//$.getJSON('../data/data.json', function(data){
//    $('.msg-box').html(data.msg[0].msg);
//    $(data).each()
//});


$('#chat-form').on('submit', function(data){
//    console.log(data.currentTarget.children[1].value);
    data.currentTarget.children[0].value = data.currentTarget.children[1].value;
    data.currentTarget.children[1].value = null;
    return false;
});