var arr = ["rock", "paper", "scissors"];
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = arr[Math.floor(Math.random() * arr.length)];
  

var game = function(firstChoice,secondChoice) {
    
    if (firstChoice === secondChoice) {
        
        return "It's a tie";
    }
    
    else if (firstChoice === "rock") {
        
        if (secondChoice === "scissors") {
            return "User wins!";
        }
        else {
            return "Computer wins!";
        }
    }
    
    else if (firstChoice === "paper") {
        
        if (secondChoice === "rock") {
            return "User wins!";
        }
        else {
            return "Computer wins!";
        }
            
    }
    
    else if (firstChoice === "scissors") {
        
        if (secondChoice === "rock") {
            return "Computer wins!";
        }
        else {
            return "User wins!";
        }
    }
    
    
    } 

    
   document.write("Computer chose: " + computerChoice + "<br>");
   
   document.write(game(userChoice,computerChoice));
    
    