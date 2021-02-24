//--------------------------------------------------
//Komunikaty

var btn = [
    document.getElementById('I1'),
    document.getElementById('I2'),
    document.getElementById('I3')]


btn[0].addEventListener('click', function () {
    alert("W naszym serwisie płatności są bezpieczne.\nKorzystamy z zaufanych metod transferu pieniędzy. \nWszystkie płatności są zabezpieczone.");

})
btn[1].addEventListener('click', function () {
    alert("Świadczymy usługi na najwyższym poziomie.\nJakość usług i oferowanych produktów jest najwyższa.\nOtrzymaliścmy liczne nagrody.");

})
btn[2].addEventListener('click', function () {
    alert("Współpracujemy z lokalnymi przedsiębiorcami i wspieramy biznes wokół nas.")
})


//------------------------------------------------------------------------------
//Galeria zdjęć

var zdjecia = document.getElementsByClassName("zdjImg");
var pozycja = 0;

for (let i = 0; i < zdjecia.length; i++) {
    zdjecia[i].style.left = (i + pozycja) * 100 + "%";
}

document.getElementById("b1").addEventListener("click", function () {
    pozycja--;
    if (pozycja < 0)
        pozycja = zdjecia.length - 1;
    for (let i = 0; i < zdjecia.length; i++) {
        zdjecia[i].style.left = (i - pozycja) * 100 + "%";
    }
});

document.getElementById("b2").addEventListener("click", function () {
    pozycja++;
    if (pozycja >= zdjecia.length)
        pozycja = 0;
    for (let i = 0; i < zdjecia.length; i++) {
        zdjecia[i].style.left = (i - pozycja) * 100 + "%";
    }
});