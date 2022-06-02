let min = 1
let max = 6
let wurf1 , wurf2

let container = document.getElementById ("ausgabe" )



function wuerfel1()  {
    return Math.floor((Math.random()*(max-min)) + min)
}

function wuerfel2()  {

    return Math.floor((Math.random()*(max-min)) + min)
}

function ergebnis (){
    wurf1 = wuerfel1()
    wurf2 = wuerfel2()
    return wurf1 + wurf2



}

function wuerfeln() {

    console.log("dein Gesamterggebnis beträgt " + ergebnis())


}



