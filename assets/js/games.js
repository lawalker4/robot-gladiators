var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = 'Roborto', 'Amy Android', 'Robo Trumble';
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log9enemyNames[3]);


// check to see if the value of the playerHealth variable is greater than 0
// if (playerHealth > 0) {
//   console.log("Your player is still alive!");
// }
// var playerHealth = 10;

// if (playerHealth === 0) {
//   console.log("This will not run.");
// } 
// else {
//   console.log("This will run instead.");
// }

// var fight = function() {
//   window.alert("Welcome to Robot Gladiators!");
// };

var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.

  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  playerHealth = playerHealth - enemyAttack;

  // put new code under this
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // if player choses to fight, then fight

  if (promptFight === "fight" || promptFight === "FIGHT")
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");

    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }

    //pick new enemy to fight based on the inde of the enemyNames array//
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }

  //   } else if (promptFight === "skip" || promptFight === "SKIP") {
  //   window.alert(playerName + " has chosen to skip the fight!");
  // } else {
  //   window.alert("You need to choose a valid option. Try again!");
  // }  

  //  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  fight();

  var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

  console.log(enemyNames.length);
  for (var i = 0; i < 3; i++) {
    console.log("apple");
  }
  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
}

