class PlayerScene extends universal_scene{
    constructor() {
        super("PlayerScene");
    }

    preload() {

    }

    create() {

        player = this.physics.add.sprite(50, 260, 'player');
        //  player.body.setCircle(100);
        player.setScale(0.1);
        
        player.setBounce(0);
        
        player.setSize(350, 530); 
          player.setOffset(177, 88); 
        player.setCollideWorldBounds(false);



    }

    update() {
        // Set up cursor keys
        let cursors = this.input.keyboard.createCursorKeys();
        
        // Update player movement
        if (cursors.left.isDown) {
            player.setVelocityX(-360);
            // console.log(player.x);
            player.flipX = true;
        } else if (cursors.right.isDown) {
            player.setVelocityX(360);
            player.flipX = false;
            
        } else {
            player.setVelocityX(0);
        }
    
        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-300);
        }

        this.lastShotTime = 0;
        const shootDelay = 800;

        // this.shootBullet
        this.input.on('pointerdown', function (event) {
            if (event.button === 0) {
                // Left-click event
                const currentTime = this.time.now;
                if (currentTime - this.lastShotTime > shootDelay) {
                    this.shootBullet();
                    this.lastShotTime = currentTime;
                }
            }
        }, this);

// console.log(player.y);
if (player.y > 500) {
    this.physics.pause();
    console.log(health);
        gameOver = true;
        this.scene.start("deathScene")
}

    }





}