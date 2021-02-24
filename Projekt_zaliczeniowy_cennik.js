//----------------------------------------------------------
//Rozwijany cennik

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var flaga = [false, false]



btn1.addEventListener('click', function () {
    let x = document.getElementById('tableL')
    if (flaga[0] == false) {
        x.style.visibility = 'visible';
        btn1.innerHTML="Ukryj";
       
    }
    else {
        x.style.visibility = 'hidden';
        btn1.innerHTML="Sezon Letni";

    } 

    flaga[0] = !flaga[0];

})

btn2.addEventListener('click', function () {
    let x = document.getElementById('tableZ')
    if (flaga[1] == false) {
        x.style.visibility = 'visible';
        btn2.innerHTML="Ukryj"
        
    }
    else {
        x.style.visibility = 'hidden';
        btn2.innerHTML="Sezon Zimowy"

    }

    flaga[1] = !flaga[1];

})
//---------------------------------------------------------------
//Zmiana koloru strony

var guzik = document.getElementById('btn4')
var cl = false;

guzik.addEventListener('click', function(){
    let tlo = document.getElementById('body');
    if(cl == false){
        tlo.style.backgroundColor='gray';
        cl = true;
        

    }
    else{
        tlo.style.backgroundColor='rgb(245, 245, 220)';
        cl = false;

    }
})


//------------------------------------------------------------------
//Zmiana tekstu na guziku

var guzik = document.getElementById('btn3');


guzik.addEventListener('mouseover', function(){
    guzik.innerHTML="Wróć do strony głównej";
})
guzik.addEventListener('mouseout', function(){
    guzik.innerHTML="Powrót";
})

//---------------------------------------------------------------------
//Tekst dodatkowy

var a = 2
var info = new Array;
info[0] = "Chcesz zorganizować wyjazd służbowy ?";
info[1] = "U nas to możliwe ! Skontaktuj się z nami !";

var b = 0;
function myFunction()
{
    
    if(a==b) 
    {
        b=0;
    } 
    document.getElementById('btn5').innerHTML = info[b];
    
    b++;
}
setInterval('myFunction()',3000);


