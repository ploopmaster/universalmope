function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var names = [
    "1,
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "25",
    "CHEEEEEEEESE",
    "Lord Shahzaman's private server",
    "28",
    "29",
    "30",
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
