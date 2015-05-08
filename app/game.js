var game = new Phaser.Game(350, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var map = [
  [0,0,1],
  [0,1,0],
  [0,1,1],
  [1,0,0],
  [1,0,1],
  [1,1,0]
];

var player,
  cursors,
  enemyGroup,
  enemy;

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('enemy', 'assets/enemy.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('ship', 'assets/ship.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  player = game.add.sprite(0, 0, 'ship');
  player.x = game.width/2 - player.width/2;
  player.y = game.height - player.height - 5;
  
  enemyGroup = game.add.group();
  enemyGroup.enableBody = true;

  game.physics.arcade.enable(player);

  cursors = game.input.keyboard.createCursorKeys();

  createEnemies();
}


function update() {
  player.body.velocity.x = 0;
  if (cursors.left.justDown && player.body.x - player.width > 0) {
    player.body.x -= player.width;
  } else if (cursors.right.justDown && player.body.x + player.width * 2 < game.width) {
    player.body.x += player.width;
  }

  var enemies = enemyGroup.children;
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].body.y > game.height) {
      enemyGroup.remove(enemies[i], true, true);
    }
  }

  var lastEnemy = enemyGroup.children[enemyGroup.children.length-1];
  if (lastEnemy.body.y > lastEnemy.body.height * 1.5) {
    createEnemies();
  }
}

function createEnemies() {
  var line = map[getRandom(0, map.length-1)];
  for (var i = 0; i < line.length; i++) {
    if (line[i] === 0) {
      continue;
    }

    var x = generateXForEnemy(i);
    var enemy = enemyGroup.create(x, -100, 'enemy');
    enemy.body.velocity.y = 100;
  }
}

function generateXForEnemy(index) {
  if (index === 0) {
    return 10;
  } else if (index === 1) {
    return game.width / 2 - 49;
  } else {
    return game.width - 100;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}