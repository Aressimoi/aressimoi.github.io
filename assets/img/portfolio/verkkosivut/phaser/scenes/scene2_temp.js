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
    currentScene = "scene4";
     var enemy = this.physics.add.group();
    var platforms = this.physics.add.staticGroup();
    // var spikes = this.physics.add.staticGroup();
    // var door = this.physics.add.staticGroup();
    var wall = this.physics.add.staticGroup();
// cannon = this.physics.add.staticGroup();

this.bullets = this.physics.add.group();
// this.ebullets = this.physics.add.group();
// var sign = this.physics.add.staticGroup();
// enemy = this.physics.add.group();
// enemyGroup = this.physics.add.group();
// ------------------player---------------------

player = this.physics.add.sprite(50, 0, 'player');
//  player.body.setCircle(100);
player.setScale(0.1);

player.setBounce(0);

player.setSize(350, 530); 
  player.setOffset(177, 88); 
player.setCollideWorldBounds(false);


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



//---------------------------cannon----------------------------------------

// ------------------door---------------------



// ------------------camera---------------------
  this.cameras.main.setBounds(0, 0, 1024, 1300);
  this.cameras.main.startFollow(player, true, 0.08, 1.0);
  this.cameras.main.setZoom(1.5);



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
        
        this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
        //----------------------------------- healthtext --------------------------------
    
        this.Healthtxt = this.add.text('Health: ' + healthdisplay).setFontSize(24);
        
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
      this.physics.add.collider(this.ebullets, player, this.death, null, this);

      setTimeout(() => {
        ebullet.destroy();
      }, 1000);
    
  });
}
 








}
