class Form{
    constructor(){
       this.input = createInput("");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(690, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(890,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'white');
        this.reset.position(displayWidth-100,120);
        this.button.position(900,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Name : "+ player.name+" | Waiting for Player 2...")
            this.greeting.position(570,450);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '60px');
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.update(0);
          });
        

    }
}