// define the resources we can use here
// start every variable on 0

let food = 0;
let wood = 0;
let stone = 0;
let humans = 0;

let houses = 0;
let storage = 0;

let populationCap = 5;
let foodCap = 50;
let woodCap = 50;
let stoneCap = 50;

function updateResources(){
    // resources
    document.getElementById('food').innerHTML = food;
    document.getElementById('wood').innerHTML = wood;
    document.getElementById('stone').innerHTML = stone;
    
    // people
    document.getElementById('humans').innerHTML = humans;
    
    // buildings
    document.getElementById('houses').innerHTML = houses;

    // caps
    document.getElementById('foodCap').innerHTML = foodCap;
    document.getElementById('woodCap').innerHTML = woodCap;
    document.getElementById('stoneCap').innerHTML = stoneCap;
    document.getElementById('populationCap').innerHTML = populationCap;
};