window.onload = function(){
  // 初期表示
  initial_data_get("https://catfact.ninja/fact").then(function(data) {
    $("#api_text").text(data["fact"]);
    $("ajax_status").text("-");
  })
  // クリックイベント
  $("#update_btn").click(function (){
    $("ajax_status").text("データ取得中");
    $.ajax({
      url:"https://catfact.ninja/fact",
      type:"GET",
      dataType:"json",
      timespan:1000

      }).done(function(data,textStatus,XHR_OBJ) {
          console.log(XHR_OBJ.status, textStatus);
          $("#api_text").text(data["fact"]);
  
      }).fail(function(XHR_OBJ, textStatus) {
          $("#api_text").text(XHR_OBJ.status, textStatus );
  
      }).always(function(){
          $("#ajax_status").text("完了");
    });
  });
};

function initial_data_get(url) {
  return $.ajax({
    url:url,
    type:"GET",
    dataType:"json",
    timespan:1000
  });
}