const request = require('request');
request.get('http://www.7timer.info/bin/api.pl?lon=43.9360589&lat=56.2965039&product=astro&output=json', 
(data, err, body) => {
  // console.log(JSON.parse(body).dataseries);
 let parsed= JSON.parse(body).dataseries;

let arr = [];

    parsed.map((elem) => { 
           arr.push(elem.temp2m);
                  });
 arr.map(elem => { 
console.log(elem);
      console.log("");
             });
  }
);