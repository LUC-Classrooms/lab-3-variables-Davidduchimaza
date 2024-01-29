/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var Davidluc = 320;

function setup() {
  createCanvas(400, 300); // creates a drawing canvas
}

function draw() {
  // Background is drawn first
  background(200); // light gray

  // Call a simple P5 drawing function, such as ellipse(), using your new variable(s) in place of arguments
  ellipse(Davidluc, 240, 50, 50);

}
