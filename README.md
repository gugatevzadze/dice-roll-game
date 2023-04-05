# dice-roll-game

the dice roll game follows the following:
First the starting player is assgined the 'active' status (class with a simple background color). The active player rolls the dice and tries to get as much current score as possible to hold it and add it to their total score. If during the roll active player rolls '1' the player is switched and the 'active' status is assigned to the next player. The game progresses until one of the players accumulates total points of 100 or more, they are assigned the status of winner(class with font color change and backghround color change)
The game includes functionalities for three buttons:
1. New Game - this button restarts the page, assigns starting values to all the variables, basically refreshes the page
2. Dice Roll - this button calls the rollBtn function which generates random number from 1 to 6 and then displays the number in form of dice image
3. Hold - this button adds the current rolls score to the total points
