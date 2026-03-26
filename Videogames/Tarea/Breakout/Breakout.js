/*
 * Breakout
 *
 * Alonso Arechiga
 * 2025-03-09
 */

"use strict";

// Global variables
const canvasWidth = 800;
const canvasHeight = 600;

// Context of the Canvas
let ctx;

// A variable to store the game object
let game;

// Variable to store the time at the previous frame
let oldTime = 0;

let playerSpeed = 0.5;

// Class for the main character in the game
class Player extends GameObject {
    constructor(position, width, height, color, sheetCols) {
        super(position, width, height, color, "player", sheetCols);
        this.velocity = new Vector(0, 0);
    }

    update(deltaTime) {
        // Normalize the velocity verctor to use the same speed on the diagonals
        this.velocity = this.velocity.normalize().times(playerSpeed);
        this.position = this.position.plus(this.velocity.times(deltaTime));

        this.clampWithinCanvas();
    }

    clampWithinCanvas() {
        // Top border
        if (this.position.y - this.halfSize.y < 0) {
            this.position.y = this.halfSize.y;
        // Left border
        }
        if (this.position.x - this.halfSize.x < 0) {
            this.position.x = this.halfSize.x;
        // Bottom border
        }
        if (this.position.y + this.halfSize.y > canvasHeight) {
            this.position.y = canvasHeight - this.halfSize.y;
        // Right border
        }
        if (this.position.x + this.halfSize.x > canvasWidth) {
            this.position.x = canvasWidth - this.halfSize.x;
        }
    }
}

class ball{
    constructor(){
        this.x = canvasWidth/2;
        this.y= canvasHeight/2 -50;
        this.ratio= 10;
        this.speed = 0;
        this.directionY= -1;
        this.directionX= 1;
        this.life= 3;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ratio, 0, Math.PI * 2);
        ctx.fillStyle = "aliceblue";
        ctx.fill();
        ctx.closePath();
    }

    update(deltaTime){
        this.x += this.directionX * this.speed * deltaTime;
        this.y += this.directionY * this.speed * deltaTime;

        if (this.x <= 0 && this.directionX < 0 || this.x + this.ratio >= canvasWidth && this.directionX > 0){
            this.directionX *= -1;
        }
        if (this.y <= 0 && this.directionY < 0) {
            this.directionY *= -1;
        }
        if (this.y + this.ratio >= canvasHeight) {
            this.life -=1;
            this.x = canvasWidth / 2;
            this.y = canvasHeight / 2 - 50;
            this.speed = 0;

        }
    }
}


// Class to keep track of all the events and objects in the game
class Game {
    constructor() {
        this.createEventListeners();
        this.initObjects();
    }

    initObjects() {
        this.player = new Player(new Vector(canvasWidth / 2, canvasHeight /1.2), 100, 10, "red");
        this.Break= 0;
        this.restart = false;
        this.ball= new ball();
        this.rows = 5;
        this.cols = 8;
        this.extra = 5;
        this.blwidth = canvasWidth / this.cols;
        this.blheight = 200 / this.rows;
        this.paddleTimer = 0;
        this.originalWidth = 100; 

        this.actors = [];
        let startX = this.blwidth / 2;
        let startY = 60;

        for(let r = 0; r < this.rows; r++){
            for(let c = 0; c < this.cols; c++){
                let x = startX + c * this.blwidth;
                let y = startY + r * this.blheight;
                let check = randomRange(100);
                if(check < 10 && this.extra>2){
                    let box = new GameObject(new Vector(x, y),this.blwidth - 5,this.blheight - 10,"green");
                    box.life = true;
                    box.more = false;
                    this.actors.push(box);
                    this.extra --;
                }
                else if(check < 10 && this.extra>0){
                    let box = new GameObject(new Vector(x, y),this.blwidth - 5,this.blheight - 10,"yellow");
                    box.life = false;
                    box.more = true;
                    this.actors.push(box);
                    this.extra --;
                }
                else{
                    let box = new GameObject(new Vector(x, y),this.blwidth - 5,this.blheight - 10,"red");
                    box.life = false;
                    box.more = false;
                    this.actors.push(box);
                }
            }
        }
    }

