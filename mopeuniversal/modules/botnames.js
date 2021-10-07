function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var names = [
    "Sulaiman",
    "Shahzaman",
    "Shumilana stinky towsh",
    "The baibeesh",
    "maimeesh",
    "peek a boo wali bilee",
    "King Of Agario - REAL",
    "The god amongst men ",
    "Seth Rollins",
    "Nick Eh 30 (Family Friendly)",
    "Sypher Pk's documentaries",
    "Ceeday (dead)",
    "FE4R",
    "NoahsNoah",
    "Babatunde",
    "Fatneek",
    "W2S",
    "KSI",
    "ITS ME VIKKSTAR 12 FREE",
    "DEEZ NUTS",
    "Molvi Saab",
    "(N)Nation",
    "La Flame",
    "CHEEEEEEEESE",
    "Lord Shahzaman's private server",
    "Acknowledge Me!",
    "Your Tribal Chief",
    "Roman Reings",
    "The Head of the Table",
    "400+ Day Universal Champion",
    "The GOAT",
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
