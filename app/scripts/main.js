//**********星星评分插件*************
$("#input-id").rating();
$("#input-id").rating({'size':'sm'});
var starnum =  $("#input-id").rating().val(); //存储星星的个数


$("#submit").click(function () {
    //console.log($("#message").val());
    if ($("#message").val()=="")
    {
      $(".control-label").remove();
      $("#test").addClass("has-warning");
      var $text = $("<label class='control-label'>内容不能为空！</label>")
      $("#test").append($text);
    }
    else
    {
      $("#test").removeClass("has-warning");
      $("#test").addClass("has-success");
      $(".control-label").remove();
    }


  if ($("#appname").val()=="")
  {
    $(".csz").remove();
    $("#example").addClass("has-warning");
    var $text2 = $("<label class='control-label csz' >内容不能为空！</label>");
    $("#example").append($text2);
  }
  else
  {
    $("#example").removeClass("has-warning");
    $("#example").addClass("has-success");
    $(".csz").remove();
  }

  if($("#appname").val()!="" && $("#message").val()!="")
  {
    $(".hyt").remove();
    var $text3 = $("<label class='control-label hyt' style='margin-top: 10px'>您已提交成功！</label>");
    $("#test").append($text3);
  }
  return false;
})

$("#submit").click(function () {
  var text = $("#message").val();
  $.post(url,text,function (data) {
    if (data.msg== 1)
    {
      alert('反馈信息提交成功');
    }
    else if (data.msg==0)
    {
      alert('反馈内容不能为空');
    }
    else
    {
      alert('参数错误');
    }
  });
})

$("#submit").click(function () {
  var text = $("#appname").val();
  $.post(url,text,function (data) {
    if (data.msg== 1)
    {
      alert('应用信息提交成功');
    }
    else if (data.msg==0)
    {
      alert('应用内容不能为空');
    }
    else
    {
      alert('参数错误');
    }
  });
})
