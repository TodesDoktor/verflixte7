let min = 1
let max = 6



 console.log(Würfel1()+"+"+Würfel2()+"=" )


    function Würfel1()  {

    return Math.floor((Math.random()*(max-min)) + min)
}

function Würfel2()  {

    return Math.floor((Math.random()*(max-min)) + min)
}