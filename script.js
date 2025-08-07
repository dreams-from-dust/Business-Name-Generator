// A much wider range of adjectives, nouns, and suffixes
let adjectives = [
    "Crazy", "Amazing", "Fire", "Awesome", "Cool", "Epic", "Turbo", "Dynamic", 
    "Creative", "Visionary", "Infinite", "Blazing", "Quantum", "Nexus", "Swift", 
    "Prime", "Fusion", "Catalyst", "Hyper", "Innovate", "Synergy", "Apex", "Zenith",
    "Vivid", "Aura", "Echo", "Helix", "Luminous", "Radiant", "Pioneer", "Evolve", 
    "Byte", "Pixel", "Spark", "Orbit", "Terra"
];

let nouns = [
    "Engine", "Solutions", "Labs", "Tech", "Systems", "Connect", "Works", "Hub", 
    "Core", "Flow", "Logic", "Data", "Forge", "Quest", "Hive", "Sphere", 
    "Cloud", "Canvas", "Matrix", "Portal", "Nexus", "Vector", "Domain", "Tribe", 
    "Studio", "Innovations", "Ventures", "Catalyst"
];

let suffixes = [
    "Bros", "Limited", "Hub", "Partners", "Co.", "Studios", "Inc.", "Group", 
    "Enterprises", "Ventures", "Collective", "Syndicate", "Innovations", "Solutions", 
    "Systems", "Labs", "Dynamics", "Sphere", "Labs", "Foundry", "Nexus", "Corp."
];

// Reusable function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate and display the name
function generateName() {
    let ad = getRandomElement(adjectives);
    let nm = getRandomElement(nouns);
    let an = getRandomElement(suffixes);

    let generatedName = `${ad} ${nm} ${an}`;
    
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `<span>${generatedName}</span>`;
}

// Get the button element
const generateButton = document.getElementById('generateBtn');

// Add an event listener to the button
// The generateName function will now ONLY run when the button is clicked
generateButton.addEventListener('click', generateName);