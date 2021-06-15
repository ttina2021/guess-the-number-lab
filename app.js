const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  play: function() {
    
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
    // Player is prompted to enter number

    do{
      this.prevGuesses.push(this.getGuess());
      this.render();
    }
  
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum) {
    }

    getGuess() {

    do {
      let guess = parseInt (window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`, ""));
      while (isNaN(guess) || guess < this.smallestNum || guess < this.biggestNum){
        guess = parseInt(window.prompt('Enter a guess between ${this.smallestNum} and ${this.biggestNum'));
      }
      return guess;
    };
    }

  render () {
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
      window.alert (`Yay! You guessed the number in ${this.prev.Guesses.length}!`);
    } else if ( this.prevGuesses[this.prevGuesses.length -1] > this.biggestNum) {
      window.alert (`Too high! Previous Guesses: ${this.prevGuesses.join('')`});
    } else {
      window.alert (`Too low! Previous Guesses: ${this.prevGuesses.join('')`});
    }
  };

  game.play();

