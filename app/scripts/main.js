//**********星星评分插件*************
$('#input-id').rating();
$('#input-id').rating({'size':'sm'});
var starnum =  $('#input-id').rating().val(); //存储星星的个数


$('#submit').click(function () {
    //console.log($("#message").val());
    if ($('#message').val()=='')
    {
      $('.control-label').remove();
      $('#test').addClass('has-warning');
      var $text = $('<label class=\'control-label\'>内容不能为空！</label>')
      $('#test').append($text);
    }
    else
    {
      $('#test').removeClass('has-warning');
      $('#test').addClass('has-success');
      $('.control-label').remove();
    }


  if ($('#appname').val()=='')
  {
    $('.csz').remove();
    $('#example').addClass('has-warning');
    var $text2 = $('<label class=\'control-label csz\' >内容不能为空！</label>');
    $('#example').append($text2);
  }
  else
  {
    $('#example').removeClass('has-warning');
    $('#example').addClass('has-success');
    $('.csz').remove();
  }

  if($('#appname').val()!='' && $('#message').val()!='')
  {
    $('.hyt').remove();
    var $text3 = $('<label class=\'control-label hyt\' style=\'margin-top: 10px\'>您已提交成功！</label>');
    $('#test').append($text3);
  }
  return false;
})

//请求auth接口

  var vq =localStorage.vq;
  $.post('http://yb.upc.edu.cn:8084/auth',{
    appName:'feedback',
    vq:vq,
    device:'default'
  },function (data) {
    localStorage.token=data.token;
  });


//post传数据给后台
$('#submit').click(function () {
  var msg = $('#message').val();
  var name = $('#appname').val();
  var token =localStorage.token;
  $.post('http://yb.upc.edu.cn:8084/feedback/create',{
    Authorization:token,
    message:msg,
    appname:name
  },function (data) {
    if (data.message)
    {
      console.log('反馈信息提交成功');
      console.log('反馈的信息为'+data.message);
    }
  });
})
