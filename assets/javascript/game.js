var randomChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
        var win = 0;
        var loss = 0;
       
    
        
        
        var selectedLetterText = document.getElementById("selectedLetter-text");
        var randomChoiceText = document.getElementById("randomChoice-text");
        var winText = document.getElementById("win-text");
        var lossText = document.getElementById("loss-text");
        
    
        
        document.onkeyup = function(event) {
    
          
          var guessedLetter = event.key;
    
          var computerChoice = randomChoices[Math.floor(Math.random() * randomChoices.length)];
    

    
            if ((guessedLetter === computerChoice )) {
              win++;
            } else {
              loss++;
            }
    
            
    
            // Display the user and computer guesses, and win/loss/ties.
            selectedLetterText.textContent = "You chose: " + guessedLetter;
            randomChoiceText.textContent = "The computer chose: " + computerChoice;
            winText.textContent = "WIN: " + win;
            lossText.textContent = "LOSS: " + loss;
           
          
        };