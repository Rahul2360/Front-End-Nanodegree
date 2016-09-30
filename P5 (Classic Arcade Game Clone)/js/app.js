var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.speed = this.bug_speed();
    this.sprite = 'images/enemy-bug.png';
};
var total = 0;
var high_speed = 300,
    low_speed = 100;

Enemy.prototype.update = function(dt) {
    if (this.x < 500) {
        this.x = this.x + this.speed * dt;
    } else {
        this.x = -50;
        this.speed = this.bug_speed();
    }
};

Enemy.prototype.bug_speed = function() {
    return Math.floor(Math.random() * (high_speed - low_speed + 1) + low_speed);
};
var allEnemies = [];
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {

    //var j=allEnemies.length;
    for (var i = 0,len= allEnemies.length;i<len; i++) {
        if ((this.x >allEnemies[i].x-101) && (this.x<allEnemies[i].x +101) && (this.y == allEnemies[i].y)) {
            this.reset();
        }
    }

};
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        if (this.x > 0) {
            this.x = this.x - 100;
        }
    } else if (key == 'up') {
        if (this.y > 40) {
            this.y = this.y - 90;
        } else {
            total = total + 1;
            $('#total').text(total);
            this.reset();
        }
    } else if (key == 'right') {
        if (this.x < 400) {
            this.x = this.x + 100;
        }
    } else if (key == 'down') {
        if (this.y < 400) {
            this.y = this.y + 90;
        }
    }
};

var player = new Player(200, 400);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(0, 40),
    new Enemy(0, 130),
    new Enemy(0, 220),
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
