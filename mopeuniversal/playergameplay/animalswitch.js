const abilitiesswitcher = require("./abilitiesswitch");
const utils1 = require("../modules/IMPmodules/util")
const util = new utils1()

function animalswitcher(player) {

    switch (player.secondaryType) {
        case 79:
            player.tier = 16
            player.bar.normalbar = 2
            player.nextxp = 10000000000;

            player.flags.push(26)
            player.whichbiome = 6
            player.canUseTailslap = true
            player.tailState = 0;

            player.baserad = 100
            player.addrad = 0.3
            player.lessrad = 0.7

            player.speeds = {
                landspeed: 18.04,
                oceanspeed: 18.04,
                arcticspeed: 18.04,
                lavaspeed: 18.04,
            }
            player.bar.maxbarnormalpercentage = 500
            player.bar.normalbarpercentage = 500
            player.abilitys.button_w = abilitiesswitcher(30);
            switch (player.species) {
                case 0:
                    player.specType2 = 1;
                    break;
                case 1:
                    player.specType2 = 2;
                    break;
                case 2:
                    player.specType2 = 4;
                    break;
                case 3:
                    player.specType2 = 5;
                    break;
                case 4:
                    player.specType2 = 6;
                    break;
                case 5:
                    player.specType2 = 9;
                    break;
                case 6:
                    player.specType2 = 8;
                    break;
                case 69:
                    player.specType2 = 9;
                    break;
                case 200:
                    player.specType2 = 25;
                    break;
            }
            break
        case 46:
            switch (player.species) {
                case 0:
                    player.specType2 = 0;
                    break;
                case 1:
                    player.specType2 = 2;
                    break;
                case 2:
                    player.specType2 = 7;
                    break;

            }
            player.tier = 16
            player.bar.normalbar = 2
            player.nextxp = 100000000;

            player.baserad = 90
            player.addrad = 0.25
            player.lessrad = 0.7


            player.flags.push(26)
            player.whichbiome = 6
            player.speeds = {
                landspeed: 16.04,
                oceanspeed: 16.04,
                arcticspeed: 16.04,
                lavaspeed: 16.04,
            }
            player.bar.maxbarnormalpercentage = 500
            player.bar.normalbarpercentage = 500
            player.abilitys.button_w = abilitiesswitcher(19);
            break;
        //Monsters



        case 78://scorpion
            player.tier = 15
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 30000000;

            player.baserad = 40
            player.addrad = 0.5
            player.lessrad = 0.2

            player.flags.push(26)
            player.speeds = {
                landspeed: 26.04,
                oceanspeed: 26.04,
                arcticspeed: 26.04,
                lavaspeed: 26.04,
            }
            player.poison = 100

            player.abilitys.button_w = abilitiesswitcher(79);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 80
            player.bar.maxbarnormalpercentage = 200;
            player.bar.normalbarpercentage = 200;
            break;
        case 71://land monster
            player.tier = 15
            player.bar.normalbar = 2
            player.whichbiome = 6
            player.nextxp = 30000000;


            player.baserad = 40
            player.addrad = 0.6
            player.lessrad = 0.2

            player.flags.push(26)
            player.speeds = {
                landspeed: 20.04,
                oceanspeed: 22.04,
                arcticspeed: 22.04,
                lavaspeed: 22.04,
            }

            player.abilitys.button_w = abilitiesswitcher(66);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 80
            player.bar.maxbarnormalpercentage = 200;
            player.bar.normalbarpercentage = 200;
            break;

        case 73://dino mons
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 30000000;

            player.baserad = 50
            player.addrad = 0.4
            player.lessrad = 0.2

            player.flags.push(26)
            player.speeds = {
                landspeed: 30.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,
                flyspeed: 50.00, // charge spped.


            }

            player.abilitys.button_w = abilitiesswitcher(77);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 140



            break;
        case 76://thunder bird

            player.tier = 15
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 9000000000;


            player.baserad = 45
            player.addrad = 0.3
            player.lessrad = 0.2

            player.flags.push(26)
            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,
                flyspeed: 50,

            }
            player.abilitys.button_w = abilitiesswitcher(78);
            player.transparancy = 100
            player.bar.maxbarnormalpercentage = 400;
            player.bar.normalbarpercentage = 400;

            break;
        case 70://se amons
            player.tier = 15
            player.bar.normalbar = 0
            player.whichbiome = 1
            player.nextxp = 30000000;


            player.baserad = 40
            player.addrad = 0.5
            player.lessrad = 0.2

            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,

            }
            player.abilitys.button_w = abilitiesswitcher(63);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 500
            break;
        case 72://ice monster
            player.tier = 15
            player.bar.normalbar = 0
            player.whichbiome = 2
            player.nextxp = 30000000;


            player.baserad = 40
            player.addrad = 0.6
            player.lessrad = 0.2

            player.flags.push(26)
            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,

            }
            player.crystals = [];

            de = [5, 3.5]
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.9, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 70, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.9, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 150, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.3, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 120, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.4, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 255, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.95, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 280, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.9, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 230, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.92, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 190, }; player.crystals.push(p);
            var m = util.randomNumber(de[0], de[1]); var p = { x: 0, y: 0, pos: 0.8, rad: 0, lvl: 0, maxlvl: m, angleswitcher: 110, }; player.crystals.push(p);

            player.abilitys.button_w = abilitiesswitcher(76);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 80
            break;
        //Monstersend
        case 85:

            player.tier = 14
            player.bar.normalbar = 0
            player.flags.push(26)

            player.baserad = 20
            player.addrad = 0.1
            player.lessrad = 0.2

            player.nextxp = 10000000;
            player.whichbiome = 5
            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,
                flyspeed: 69,
            }
            player.abilitys.button_w = abilitiesswitcher(253);
            player.flyvelocity *= 3
            player.fallvelocity *= 3
            player.bar.maxbarnormalpercentage = 1000;
            player.bar.normalbarpercentage = 1000;

            break;
        case 80:
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 10000000;

            player.baserad = 40
            player.addrad = 0.3
            player.lessrad = 0.3

            player.flags.push(26)
            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,
            }
            player.invincible = false
            player.spearInHand = true
            player.canCreateFire = false
            player.abilitys.button_w = abilitiesswitcher(81);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 50

            break
        case 14:

            switch (player.species) {
                case 1:
                    player.specType2 = 0;
                    break;
                case 2:
                    player.specType2 = 0;
                    break;
                case 3:
                    player.specType2 = 2;
                    break;

            }
            player.tier = 14
            player.bar.normalbar = 0
            player.flags.push(26)
            player.nextxp = 10000000;

            player.baserad = 50
            player.addrad = 0.3
            player.lessrad = 0.3

            player.whichbiome = 5
            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,

            }
            player.bar.maxairbarpercentage = 140
            player.abilitys.button_w = abilitiesswitcher(19);
            player.abilitys.button_w_mini = abilitiesswitcher(100);





            break
        case 77://pterodactyl
            player.tier = 14
            player.bar.normalbar = 3
            player.whichbiome = 0
            player.nextxp = 10000000;

            player.flags.push(26)
            player.baserad = 40
            player.addrad = 0.3
            player.lessrad = 0.3

            player.speeds = {
                landspeed: 4.2,
                oceanspeed: 2.4,
                arcticspeed: 3.5,
                lavaspeed: 3.25,
                flyspeed: 60, // fly spped.
            }

            player.isgliding = false

            player.abilitys.button_w = abilitiesswitcher(80);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 140
            player.bar.maxbarnormalpercentage = 200;
            player.bar.normalbarpercentage = 200;


            break;
        case 53://trx
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 10000000;

            player.baserad = 60
            player.addrad = 0.4
            player.lessrad = 0.3

            player.speeds = {
                landspeed: 12.04,
                oceanspeed: 12.04,
                arcticspeed: 12.04,
                lavaspeed: 12.04,

            }
            player.bar.maxairbarpercentage = 220
            player.abilitys.button_w = abilitiesswitcher(37);
            player.abilitys.button_w_mini = abilitiesswitcher(100);


            break
        case 68://phoenix
            player.tier = 14
            player.bar.normalbar = 2
            player.whichbiome = 6
            player.nextxp = 10000000;

            player.baserad = 50
            player.addrad = 0.3
            player.lessrad = 0.3

            player.flags.push(26)
            player.speeds = {
                landspeed: 10.2,
                oceanspeed: 3,
                arcticspeed: 3.4,
                lavaspeed: 20.2,

            }
            player.bar.maxairbarpercentage = 60;
            player.bar.maxbarnormalpercentage = 150;
            player.bar.normalbarpercentage = 150;
            player.abilitys.button_w = abilitiesswitcher(61);
            player.abilitys.button_w_mini = abilitiesswitcher(100);





            break
        case 24://krakne
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 1
            player.nextxp = 10000000;

            player.baserad = 45
            player.addrad = 0.3
            player.lessrad = 0.3

            player.speeds = {
                landspeed: 2,
                oceanspeed: 12.2,
                arcticspeed: 2,
                lavaspeed: 2,

            }
            player.bar.maxairbarpercentage = 450
            player.abilitys.button_w = abilitiesswitcher(5);
            player.abilitys.button_w_mini = abilitiesswitcher(100);




            break
        case 32:
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 2
            player.nextxp = 10000000;
            player.transforming = false

            player.baserad = 40
            player.addrad = 0.2
            player.lessrad = 0.3

            player.flags.push(26)
            player.speeds = {
                landspeed: 4.2,
                oceanspeed: 4.40,
                arcticspeed: 4.2,
                lavaspeed: 3,

            }
            player.bar.maxairbarpercentage = 70
            player.abilitys.button_w = abilitiesswitcher(11);
            player.abilitys.button_w_mini = abilitiesswitcher(100);



            break
        case 61:
            player.baserad = 45
            player.addrad = 0.3
            player.lessrad = 0.3
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 4
            player.nextxp = 10000000;

            player.flags.push(26)
            player.speeds = {
                landspeed: 9,
                oceanspeed: 7.3,
                arcticspeed: 8.9,
                lavaspeed: 8,

            }
            player.abilitys.button_w = abilitiesswitcher(51);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.bar.maxairbarpercentage = 350

            break
        //ele tier
        case 48://elepohant
            player.tier = 13
            player.baserad = 50
            player.addrad = 0.2
            player.lessrad = 0.3

            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 1000000;


            player.speeds = {
                landspeed: 8.25,
                oceanspeed: 8.5,
                arcticspeed: 8.25,
                lavaspeed: 8,

            }
            player.bar.maxairbarpercentage = 200
            player.abilitys.button_w = abilitiesswitcher(31);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            break
        case 52://giant spider
            player.tier = 13

            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 500000;

            player.baserad = 30
            player.addrad = 0.2
            player.lessrad = 0.3

            player.flags.push(26)
            player.speeds = {
                landspeed: 4.2,
                oceanspeed: 3.5,
                arcticspeed: 4.2,
                lavaspeed: 3,

            }
            player.bar.maxairbarpercentage = 200
            player.abilitys.button_w = abilitiesswitcher(35);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            break
        case 49:
            player.tier = 13
            player.bar.normalbar = 0
            player.whichbiome = 1
            player.nextxp = 1000000;

            player.baserad = 45
            player.addrad = 0.3
            player.lessrad = 0.3

            player.speeds = {
                landspeed: 2,
                oceanspeed: 4.2,
                arcticspeed: 2,
                lavaspeed: 2,

            }
            player.bar.maxairbarpercentage = 300
            player.abilitys.button_w = abilitiesswitcher(32);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            break
        case 65:
            player.tier = 13
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 1000000;

            player.baserad = 40
            player.addrad = 0.3
            player.lessrad = 0.3

            player.speeds = {
                landspeed: 4.2,
                oceanspeed: 3,
                arcticspeed: 4.2,
                lavaspeed: 4.40,

            }
            player.bar.maxairbarpercentage = 50
            player.abilitys.button_w = abilitiesswitcher(57);
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            break

        case 43:
            player.tier = 13
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.nextxp = 1000000;


            player.speeds = {
                landspeed: 4.2,
                oceanspeed: 3,
                arcticspeed: 4.2,
                lavaspeed: 4.40,

            }
            player.bar.maxairbarpercentage = 350

            player.abilitys.button_w_mini = abilitiesswitcher(100);
            break
        //dif

        default:
            player.tier = 14
            player.bar.normalbar = 0
            player.whichbiome = 0
            player.abilitys.button_w_mini = abilitiesswitcher(100);
            player.nextxp = 10000000;

            break;
    }

}
animalswitcher.prototype = {}
module.exports = animalswitcher
