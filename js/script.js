// (API_KEYには、"取得したAPIキー" を記述)
const API_KEY = "fbd5734b55b13d1f207c041e79dbc7f3"

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      // 通信成功
    }).fail(function (data){
      // 通信失敗
    });
  });
});