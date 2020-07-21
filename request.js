const request = require('request');
request.get('http://api.icndb.com/jokes/random/3', 
(data, err, body) => {
  //console.log(JSON.parse(body));
   let parsed= JSON.parse(body).value;

 let arr = [];

    parsed.map((elem) => { 
         arr.push(elem.joke);
                });
    arr.map(elem => { 
     console.log(elem);
     console.log("");
            });
  }
);