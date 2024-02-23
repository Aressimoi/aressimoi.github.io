class deathScene  extends Phaser.Scene{
    constructor(){
        super("deathScene");
    }

    create(){
        movingloopL = false;
        movingloopR = false;
        movingloopU = false;
        this.add.text(60,60," you died...", )
        const Button_text = this.add.text(300, 250, "Restart", { fontSize: 64 });
       Button_text.setInteractive();

       Button_text.on('pointerdown', () => { 
        Button_text.on('pointerup', () => {
        this.scene.start("bootGame");
        });
    });


       
    }

}