// Bike racks in Chicago
// Source: https://catalog.data.gov/dataset/bike-racks
// Loading JSON files in p5: https://p5js.org/reference/#/p5/loadJSON

let bikeRaw;
let bikeRacks;

// This empty object will be used to keep a tally for each neighborhood.
const dataHolder = {};

function preload() {
  // Loads the raw JSON file into a variable.
  bikeRaw = loadJSON("chicago-bike-racks.json");
}

function setup() {
  // Resize your canvas if needed for your drawing.
  createCanvas(400, 400).parent("#p5-canvas");

  // The original source put all of the useful info into a key entry called "data",
  // so we're going to strip that out into its own variable first for convenience.
  bikeRacks = bikeRaw.data;

  // bikeRacks is now a REALLY long array. Let's just look at one misc entry to see what data is provided.
  console.log(bikeRacks[51]);

  // We have to know a little bit about the data to use it in a meaningful way.
  // For example, by looking at this one entry, I can see that entry 12 is the neighborhood name - "Lincoln Park".
  // Perhaps I can run a tally to see how many entries appear for each neighborhood,
  // thus finding the most "bike friendly" one?

  // The setup here will be similar to the CSV example.
  // We'll use a for loop to cycle through all the entries in the bikeRacks array.
  for(let b of bikeRacks) {

    // Since each entry in the array is actually an object, we need to grab the value from the relevant key.
    // In this case, key 12 is the neighborhood name.
    let neighborhood = b[12];

    // If a neighborhood has not yet been counted, then create a new entry in the dataHolder object and initalize the value to 1...
    if(!(neighborhood in dataHolder)) {
      dataHolder[neighborhood] = 1;
    }
    // Otherwise if it IS already in dataHolder, just increment the value by 1.
    else dataHolder[neighborhood] += 1;
  }

  // Let's look at our results in the console first!
  console.log(dataHolder);

  // Now we know how many different entries there are (77) and the maximum value (503).
  // What can we do with this?
}

function draw() {
  background(150);
  // Do some drawing using dataHolder as your source.
}