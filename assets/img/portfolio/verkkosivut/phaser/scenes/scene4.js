class scene4 extends universal_scene{
    constructor() {
        super("scene4");
    }
preload(){

    this.load.image('wall', 'assets/img/level3_wall.png');
    this.load.image('small_wall', 'assets/img/level3_small_wall.png');
    this.load.image('ground3', 'assets/img/level3_ground.png');
    this.load.image('bullet', 'assets/img/bullet.png');
    this.load.image('enemy', 'assets/img/enemy.png');

}
create(){
    score = 300;
    if (currentScene == "scene4") {
        deathAmount +=1;
    }
    currentScene = "scene4";
    
      enemy = this.physics.add.group();
    var platforms = this.physics.add.staticGroup();
    var spikes = this.physics.add.staticGroup();
     var door = this.physics.add.staticGroup();
    wall = this.physics.add.staticGroup();
// cannon = this.physics.add.staticGroup();

this.bullets = this.physics.add.group();
 this.ebullets = this.physics.add.group();
// var sign = this.physics.add.staticGroup();

 enemyGroup = this.physics.add.group();
// ------------------player---------------------

player = this.physics.add.sprite(70, 0, 'player');
//  player.body.setCircle(100);
player.setScale(0.1);

player.setBounce(0);

player.setSize(350, 530); 
  player.setOffset(177, 88); 
player.setCollideWorldBounds(false);
player.setDepth(1);

// ------------------grounds and walls---------------------
// platforms.create(1024, 500, 'ground').setScale(2).refreshBody()

platforms.create(200, 300, 'ground3').setScale(3).refreshBody();
platforms.create(500, 300, 'ground3').setScale(3).refreshBody();
//after these 2 sign that says hump down

platforms.create(1024-200, 450, 'ground3').setScale(3).refreshBody();

//small wall x: -133 y:-140
wall.create(367, 440, 'small_wall').setScale(3).refreshBody();
platforms.create(500, 580, 'ground3').setScale(3).refreshBody();
platforms.create(750, 580, 'ground3').setScale(3).refreshBody();
platforms.create(1024-100, 740, 'ground3').setScale(3).refreshBody();
wall.create(500-133, 740-140, 'small_wall').setScale(3).refreshBody();
platforms.create(500, 740, 'ground3').setScale(3).refreshBody();

wall.create(700-133, 900, 'small_wall').setScale(3).refreshBody();
wall.create(700-133, 950, 'small_wall').setScale(3).refreshBody();
platforms.create(700, 900, 'ground3').setScale(3).refreshBody();
platforms.create(1024, 1100, 'ground3').setScale(3).refreshBody();
platforms.create(650, 1100, 'ground3').setScale(3).refreshBody();
platforms.create(490, 1100, 'ground3').setScale(3).refreshBody();
platforms.create(1024-100, 1350, 'ground3').setScale(20).refreshBody();
platforms.create(100, 1150, 'ground3').setScale(3).refreshBody();

 platforms.create(200, 1000, 'ground3').setScale(3).refreshBody();
 platforms.create(300, 1000, 'ground3').setScale(3).refreshBody();
 platforms.create(405, 900, 'ground3').setScale(3).refreshBody();
 platforms.create(35, 820, 'ground3').setScale(3).refreshBody();
 platforms.create(405, 740, 'ground3').setScale(3).refreshBody();
 platforms.create(50, 655, 'ground3').setScale(3).refreshBody();
 platforms.create(405, 580, 'ground3').setScale(3).refreshBody();
 platforms.create(100, 490, 'ground3').setScale(3).refreshBody();
 
this.physics.add.collider(player, platforms);



//----------------------------- big wall_________________________
wall.create(-750,1200, 'wall').setScale(80).refreshBody()
wall.create(1024+750,1200, 'wall').setScale(80).refreshBody()

this.physics.add.collider(player, wall);

// ------------------spikes---------------------
// spikes y: -41 if left corner x: -127 if right corner x: + 126
spikes.create(200, 259, 'spike').setScale(1.5).refreshBody()
spikes.create(697, 409, 'spike').setScale(1.5).refreshBody()
spikes.create(797, 699, 'spike').setScale(1.5).refreshBody()
spikes.create(700+126, 900-41,  'spike').setScale(1.5).refreshBody()
this.physics.add.collider(player, spikes, this.death, null, this);

//---------------------------cannon----------------------------------------

// ------------------door---------------------

door.create(400, 209, 'dungeon_door').setScale(5).refreshBody();
door.create(150, 399, 'dungeon_door').setScale(5).refreshBody();
this.physics.add.overlap(player, door, this.GotoScore, null, this);

// ------------------camera---------------------
   this.cameras.main.setBounds(0, 0, 1024, 1300);
   this.cameras.main.startFollow(player, true, 0.08, 1.0);
   this.cameras.main.setZoom(1.5);



    //----------------enemy-------------------
        
    enemy.getChildren().forEach((child) => { child.active = false;});
    //enemy y: -45

        enemy.create(500, 535, '').setVisible(false);
        enemy.create(400, 1212, '').setVisible(false);
        enemy.create(100, 955, '').setVisible(false);
        enemy.getChildren().forEach((child) => { child.active = false;});
        
        //this.physics.add.collider(enemy, platforms);
        //console.log(enemy);
        enemy.getChildren().forEach((child) => {
         
        var enemylocationX = child.x
        var enemylocationY = child.y
        
         const path = new Phaser.Curves.Path(enemylocationX, enemylocationY).lineTo(enemylocationX+300, enemylocationY);
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
        this.physics.add.collider(enemyFollower, platforms);
       enemy.add(enemyFollower);
       });

  

       this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
       this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.scoreCounter, callbackScope: this, loop: true });

        //----------------------------------- healthtext & scoretext --------------------------------
    health = 4;
    this.Healthtxt = this.add.text(100, 200, 'Health: ' + healthdisplay , {backgroundColor: txtbackground,    padding: { top: 200, bottom: 20 , left:40}})
    this.Scoretxt = this.add.text(100, 200, 'score: ' + score,  {backgroundColor: txtbackground, padding: { top: 200, bottom: 20 ,right:40}})
    this.Scoretxt.setColor('#000000');  
        
      
        
}
//-----------------------------go to score scene---------------------

GotoScore() {
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.down.isDown || cursors.up.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
  
      universalScore += score;
      healthamount += healthdisplay;
      this.scene.start("scoreScene")
    }
  
   }

//---------------------------bullet-------------------

bulletcollider(bullet) {

if(bullet){
    bullet.destroy();
}


}
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
    this.physics.add.existing(bullet);
 
    this.physics.add.collider(this.bullets, wall,this.bulletcollider, null, this);
  
    if(enemy.children != undefined){
      this.physics.add.collider(this.bullets, enemy, this.enemyDeath, null, this);
    }
   
  
    
    
    var delay = 3000;
    setTimeout(function() {
      bullet.destroy();
  }, delay);
  }

  // -------------------------------enemy bullet---------------------


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
    this.physics.add.collider(this.ebullets, wall,this.bulletcollider, null, this);
    this.physics.add.collider(this.ebullets, player,this.ebulletDestroy, null, this);
  }
  

}