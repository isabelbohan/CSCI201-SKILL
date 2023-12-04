/*
 * This program sketch is copied from 
 * Xiannong Meng's version at 
 * https://editor.p5js.org/xmeng/sketches/2d1U_D7rw, copied from 
 * Evan Peck's example at
 * https://editor.p5js.org/evanpeck/sketches/O7MjzPFxb
 * 
 * Isabel Bohan
 * 2023-12-5
 *
 * Revisions
 * 1. 2022-06-28: added sound file loading and playing
 *    a. The Apollo launch audio file is downloaded from
 *    https://www.nasa.gov/62282main_countdown_launch.wav
 *    which is then converted into mp3 format to be used here.
 * 2. 2022-06-28: added a textbox; check if any ball is colliding with the textbox.
 *    If so, the ball reverses the move direction.
 * 3. 2023-11-27: randomize() changes a ball's color and size, as well as direction.
 * 4. 2023-11-27: Clicking randomizes one (randomly-chosen) ball, not all of them, using the mouseClicked() handler.
 */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Stem
  fill(34, 139, 34); // Green color
  rect(190, 200, 20, 100);

  // Flower head
  fill(255, 165, 0); // Orange color
  ellipse(200, 150, 50, 50);

  // Petals
  fill(255, 255, 0); // Yellow color

  // Top-left petal
  ellipse(180, 140, 30, 30);

  // Top-right petal
  ellipse(220, 140, 30, 30);

  // Bottom-left petal
  ellipse(180, 160, 30, 30);

  // Bottom-right petal
  ellipse(220, 160, 30, 30);

  // Flower center
  fill(255, 0, 0); // Red color
  ellipse(200, 150, 10, 10);
}
