$(document).ready(function() {
  $.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
          "id" : "520555",
          "appid" : "c78c30c01eaca20587df14d2bfbaf10d"
      },
      function (data){
console.log (data);
          var temp = data.main.temp;
          var feels_like = data.main.feels_like;
          temp -= 273;
          feels_like -=273;;
          temp = Math.round(temp * 1)/1;
          feels_like = Math.round(feels_like * 1)/1;
          document.getElementById("temp").innerHTML = temp; 
          document.getElementById("feels_like").innerHTML = feels_like; 
          
      }
  );
  
});
