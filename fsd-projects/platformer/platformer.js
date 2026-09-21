$(function () {
// initialize canvas and context when able to
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
window.addEventListener("load", loadJson);




function setup() {
  if (firstTimeSetup) {
    halleImage = document.getElementById("player");
    projectileImage = document.getElementById("projectile");
    cannonImage = document.getElementById("cannon");
    $(document).on("keydown", handleKeyDown);
    $(document).on("keyup", handleKeyUp);
    firstTimeSetup = false;
    //start game
    setInterval(main, 1000 / frameRate);
  }




  // Create walls - do not delete or modify this code
  createPlatform(-50, -50, canvas.width + 100, 50); // top wall
  createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
  createPlatform(-50, -50, 50, canvas.height + 500); // left wall
  createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall




  //////////////////////////////////
  // ONLY CHANGE BELOW THIS POINT //
  //////////////////////////////////




  // TODO 1 - Enable the Grid
  toggleGrid();
 




  // TODO 2 - Create Platforms
createPlatform(200, 630, 150, 20, "red"); 
createPlatform(400, 500, 150, 20, "orange"); 
createPlatform(650, 420, 200, 20, "lime"); 
createPlatform(900, 320, 120, 20, "dodgerblue");
createPlatform(1150, 220, 100, 20, "magenta");



















  // TODO 3 - Create Collectables
    createCollectable("diamond", 300, 200, 0.5, 0.7);
createCollectable("database", 750, 150, 0, 0);      
createCollectable("grace", 1200, 300, 0.3, 0.5);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("database", 500, 100, 0, 0);
createCollectable("steve", 850, 250, 0.4, 0.6);
createCollectable("kennedi", 1100, 200, 0.4, 0.4);
createCollectable("max", 1400, 300, 0.5, 0.5);
createCollectable("grace", 1650, 150, 0, 0);













   // TODO 4 - Create Cannons
    createCannon("left", 300, 2000);
   createCannon("top", 350, 1000);
    createCannon("right", 200, 1500);








 
  //////////////////////////////////
  // ONLY CHANGE ABOVE THIS POINT //
  //////////////////////////////////
}




registerSetup(setup);
});










