function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var names = [
    "Lord Shahzaman",
    "Shumimwa the Baibeesh",
    "Maa",
    "King Shahzaman",
    "Abu",
    "👑 King Of Agario - REAL",
    "Shahbaz Hussain",
    "Mustafa Usman",
    "Ahsan Arif",
    "Cheese",
    "NoahsNoah",
    "Ceeday",
    "Family Friendly NickEh30",
    "FE4R",
    "Sypher PK ratio'd",
    "Dog named Tommy",
    "Charles",
    "Fiona Khan",
    "Shumilana stinky towsh",
    "LND Abi",
    "OJ",
    "(N)Nation",
    "La Flame",
    "PTCL-BB",
    "PUBA GEE MOBAIL",
    "Asalamalikum",
    "ur name",
    "pagal log",
    "Shah's sandbox",
    "piss off kid",
    "Ninja (Stop Bullying)",
]
function name() {

}
name.prototype = {

    newnames: function () {
        var d = getRandomInt(0, names.length)
        var newname = names[d]
        return newname;


    },
}
module.exports = name
