class scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload() {
    
    }
create(currentScene){


    this.add.text(20,20,"TEXSTI...")
    
// Assuming you have a scene called 'myScene'

// Create a button

const button = this.add.text(450, 300, 'Start the game  ', { fill: '#f542d4' })
  .setInteractive()
  .on('pointerdown', () => this.startGame());
// Function to handle button click
button.setFontSize(36);

}
startGame() {
    this.scene.start("scene2")
  console.log('Button clicked!');
  // Add your desired logic here
}


}