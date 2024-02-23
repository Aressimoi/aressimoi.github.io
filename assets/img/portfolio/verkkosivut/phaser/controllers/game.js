// import Phaser from 'phaser';

  //import PhaserRaycaster from 'phaser-raycaster.min.js';

const config = {
  type: Phaser.AUTO,
  width: 1024,
    // height: 1400,
    height: 576,
  //  backgroundColor: 0x000000,
   backgroundColor:  0x993432,
 
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 330 },
        debug: false
    }
},
  scene: [universal_scene,PlayerScene,scene1,scene2,scene3,scene4,deathScene,scoreScene],
  plugins: {
    scene: [
        {
            key: 'PhaserRaycaster',
            plugin: PhaserRaycaster,
            mapping: 'raycasterPlugin'
        }
    ]
},
  //  scene: {
  //    preload,
  //    create,
  //   update,
  //  }
};
var movingloopR = false;
var movingloopL = false;
var movingloopU = false;
var movingloopD = false;
var movingloopG = false;
var i = 0;
var txtbackground = "#615f5f";
var alive_enemies = 5;
var universalScore = 0;
var healthamount = 0;
var score = 1000;
var deathAmount = -1;
var wall;
var healthdisplay;
var cannonchildX;
var cannonchildY;
var cannon;
var ebullet;
var takingDamage = false;
var loopedEvent;
this.timedEvent;
var shootingEnemy;
var shootingEnemyflipX;
var shootingEnemyx;
var shootingEnemyy;
var raycaster;
var player_rectangle;
var shape;
var enemyGroup;
var bullets
var currentScene = "scene2";
var platforms;
var player;
var spikes;
var cursors;
var bullets;
var enemy;
var gameOver = false;
const shootTime = 0; 
var health = 4;
var spikeCollider;
var enemyCollider;
var bullet;
var game = new Phaser.Game(config);
