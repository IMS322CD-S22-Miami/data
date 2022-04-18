// Cincinatti Police Data Initative (PDI) CPD Shootings
// Source: https://data.cincinnati-oh.gov/safety/PDI-Police-Data-Initiative-CPD-Shootings/7a3r-kxji/data
// Loading CSV in p5: https://p5js.org/reference/#/p5/loadTable

let table;
let neighborhoods;

// This empty object will be used to keep a tally for each neighborhood.
const dataHolder = {};

function preload() {
  // This loadTable function specifies the file name, file type (CSV), and indicates that the first row is a header row.
  table = loadTable("PDI-shootings.csv", "csv", "header");
}

function setup() {
  // Resize your canvas if needed for your drawing.
  createCanvas(400, 400).parent("#p5-canvas");

  // This code is not necessary but shows the total row and column count in the console.
  console.log("Rows: " + table.getRowCount());
  console.log("Columns: " + table.getColumnCount());

  // This function returns an array to the neighborhoods variable that includes the entire neighborhoods column.
  // We can use this to create a visualization of police shootings relative to each neighborhood.
  neighborhoods = table.getColumn("CPD_NEIGHBORHOOD");

  // Now, how to use this data in a meaningful way? Let's start by tallying each neighborhood.
  // We don't know how many different neighborhoods there are yet, so we'll use a for loop to cycle
  // through all the entries in the neighborhoods array.
  for(let n of neighborhoods) {

    // If a neighborhood has not yet been counted, then create a new entry in the dataHolder object and initalize the value to 1...
    if(!(n in dataHolder)) {
      dataHolder[n] = 1;
    }

    // Otherwise if it IS already in dataHolder, just increment the value by 1.
    else dataHolder[n] += 1;
  }

  // Let's look at our results in the console first!
  console.log(dataHolder);

  // Now we know how many different entries there are (54, not counting the first empty field) and the maximum value (640).
  // What can we do with this?
}

function draw() {
  background(150);
  // Do some drawing using dataHolder as your source.
}