 class scene2 extends universal_scene {
    constructor() {
        super("scene2");
    }
    preload() {
      this.load.image('bullet', 'assets/img/bullet.png');
      this.load.image('enemy', 'assets/img/enemy.png');
      this.load.image("mobile_controls", "assets/img/mobile_controls.png");
      this.load.image('mobile_gun', 'assets/img/mobile_gun.png');
  }


    create() {
     
      
score = 300;
        if (currentScene == "scene2") {
            deathAmount +=1;
        }else{

          this.scene.start(currentScene);
        }
        // -----------------------background--------------------
        const container = this.add.container(0, 0).setName('conty');
        this.background = this.add.tileSprite(0, -100, 9024, 576, 'background').setName('background');
         this.background.setOrigin(0, 0);
         container.add(this.background);

        // Align.scaleToGameW(this.background, );
        // Align.center(   this.background);
        
       
  // Create platforms group
var platforms = this.physics.add.staticGroup();
var sign = this.physics.add.staticGroup();
 var spikes = this.physics.add.staticGroup();
 var door = this.physics.add.staticGroup();
 this.bullets = this.physics.add.group();
 this.ebullets = this.physics.add.group();
 var shape = this.physics.add.group();
  enemy = this.physics.add.group();
  enemyGroup = this.physics.add.group();
//----------------player-------------------
health = 4;

 player = this.physics.add.sprite(50, 300, 'player');

// player = this.physics.add.sprite(2500, 249, 'player');



//  player.body.setCircle(100);
player.setScale(0.1);

player.setBounce(0);

player.setSize(350, 530); 
  player.setOffset(177, 88); 
player.setCollideWorldBounds(false);
player.setDepth(1);






 //----------------platforms-------------------
 platforms.create(1024, 500, 'ground').setScale(2).refreshBody(); //ground platform
 platforms.create(3324, 500, 'ground').setScale(2).refreshBody(); //ground platform
//  platforms.create(200, 200, 'ground').setScale(0.2).refreshBody(); 
 //platforms.create(1000, 200, 'ground').setScale(0.2).refreshBody(); 
 //platforms.create(1700, 300, 'ground').setScale(0.2).refreshBody();
 //platforms.create(1500, 175, 'ground').setScale(0.2).refreshBody();

 platforms.create(2500, 285, 'ground').setScale(0.2).refreshBody();
 platforms.create(2650, 155, 'ground').setScale(0.2).refreshBody();

 platforms.create(3050, 155, 'ground').setScale(0.2).refreshBody();
 this.physics.add.collider(player, platforms, this.hitPlatform, null, this);
 
 this.physics.add.collider(player, platforms);
//jos haluat piikin maahan laita se 361px
//jos haluat piikit platformille laita ne 36px korkeammalle kuin platformin y

//----------------spikes-------------------
 spikes.create(500, 361, 'spike').setScale(1.5).refreshBody(); 
 spikes.create(2729, 119, 'spike').setScale(1.5).refreshBody(); 
  spikes.create(3073, 119, 'spike').setScale(1.5).refreshBody();
 spikes.create(2579, 249, 'spike').setScale(1.5).refreshBody(); 
 spikes.create(2535, 249, 'spike').setScale(1.5).refreshBody(); 
 spikes.create(3600, 361, 'spike').setScale(1.5).refreshBody(); 
 this.physics.add.collider(spikes, platforms);
 spikeCollider = this.physics.add.collider(player, spikes, this.death, null, this);

 //----------------door-------------------
 door.create(200, 311, 'door').setScale(5).refreshBody();
 door.create(4200, 311, 'door').setScale(5).refreshBody();
 this.physics.add.overlap(door, player, this.Gotoscene3, null, this);
//----------------sign-------------------

//when adding text to  a sign x -30 y -20
sign.create(4000, 341, 'sign').setScale(3).refreshBody();    
sign.create(2312, 341, 'sign').setScale(3).refreshBody();
this.add.text(2312-30, 341-23,"choose ↗ 🠖\n your path").setFontSize(40).setScale(0.25);

this.add.text(3965,321,"press down ↓").setFontSize(40).setScale(0.25);
//----------------camera-------------------

        this.cameras.main.setBounds(0, -100, 9024, 576);
        this.cameras.main.startFollow(player, true, 0.08, 0.1);
        this.cameras.main.setZoom(1.5);

       


        //--------------- Enemy line of sight --------------------
        
    //----------------enemy-------------------
        
        // const path = new Phaser.Curves.Path(800, 361).lineTo(1100, 361);
        // const path2 = new Phaser.Curves.Path(1800, 361).lineTo(2100, 361);
        // var enemy = this.add.follower(path, 0, 0, 'enemy');
        // var enemy = this.add.follower(path2, 0, 0, 'enemy');
        
         enemy.create(800, 361, '').setVisible(false);
         enemy.create(3000, 361, '').setVisible(false);
         enemy.getChildren().forEach((child) => { child.active = false;});
         
         //this.physics.add.collider(enemy, platforms);
         //console.log(enemy);
         enemy.getChildren().forEach((child) => {
          
         var enemylocationX = child.x
         var enemylocationY = child.y
         
          const path = new Phaser.Curves.Path(enemylocationX, 361).lineTo(enemylocationX+300, 361);
          const enemyFollower = this.add.follower(path, enemylocationX, enemylocationY = enemy.y, 'enemy')
          this.physics.add.existing(enemyFollower).setScale(1.5);
          //console.log(enemyFollower);
          this.physics.add.existing(enemyFollower);
          this.physics.add.collider(enemyFollower, platforms);
          enemyCollider = this.physics.add.overlap(player, enemyFollower, this.death, null, this);

         enemyFollower.startFollow ( {
            flipX:  child.flipX = true,
             positionOnPath: true,
             duration: 2500,
             yoyo: true,
             repeat: -1,
             rotateToPath: false,
              verticalAdjust: false,
             
              onUpdate: function() {
                 if (enemyFollower.pathTween.getValue() == 1) {
                   //console.log(shape); 
                   //shape.scaleX = -1;
                   enemyFollower.flipX = false;
                   
                     // this.shootEnemyBullet();
                 //   console.log("flip")
                 } else if (enemyFollower.pathTween.getValue() == 0) {
                  
                   //console.log(shape);
                   //shape.scaleX = 1;
                   enemyFollower.flipX = true;
                 
                 }
               
                  shootingEnemyx = enemyFollower.x 
                  shootingEnemyy = enemyFollower.y 
                  shootingEnemyflipX = enemyFollower.flipX
                 
               }
              
          
         });
      

        enemy.add(enemyFollower);
        
        });
        //shootingEnemy = this.children.exists(enemy);
        //enemy shooting timer
        
        this.timedEvent = this.time.addEvent({ delay: 900, callback: this.onEvent, callbackScope: this, loop: true });
        //----------------------------------- healthtext --------------------------------
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.scoreCounter, callbackScope: this, loop: true });
        this.Healthtxt = this.add.text(100, 200, 'Health: ' + healthdisplay , {backgroundColor: txtbackground,    padding: { top: 200, bottom: 20 , left:40}})
        this.Scoretxt = this.add.text(100, 200, 'score: ' + score,  {backgroundColor: txtbackground, padding: { top: 200, bottom: 20 ,right:40}})
        this.Scoretxt.setColor('#000000');  
        console.log("death amount : " + deathAmount);

        //----------------Mobile controls-------------------
        if(this.sys.game.device.os.android || this.sys.game.device.os.iOS){
         this.buttonR = this.add.image(400, 300, 'mobile_controls').setScale(2);
         this.buttonL = this.add.image(300, 300, 'mobile_controls').setRotation(Math.PI / 1).setScale(2);
         this.buttonU = this.add.image(400, 300, 'mobile_controls').setRotation(Math.PI / -2).setScale(2);
         this.buttonD = this.add.image(300, 300, 'mobile_controls').setRotation(Math.PI / 2).setScale(2);
        this.buttonG = this.add.image(300, 300, 'mobile_gun').setScale(2);
        }
        console.log(this.sys.game.device.os);

      }





