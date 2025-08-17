

// Example 1: String Literal Type
let direction: "north" | "south" | "east" | "west";

direction = "north";   //  allowed
direction = "east";    //  allowed
// direction = "up";   //  Error: not part of the union


// Example 2: Number Literal Type
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 3;   // allowed
diceRoll = 6;   // allowed
// diceRoll = 7; // Error


// Example 3: Boolean Literal Type
let isEnabled: true; 

isEnabled = true;  // 
// isEnabled = false; //  Error (only `true` is allowed)


// Example 4: Function Parameters with Literal Types
function move(direction: "left" | "right" | "up" | "down") {
  console.log("Moving", direction);
}

move("left");   // allowed
move("up");     // allowed
// move("back"); //  Error


// Example 5: Literal + Union + Type Alias
type TrafficLight = "red" | "yellow" | "green";

function signal(light: TrafficLight) {
  if (light === "red") console.log("Stop");
  if (light === "yellow") console.log("Slow down");
  if (light === "green") console.log("Go");
}

signal("red");    // Stop
signal("green");  // Go
