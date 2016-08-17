/**
 * FileName: app.js
 *
 * @author Kenneth Bato
 * @date August 17, 2016
 *
 * StudentID: 300448795
 *
 * @description This file is the main javascript file for the web site
 */
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;

    //declare var for rollButton and dice labels
    var rollButton;
    var diceLabel1;
    var diceLabel2;
    //declare variables for dice numbers
    var d1;
    var d2;
    var diceOne;
    var diceTwo;

    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        //position objects onto canvas
        d1.x = 30;
        d1.y = 30
        diceLabel1.x = 50;
        diceLabel1.y = 250;
        d2.x = 400;
        d2.y = 30;
        diceLabel2.x = 420;
        diceLabel2.y = 250;
        rollButton.x = 240;
        rollButton.y = 400;

        stage.update();
    }

    // function to randomize dice rolls and change image of dice
    function rollButton_clicked() {
        //initialize diceOne and diceTwo upon button click
        diceOne = Math.floor(Math.random() * 6) + 1;
        diceTwo = Math.floor(Math.random() * 6) + 1;
        //switch statements to change image and label base on Math.randoms
        switch (diceOne) {
            case 1:
                d1 = new createjs.Bitmap("../Assets/images/1.png");
                stage.addChild(d1);
                diceLabel1.text = "1";
                break;
            case 2:
                d1 = new createjs.Bitmap("../Assets/images/2.png");
                stage.addChild(d1);
                diceLabel1.text = "2";
                break;
            case 3:
                d1 = new createjs.Bitmap("../Assets/images/3.png");
                stage.addChild(d1);
                diceLabel1.text = "3";
                break;
            case 4:
                d1 = new createjs.Bitmap("../Assets/images/4.png");
                stage.addChild(d1);
                diceLabel1.text = "4";
                break;
            case 5:
                d1 = new createjs.Bitmap("../Assets/images/5.png");
                stage.addChild(d1);
                diceLabel1.text = "5";
                break;
            case 6:
                d1 = new createjs.Bitmap("../Assets/images/6.png");
                stage.addChild(d1);
                diceLabel1.text = "6";
                break;
        }
        // switch statement to change second dice
        switch (diceTwo) {
            case 1:
                d2 = new createjs.Bitmap("../Assets/images/1.png");
                stage.addChild(d2);
                diceLabel2.text = "1";
                break;
            case 2:
                d2 = new createjs.Bitmap("../Assets/images/2.png");
                stage.addChild(d2);
                diceLabel2.text = "2";
                break;
            case 3:
                d2 = new createjs.Bitmap("../Assets/images/3.png");
                stage.addChild(d2);
                diceLabel2.text = "3";
                break;
            case 4:
                d2 = new createjs.Bitmap("../Assets/images/4.png");
                stage.addChild(d2);
                diceLabel2.text = "4";
                break;
            case 5:
                d2 = new createjs.Bitmap("../Assets/images/5.png");
                stage.addChild(d2);
                diceLabel2.text = "5";
                break;
            case 6:
                d2 = new createjs.Bitmap("../Assets/images/6.png");
                stage.addChild(d2);
                diceLabel2.text = "6";
                break;
        }
    }

    function main() {
        //label objects
        diceLabel1 = new createjs.Text("", "30px Calibri", "Black");
        stage.addChild(diceLabel1);
        diceLabel2 = new createjs.Text("", "30px Calibri", "Black");
        stage.addChild(diceLabel2);

        //Create roll button from image assets
        rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        d1 = new createjs.Bitmap("../Assets/images/blank.png");
        d2 = new createjs.Bitmap("../Assets/images/blank.png");
        //add to stage
        stage.addChild(d1);
        stage.addChild(d2);
        stage.addChild(rollButton);
        rollButton.on("click", rollButton_clicked);
    }
    window.addEventListener("load", init);

})(core || (core = {}));
//# sourceMappingURL=app.js.map