var wok ={
    prise:0,
    calories:0, 
    small:  {
        prise:300,
        calories:0,     
    },
    large: {
        prise:380,
        calories:0,
       
    },
    noodles: {
        prise:0,
        calories:250
       
     },
     rice: {
        prise:0,
        calories:120
     },
     pig : {
        prise:60,
        calories: 100 
    },

    meet : {
        prise:80,
        calories:150 
    },
    chicken: {
        prise:40,
        calories:80 
    },
    vegetables :{
        prise:30,
        calories:50 
    },
    extra_sauce: {
        prise:20,
        calories:5
    },
    crackers: {
        prise:15,
        calories:10
    },

    calculate :function(size, base){
        this.prise=wok[size].prise;
        this.calories=wok[base].calories;
        if (wok[size]=="small") {
            this.calories =this.calories *2;
        } else {
            this.calories=this.calories *3.5;
        }
       
        var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
        for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].id;
            this.prise+= wok[type].prise;
            this.calories+= wok[type].calories;
            
        }
        console.log(this.prise);
        wok.result(this.prise,this.calories);
        
    },
    result: function(prise,calories){
        document.getElementById("prise").innerHTML = prise;
        document.getElementById("calories").innerHTML = calories;
    },
    reset_all: function(){
        this.price=0;
        this.calories=0;
    }
}

    document.getElementById("form").addEventListener('submit', (e)=>{
        e.preventDefault();
        var size_=document.querySelector('input[name="size"]:checked').value;
        var base_=document.querySelector('input[name="base"]:checked').value;
        wok.calculate(size_, base_ );
    })