Gotoscene3() {
  let cursors = this.input.keyboard.createCursorKeys();
  if (cursors.down.isDown || cursors.up.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {

    universalScore += score;
    healthamount += healthdisplay;
    this.scene.start("scene3")
  }

 }

//----------------bullet-------------------
//remember to add this code to other scenes if you want to use bullets: this.scene.get("scene2").shootBullet();
shootBullet() {
  
  var bullet = this.physics.add.sprite(player.x, player.y, 'bullet')
  this.bullets.add(bullet);
  bullet.body.allowGravity = false;
  setTimeout(function() {
    bullet.destroy();
}, 600);
  if (player.flipX) {
    bullet.setScale(-0.05);
      bullet.setVelocityX(-500);

  } else {
    bullet.setScale(0.05);
      bullet.setVelocityX(500);
  }

  // Enable physics body for the bullet
  this.physics.add.existing(bullet);
//console.log(enemyGroup);
  // Enable physics body for each enemy in the enemyGroup

  // enemy.children.iterate((child)  => {
  //   console.log(child);
  // });
//    var enemyChild
//     enemy.getChildren().forEach((child) => {
//       enemyChild = child;
// console.log("enemy child: " +  enemyChild);

    this.physics.add.collider(this.bullets, enemy, this.enemyDeath, null, this);
  //  });
 
   
 
  
 

  //  Set up collision between bullets and enemies
  
  var delay = 3000;
  setTimeout(function() {
    bullet.destroy();
}, delay);
}

shootEnemyBullet() {
  
  enemy.getChildren().forEach((child) => {
   
      var ebullet = this.physics.add.sprite(child.x, child.y, 'bullet');
      this.ebullets.add(ebullet);
      ebullet.body.allowGravity = false;

      if (shootingEnemyflipX) {
        ebullet.setScale(0.05);
        ebullet.setVelocityX(500);
      } else {
        ebullet.setScale(-0.05);
        ebullet.setVelocityX(-500);
      }

      this.physics.add.existing(ebullet);
      this.physics.add.collider(this.ebullets, player, this.deathByEnemy, null, this);

      setTimeout(() => {
        ebullet.destroy();
      }, 1000);
    
  });
}
 








}
