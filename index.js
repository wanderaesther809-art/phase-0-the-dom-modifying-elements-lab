// Write your code here!
// remove the <main> with id 'main'
document.querySelector("main#main").remove();

// create a new h1 element
const newHeader = document.createElement("h1");

// set its id to 'victory'
newHeader.id = "victory";

// set its text content to include your name
newHeader.textContent = "Esther is the champion"; // replace Esther with your name
