class scene3 extends universal_scene{
    constructor() {
        super("scene3");
    }

preload(){
  this.load.image('dungeon1', 'assets/img/dungeon1.png');
  this.load.image('dungeon1_ground', 'assets/img/dungeon1_ground.png');
  this.load.image('dungeon1_wall', 'assets/img/dungeon1_wall.png');
  this.load.image('dungeon_cannon', 'assets/img/dungeon_cannon.png');
  this.load.image('spiketower', 'assets/img/spiketower.png');

}
create(){
  score = 300;
  if (currentScene == "scene3") {
    deathAmount +=1;
}


    var platforms = this.physics.add.staticGroup();
    var walls = this.physics.add.staticGroup();
    var spikes = this.physics.add.staticGroup();
    var spike_tower = this.physics.add.staticGroup();
    var door = this.physics.add.staticGroup();
     cannon = this.physics.add.staticGroup();
    this.bullets = this.physics.add.group();
    this.ebullets = this.physics.add.group();


    console.log("Scene3")
    this.add.text(20,20,"Scene3")
//---------------background-------------------

const container = this.add.container(0, 0).setName('conty');
this.background = this.add.tileSprite(0, -200, 6024, 630, 'dungeon1').setName('background');
 this.background.setOrigin(0, 0);
 container.add(this.background);

    //-----------player-------------------
    player = this.physics.add.sprite(50, 300, 'player');
    //  player.body.setCircle(100);
    player.setScale(0.1);
    
    player.setBounce(0);
    
    player.setSize(350, 530); 
      player.setOffset(177, 88); 
    player.setCollideWorldBounds(false);
    player.setDepth(1);

//---------door-------------------

door.create(5800, 315, 'dungeon_door').setScale(5).refreshBody();
door.create(200, 315, 'dungeon_door').setScale(5).refreshBody();
this.physics.add.overlap(player, door, this.Gotoscene4, null, this);




//-----------platforms & walls-------------------
platforms.create(1000, 500, 'dungeon1_ground').setScale(20).refreshBody()
 platforms.create(3000, 500, 'dungeon1_ground').setScale(20).refreshBody()
 platforms.create(5000, 500, 'dungeon1_ground').setScale(20).refreshBody()
 platforms.create(1000, 270, 'dungeon1_ground').setScale(1.5).refreshBody()
 platforms.create(1350, 240, 'dungeon1_ground').setScale(1.5).refreshBody()
 platforms.create(1700, 210, 'dungeon1_ground').setScale(1.5).refreshBody()
 platforms.create(2050, 180, 'dungeon1_ground').setScale(1.5).refreshBody()
 platforms.create(2400, 150, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(2750, 120, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(3100, 90, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(3450, 60, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(3800, 30, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(4150, 0, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(4500, 100, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(4800, 190, 'dungeon1_ground').setScale(1.5).refreshBody()
  platforms.create(5100, 280, 'dungeon1_ground').setScale(1.5).refreshBody()
 walls.create(1067, 330, 'dungeon1_wall').setScale(1.5).refreshBody()
 

this.physics.add.collider(player, platforms);
this.physics.add.collider(player, walls);

//-----------spikes-------------------
//spikes from platform y: -33 x: + 52
spikes.create(500, 365, 'spike').setScale(1.5).refreshBody(); 

spikes.create(500, 200, 'spike').setScale(-1.5).refreshBody(); 
spikes.create(700, 365, 'spike').setScale(1.5).refreshBody(); 

spikes.create(1052, 237, 'spike').setScale(1.5).refreshBody(); 
spikes.create(1350+52, 240-33, 'spike').setScale(1.5).refreshBody()
spikes.create(1700+52, 210-33, 'spike').setScale(1.5).refreshBody()
spikes.create(2050+52, 180-33, 'spike').setScale(1.5).refreshBody()
spikes.create(2400+52, 150-33, 'spike').setScale(1.5).refreshBody()
spikes.create(2750+52, 120-33, 'spike').setScale(1.5).refreshBody()
spikes.create(3100+52, 90-33, 'spike').setScale(1.5).refreshBody()
spikes.create(3450+52, 60-33, 'spike').setScale(1.5).refreshBody()
spikes.create(3800+52, 30-33, 'spike').setScale(1.5).refreshBody()
spikes.create(4150+52, 0-33, 'spike').setScale(1.5).refreshBody()
spikes.create(4500+52, 100-33, 'spike').setScale(1.5).refreshBody()
spikes.create(4800+52, 190-33, 'spike').setScale(1.5).refreshBody()
spikes.create(5100+52, 280-33, 'spike').setScale(1.5).refreshBody()



spikes.create(700, 200, 'spike').setScale(-1.5).refreshBody();
spikeCollider = this.physics.add.collider(player, spikes, this.death, null, this);
spike_tower.create(500, 100, 'spiketower').setScale(1.5).refreshBody(); 
spike_tower.create(500, 0, 'spiketower').setScale(1.5).refreshBody(); 
spike_tower.create(700, 100, 'spiketower').setScale(1.5).refreshBody(); 
spike_tower.create(700, 0, 'spiketower').setScale(1.5).refreshBody(); 

this.physics.add.collider(player, spike_tower);
//-----------canon-------------------

cannon.create(1900, 363, 'dungeon_cannon').setScale(3).refreshBody(); 
cannon.create(2900, 363, 'dungeon_cannon').setScale(3).refreshBody(); 
cannon.create(3900, 363, 'dungeon_cannon').setScale(3).refreshBody(); 
cannon.create(4900, 363, 'dungeon_cannon').setScale(3).refreshBody();
this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });



//----------------camera-------------------
this.cameras.main.setBounds(0, -200, 6024, 686);
this.cameras.main.startFollow(player, true, 1.68, 0.60);
this.cameras.main.setZoom(1.5);

        //----------------------------------- healthtext & scoretxt --------------------------------
    health = 4;
    this.Healthtxt = this.add.text(100, 200, 'Health: ' + healthdisplay , {backgroundColor: txtbackground,    padding: { top: 200, bottom: 20 , left:40}})
    this.Scoretxt = this.add.text(100, 200, 'score: ' + score,  {backgroundColor: txtbackground, padding: { top: 200, bottom: 20 ,right:40}})
    this.Scoretxt.setColor('#000000');  
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.scoreCounter, callbackScope: this, loop: true });
        
        console.log("death amount : " + deathAmount);
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
 
    // Enable physics body for each enemy in the enemyGroup
  
    if(enemyGroup.children != undefined){
      this.physics.add.collider(this.bullets, enemy, this.enemyDeath, null, this);
    }
   
  
    //  Set up collision between bullets and enemies
    
    var delay = 3000;
    setTimeout(function() {
      bullet.destroy();
  }, delay);
  }

  Gotoscene4() {
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.down.isDown || cursors.up.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
    
      universalScore += score;
      healthamount += healthdisplay;
      this.scene.start("scene4")
    }
  
   }


  shootEnemyBullet() {
    



    
   // console.log(this.cannon.children.entries.x);
    cannon.getChildren().forEach((child) => {
        //console.log("Child location - x:", child.x, "y:", child.y);
       cannonchildX = child.x;
       cannonchildY = child.y;
      var ebullet = this.physics.add.sprite(cannonchildX-50, cannonchildY-16, 'bullet')

  this.ebullets.add(ebullet);
  ebullet.body.allowGravity = false;
  setTimeout(function() {
    ebullet.destroy();
}, 1000);
  
    ebullet.setScale(-0.05);
      ebullet.setVelocityX(-600);
 

  // Enable physics body for the bullet
  this.physics.add.existing(ebullet);

  // Enable physics body for each enemy in the enemyGroup

   this.physics.add.collider(this.ebullets, player, this.deathByEnemy, null, this);
  
 

  //  Set up collision between bullets and enemies
  

  //console.log(ebullet)
});
}








}