    draw(ctx) {
        for (let actor of this.actors) {
            actor.draw(ctx);
        }
        this.player.draw(ctx);
        this.ball.draw(ctx);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Lives: " + this.ball.life, 700, 25);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Blocks: " + this.Break, 10, 25);
    }

    update(deltaTime) {
        // Move the player
        this.player.update(deltaTime);
        if(this.ball.speed == 0){
            this.ball.x = this.player.position.x;
            this.ball.y = canvasHeight/2 +170;
        }
        this.ball.update(deltaTime);
        if (this.ball.x > this.player.position.x - this.player.halfSize.x &&
            this.ball.x < this.player.position.x + this.player.halfSize.x &&
            this.ball.y + this.ball.ratio > this.player.position.y - this.player.halfSize.y &&
            this.ball.y - this.ball.ratio < this.player.position.y + this.player.halfSize.y
        ) {
            this.ball.directionY *= -1;
        }
        // Check collision against other objects
        for (let actor of this.actors) {
            // Naive collision detection, using the distances between objects
            //if (this.player.position.minus(actor.position).magnitude() < 70) {
            // Collision detection between the objects

            if (this.ball.x > actor.position.x - actor.halfSize.x &&
            this.ball.x < actor.position.x + actor.halfSize.x &&
            this.ball.y + this.ball.ratio > actor.position.y - actor.halfSize.y &&
            this.ball.y - this.ball.ratio < actor.position.y + actor.halfSize.y ) {
                let dx = this.ball.x - actor.position.x;
                let dy = this.ball.y - actor.position.y;

                if (Math.abs(dx) > Math.abs(dy)) {
                    this.ball.directionX *= -1;
                } else {
                    this.ball.directionY *= -1;
                }
                if(actor.life == true){
                    this.ball.life += 1;
                }
                if (actor.more) {
                    this.player.size.x = 200;
                    this.player.halfSize.x = this.player.size.x / 2;
                    this.paddleTimer = 10000;
                }

                this.actors.splice(this.actors.indexOf(actor), 1);
                this.Break++;
                break;
            } 
        }   
        if (this.paddleTimer > 0) {
            this.paddleTimer -= deltaTime;

            if (this.paddleTimer <= 0) {
                this.player.size.x = this.originalWidth;
                this.player.halfSize.x = this.player.size.x / 2;
            }
        }

        if(this.actors.length == 0){
            this.ball.speed = 0;
            this.restart = true;
            ctx.fillStyle = "white";
            ctx.font = "40px Arial";
            ctx.fillText("YOU WON!!!", canvasWidth/2 - 120, canvasHeight/2);

            ctx.font = "20px Arial";
            ctx.fillText("Press SPACE to restart", canvasWidth/2 - 100, canvasHeight/2 + 40);
        }

        if(this.ball.life <= 0){
            this.restart = true;
            ctx.fillStyle = "white";
            ctx.font = "40px Arial";
            ctx.fillText("GAME OVER", canvasWidth/2 - 120, canvasHeight/2);

            ctx.font = "20px Arial";
            ctx.fillText("Press SPACE to restart", canvasWidth/2 - 100, canvasHeight/2 + 40);
        }
    }

    createEventListeners() {
        // Simple mechanic for the movement of a character
        // It breaks if multiple keys are pressed simultaneously
        window.addEventListener('keydown', (event) => {
            if (event.key == 'w') {
                //this.player.velocity.y = -1;
            } else if (event.key == 'a') {
                this.player.velocity.x = -1;
            } else if (event.key == 's') {
                //this.player.velocity.y = 1;
            } else if (event.key == 'd') {
                this.player.velocity.x = 1;
            } else if (event.key == ' '){
                if(this.restart == true){
                    this.initObjects();
                }
                else if (this.ball.speed == 0){
                    this.ball.speed = 0.3;
                    this.ball.directionY = -1;
                }
            }
        });

        window.addEventListener('keyup', (event) => {
            if (event.key == 'w') {
                this.player.velocity.y = 0;
            } else if (event.key == 'a') {
                this.player.velocity.x = 0;
            } else if (event.key == 's') {
                this.player.velocity.y = 0;
            } else if (event.key == 'd') {
                this.player.velocity.x = 0;
            }
        });
    }
}


// Starting function that will be called from the HTML page
function main() {
    // Get a reference to the object with id 'canvas' in the page
    const canvas = document.getElementById('canvas');
    // Resize the element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Get the context for drawing in 2D
    ctx = canvas.getContext('2d');

    // Create the game object
    game = new Game();

    drawScene(0);
}


// Main loop function to be called once per frame
function drawScene(newTime) {
    // Compute the time elapsed since the last frame, in milliseconds
    // TODO: Compute the correct value for deltaTime, using newTime and oldTime
    let deltaTime = newTime - oldTime;

    // Clean the canvas so we can draw everything again
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    game.update(deltaTime);

    game.draw(ctx);

    oldTime = newTime;
    requestAnimationFrame(drawScene);
}

