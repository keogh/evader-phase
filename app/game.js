var game = new Phaser.Game(350, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var player,
  cursors;

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('ship', 'assets/ship.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  player = game.add.sprite(0, 0, 'ship');
  player.x = game.width/2 - player.width/2;
  player.y = game.height - player.height - 5;
  game.physics.arcade.enable(player);

  cursors = game.input.keyboard.createCursorKeys();
}


function update() {
  player.body.velocity.x = 0;
  if (cursors.left.justDown && player.body.x - player.width > 0) {
    player.body.x -= player.width;
  } else if (cursors.right.justDown && player.body.x + player.width * 2 < game.width) {
    player.body.x += player.width;
  }
}