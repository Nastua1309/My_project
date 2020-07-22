$(document).ready(function() {
  $.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
          "id" : "520555",
          "appid" : "c78c30c01eaca20587df14d2bfbaf10d"
      },
      function (data){
          var temp = data.main.temp;
          temp -= 273;
          temp = Math.round(temp * 1)/1;
          document.getElementById("temp").innerHTML = temp;
          
          
      }
  );
  
});
