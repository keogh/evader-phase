var game = new Phaser.Game(350, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var player;

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('ship', 'assets/ship.png');
}

function create() {
  player = game.add.sprite(0, 0, 'ship');
  player.x = game.width/2 - player.width/2;
  player.y = game.height - player.height - 5;
}

function update() {
}