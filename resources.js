// define the resources we can use here
// start every variable on 0

var resources = {
    food: 0,
    wood: 0,
    stone: 0
};

var resourceGens = {
    humans: 0
};

var resourceSpenders = {
    houses: 0,
    foodStorage: 0,
    woodStorage: 0,
    stoneStorage: 0
};

var caps = {
    foodCap: 50,
    woodCap: 50,
    stoneCap: 50,
    populationCap: 5
};

var capMapping = {
    food: 'foodCap',
    wood: 'woodCap',
    stone: 'stoneCap',
    humans: 'populationCap'
}

function updateInnerHTML(){
    // resources
    document.getElementById('food').textContent = resources.food;
    document.getElementById('wood').innerHTML = resources.wood;
    document.getElementById('stone').innerHTML = resources.stone;
    
    // people
    document.getElementById('humans').innerHTML = resourceGens.humans;
    
    // buildings
    document.getElementById('houses').innerHTML = resourceSpenders.houses;
    document.getElementById('foodStorage').innerHTML = resourceSpenders.foodStorage;
    document.getElementById('woodStorage').innerHTML = resourceSpenders.woodStorage;
    document.getElementById('stoneStorage').innerHTML = resourceSpenders.stoneStorage;

    // caps
    document.getElementById('foodCap').innerHTML = caps.foodCap;
    document.getElementById('woodCap').innerHTML = caps.woodCap;
    document.getElementById('stoneCap').innerHTML = caps.stoneCap;
    document.getElementById('populationCap').innerHTML = caps.populationCap;
};

function calculateCaps(){
    caps.foodCap = 50 + (50 * resourceSpenders['foodStorage']);
    caps.woodCap = 50 + (50 * resourceSpenders['woodStorage']);
    caps.stoneCap = 50 + (50 * resourceSpenders['stoneStorage']);
    caps.populationCap = 5 + (5 * resourceSpenders['houses']);
};