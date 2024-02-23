class universal_scene extends Phaser.Scene {
    constructor(key) {
        super(key);
       
    }

    preload() {

        this.load.image('player', 'assets/img/player.png');
        this.load.image("background", "assets/img/outside_bg.png");
        this.load.image('ground', 'assets/img/grass_ground.png');
     
        this.load.image('spike', 'assets/img/spike.png');
        this.load.image('enemy', 'assets/img/enemy.png');
        // this.load.image('bullet', 'assets/img/bullet.png');
        this.load.image('door', 'assets/img/door.png');
        this.load.image('dungeon_door', 'assets/img/dungeon_door.png');
        this.load.image('sign', 'assets/img/sign.png');
        
      //  this.load.image('bullet', 'assets/img/bullet.png');
    }



    create() {
        // Create the bullets group
        
        this.bullets = this.physics.add.group();
       
  




        // ...

        // Start the game scene
        this.scene.start("bootGame");
    }





// --------------------Player--------------------

    death (player,ebullet){
//   console.log(ebullet);      
 
// bullet.setVelocityX(500);

        if(takingDamage == false){
 
            console.log(this.scene.key);
        if (health > 0) {
            takingDamage = true;
           health -= 1;
               console.log(health)
               player.setTint(0xff0000);
               setTimeout(() => {
                   player.clearTint();
                   takingDamage = false;
               }, 1000); 
            
        }
        else{
        // this.physics.pause();
        // console.log(health);
        
            gameOver = true;
             currentScene = this.scene.key;
            this.scene.start("deathScene")
        }
       }
    }

deathByEnemy(player, ebullet) {
       console.log(ebullet);      
    ebullet.destroy();
   // bullet.setVelocityX(500);
           if(takingDamage == false){
    
               console.log(this.scene.key);
           if (health > 0) {
               takingDamage = true;
              health -= 1;
                  console.log(health)
                  player.setTint(0xff0000);
                  setTimeout(() => {
                      player.clearTint();
                      takingDamage = false;
                  }, 1000); 
               
           }
           else{
           // this.physics.pause();
           // console.log(health);
           
               gameOver = true;
                currentScene = this.scene.key;
               this.scene.start("deathScene")
           }
          }
}
       onEvent ()
       {
          loopedEvent =  this.shootEnemyBullet();
       }

    enemyDeath(bullet, enemy) {
        alive_enemies += -1;
        enemy.destroy();
        bullet.destroy();
  
        
    }

    
    // --------------------ebullet destroy--------------------

    ebulletDestroy(ebullet){
        ebullet.destroy();
    }    
           


    hitPlatform(player, platform) {
       
        const distance = 5; 
        if (player.body.bottom <= platform.body.top + distance) {
            player.body.touching.down = true;
            player.body.blocked.down = true;
        }
    }
    onClickUp() {
        movingloopR = false;
        movingloopL = false;
        player.setVelocityX(0);  
    }

    update() {
        //movement
        let cursors = this.input.keyboard.createCursorKeys();
//camera position
        var cameraposX = this.cameras.main.scrollX;
        var cameraposY = this.cameras.main.scrollY;
        const shootDelay = 1000;



 
   
    this.Healthtxt.setFontSize(120).setScale(0.2).setFontStyle('bold');
       
    this.Healthtxt.setPosition(cameraposX+160, cameraposY+65); 
     healthdisplay = health+1;
     if (healthdisplay == 1) {
        this.Healthtxt.setColor('#ff0000');
     }else {
         this.Healthtxt.setColor('#000000');
     }
     this.Healthtxt.setText(' Health: ' + healthdisplay + " " ,);
    //score txt 

    this.Scoretxt.setFontSize(120).setScale(0.2).setFontStyle('bold');
    
    this.Scoretxt.setPosition(cameraposX+700, cameraposY+65); 
    this.Scoretxt.setText(" Time: " + score + " " ,);
    





   

   

    if(score < 0){
     gameOver = true;
     currentScene = this.scene.key;
    this.scene.start("deathScene")
    }














//--------------------------mobile controls--------------------------

if(this.sys.game.device.os.android || this.sys.game.device.os.iOS){
        this.buttonR.setPosition(cameraposX+400, cameraposY+425); 
        this.buttonL.setPosition(cameraposX+300, cameraposY+425);
        this.buttonU.setPosition(cameraposX+800, cameraposY+355);
        this.buttonD.setPosition(cameraposX+800, cameraposY+425);
        this.buttonG.setPosition(cameraposX+730, cameraposY+390);
        //moving right
        this.buttonR.setInteractive();
        this.buttonR.on('pointerdown', function () {
        movingloopR = true;
        
        console.log('Button clicked!');
    });
        //   buttonR.on('pointerup',function ()  {
        //     movingloopR = false;
        //     player.setVelocityX(0);
        //   });
          
      

    if(movingloopR === true){
        console.log(movingloopR);
        player.flipX = false;
         player.setVelocityX(360);
    }

//moving left

this.buttonL.setInteractive();
this.buttonL.on('pointerdown', function () {
    movingloopL = true;
   
});
   
if(movingloopL === true){
    console.log(movingloopL);
    player.flipX = true;
     player.setVelocityX(-360);
}

this.buttonU.setInteractive();
this.buttonU.on('pointerdown', function () {
    movingloopU = true;
   
});
          this.buttonU.on('pointerup',function ()  {
             movingloopU = false;
             
           });
   
if(movingloopU === true && player.body.touching.down){
    console.log(movingloopU);
     player.setVelocityY(-300);
}

this.buttonD.setInteractive();
this.buttonD.on('pointerdown', function () {
    movingloopD = true;
   
});
          this.buttonD.on('pointerup',function ()  {
             movingloopD = false;
             
           });
           if(movingloopD === true){
            console.log(movingloopD);
             player.setVelocityY(600);
        }

        this.buttonG.setInteractive();
        this.buttonG.on('pointerdown', function () {
            movingloopG = true;
           
        });
       
        if(movingloopG === true){
            
            var currentTime = this.time.now;
            if (currentTime - this.lastShotTime > shootDelay) {
                this.shootBullet();
                
                console.log("last shot time " + this.lastShotTime);
                this.lastShotTime = currentTime;
                console.log("current time " + currentTime );
                
            } 
        }

        this.buttonG.on('pointerup',function ()  {
            movingloopG = false;
            
          });



this.input.once('pointerup', this.onClickUp, this);
// if(movingloopR()){
        }else {


 
        // Set up cursor keys
        
        
        // Update player movement
        
         if (cursors.left.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
          
             player.setVelocityX(-360);
          
             // console.log(player.x);
             player.flipX = true;
         } else if (cursors.right.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
             player.setVelocityX(360);
        
             player.flipX = false;
            
         } else {
             player.setVelocityX(0);
         }
    
        if (cursors.up.isDown && player.body.touching.down ||  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown && player.body.touching.down) {
            //  player.destroy();
    player.setVelocityY(-300);
    
    
        }

        if (cursors.down.isDown || this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
player.setVelocityY(600);
        }
    if (this.lastShotTime == undefined) {
        this.lastShotTime = 0;
    } else {
        
    }
 
        
    
        // this.shootBullet
        
         this.input.on('pointerdown' , function (event) {
            if (event.button === 0) {
                // Left-click event
                var currentTime = this.time.now;
                if (currentTime - this.lastShotTime > shootDelay) {
                    this.shootBullet();
                    
                    //console.log("last shot time " + this.lastShotTime);
                    this.lastShotTime = currentTime;
                  //  console.log("current time " + currentTime );
                    
                }
            }
        }, this);

        if(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).isDown){
            var currentTime = this.time.now;
            if (currentTime - this.lastShotTime > shootDelay) {
                this.shootBullet();
                
                console.log("last shot time " + this.lastShotTime);
                this.lastShotTime = currentTime;
                console.log("current time " + currentTime );
                
            }
            
        }
    }
    // console.log(player.y);
    if (currentScene != "scene4") {
    if (player.y > 500) {
    this.physics.pause();
    console.log(health);
        gameOver = true;
        
        
        currentScene = this.scene.key;
        this.scene.start("deathScene")
        
    }
}

    }

scoreCounter(){
    score += -1;
 
if(score > 100){
   
        this.Scoretxt.setColor('#000000');    
}
    else  {
         i++;
        if(i % 2 == 0){
            
            this.Scoretxt.setColor('#ff0000');
        }else{
            this.Scoretxt.setColor('#000000');
        }
        
       } 
}













// --------------------mobilecontrols--------------------

mobile(){
const button = this.add.image(400, 300, 'button_controls');
    button.setInteractive();

    button.on('pointerdown', function () {
        console.log('Button clicked!');
        // Add your button functionality here
    });
}

}