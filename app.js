const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: []
    
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }

    do{
      this.getGuess();
      this.prevGuesses.push(this.guess)
      this.render()
    }
    // what I'm having the game do -> 1. getGuess, added in prevGuesses, 2. render, 

    } while (
      this.guess != this.secretNum
    )
    return 
    // player needs to guess the secretNum

    // REMINDER: do...while - creates a loop that executes a specified 
    // statement until the test condition evaluates to false. 
    // 'this' refers to the object its living in
    // (!=) is inequality  => checks whether 2 operands are not equal

  getGuess: function() {

    do {
      this.guess = parseInt (window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`, ""));

      // Player is prompted to enter a guess (getGuess)

      // parseInt - parses a string argument and returns an integer of the specified number (returns NaN)

    } while (
      this.guess  //NaN
      this.guess > this.biggestNum ||
      this.guess < this.smallestNum
    )
  }

// this.guess isNaN

  render: function(guess) {
    if (this.guess === this.secretNum) {
      window.alert (`Yay! You guessed the number in ${this.prev.Guesses.length} !`);
    } else if ( this.guess > this.biggestNum) {
      window.alert (`Too high! try again: ${this.prevGuesses.join('')`});
    } else {
      window.alert (`Too low! try again: ${this.prevGuesses.join('')`});
    }
  };

game.play();



// what did i do???!! => practice game again