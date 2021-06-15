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

    // remember to add parseInt => ${this.secretNum} and ${this.prevGuesses} 

    } while (
      this.guess != this.secretNum
    )
    return 

    // console.log(1 != 1); inequality checks whether two operands are NOT equal

  getGuess: function() {
    do {
      this.guess = parseInt (window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`, ""));

    } while (
      this.guess
      this.guess > this.biggestNum ||
      this.guess < this.smallestNum
    )
  }

  render: function() {
  if (this.guess === this.secretNum) {
    window.alert ('Yay! You guessed the number in ${this.prev.Guesses.length} !');
  } else if ( this.guess > this.biggestNum) {
    window.alert ('Too high! ');
  } else {
    window.alert ('Too low ');
  }
},
}



// \nPrevious guesses: ${this.prevGuesses.join(", ")}`);

    // ## Tasks

    // Completing the following tasks will result in a working *Guess the Number* game:
    
    // 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
    // 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*. Hint - use a template literal for the prompt message.
    // 3. Ensure that the `getGuess` method returns a value that:
    //     - Is a *number*, not a *string*.
    //     - Is between `smallestNum` and `biggestNum`, inclusive.
    //     - Hints:
    //         - This is a great use case for a `while` loop.
    //         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
    // 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
    //     - Hint: this is a great use for a while loop (or even a do...while loop!)
    // 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
    //     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
    //     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
    //     - Hints:
    //         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may have not built your program to use any, that's ok if that's the case!)
    //         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
    //         - The list of previous guesses can be generated using the array `join` method.
    // 6. The `play` method should end (`return`) when the guess matches `secretNum`.