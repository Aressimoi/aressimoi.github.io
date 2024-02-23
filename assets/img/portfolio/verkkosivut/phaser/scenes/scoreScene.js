class scoreScene extends Phaser.Scene{
    constructor(){
        super("scoreScene");
    }

    preload() {
    
    }
create(){
    
    console.log("death amount : " + deathAmount);
        console.log("universal score : " + universalScore);
        console.log(" not used health amount : " + healthamount);
        console.log("alive enemies: " + alive_enemies); 
        var realScore = universalScore + (healthamount * 10) + (alive_enemies * 33);
         if(deathAmount > 0){
            for (var i = 0; i < deathAmount; i++) {
            realScore *= 0.9;
         }
 }
 console.log(realScore);
 realScore = Math.round(realScore);
 
 this.add.text(450, 300, 'your score is '+ realScore, { fill: '#000000' }).setFontSize(36);
// .setInteractive()


const button = this.add.text(450, 420, 'Start the game  ', { fill: '#f542d4' })
  .setInteractive()
  .on('pointerdown', () => this.startGame());
// Function to handle button click
button.setFontSize(36);

}
startGame() {
    currentScene = "scene2";
    this.scene.start("scene2")
  console.log('Button clicked!');
  // Add your desired logic here
}
}
