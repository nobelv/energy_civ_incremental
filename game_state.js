// save and load functions
function saveGame() {
    let saveVar = {
        wood: resources.wood,
        stone: resources.stone,
        food: resources.food,
        humans: resourceGens.humans,
        foodCost: buildHuman.nextPrice,
        houses: resourceSpenders.houses,
        populationCap: caps.populationCap,
        foodCap: caps.foodCap,
        stoneCap: caps.stoneCap,
        woodCap: caps.woodCap,
        foodStorage: resourceSpenders.foodStorage,
        woodStorage: resourceSpenders.woodStorage,
        stoneStorage: resourceSpenders.stoneStorage
    };
    localStorage.setItem("gameSaver",JSON.stringify(saveVar)); 
};

function loadGame() {
    let savegame = JSON.parse(localStorage.getItem("gameSaver")); 
    
    if(savegame != null){

        if (typeof savegame.wood !== "undefined") resources.wood = savegame.wood; 
        if (typeof savegame.stone !== "undefined") resources.stone = savegame.stone;
        if (typeof savegame.food !== "undefined") resources.food = savegame.food;
        if (typeof savegame.humans !== "undefined") resourceGens.humans = savegame.humans;
        if (typeof savegame.foodCost !== "undefined") buildHuman.nextPrice = savegame.foodCost;
        if (typeof savegame.houses !== "undefined") resourceSpenders.houses = savegame.houses;
        if (typeof savegame.populationCap !== "undefined") caps.populationCap = savegame.populationCap;
        if (typeof savegame.foodCap !== "undefined") caps.foodCap = savegame.foodCap;
        if (typeof savegame.woodCap !== "undefined") caps.woodCap = savegame.woodCap;
        if (typeof savegame.stoneCap !== "undefined") caps.stoneCap = savegame.stoneCap;
        if (typeof savegame.foodStorage !== "undefined") resourceSpenders.foodStorage = savegame.foodStorage;
        if (typeof savegame.woodStorage !== "undefined") resourceSpenders.woodStorage = savegame.woodStorage;
        if (typeof savegame.stoneStorage !== "undefined") resourceSpenders.stoneStorage = savegame.stoneStorage;

    
        document.getElementById('wood').innerHTML = savegame.wood;
        document.getElementById('stone').innerHTML = savegame.stone;
        document.getElementById('food').innerHTML = savegame.food;
        document.getElementById('humans').innerHTML = savegame.humans;  
        document.getElementById('foodCost').innerHTML = savegame.foodCost;  
        document.getElementById('houses').innerHTML = savegame.houses;  
        document.getElementById('populationCap').innerHTML = savegame.populationCap;
        document.getElementById('foodCap').innerHTML = savegame.foodCap;
        document.getElementById('woodCap').innerHTML = savegame.woodCap;
        document.getElementById('stoneCap').innerHTML = savegame.stoneCap;
        document.getElementById('foodStorage').innerHTML = savegame.foodStorage;
        document.getElementById('woodStorage').innerHTML = savegame.woodStorage;
        document.getElementById('stoneStorage').innerHTML = savegame.stoneStorage;
    }    
};

function deleteSave() {
    let confirmPlayerAction = confirm('Are you sure you want to delete your savegame?');
    if(confirmPlayerAction){
        localStorage.removeItem('gameSaver');
        autoSave = false;
        
        // reset resource counters
        document.getElementById('wood').innerHTML = 0;
        document.getElementById('stone').innerHTML = 0;
        document.getElementById('food').innerHTML = 0;
        document.getElementById('humans').innerHTML = 0;
        document.getElementById('houses').innerHTML = 0;
        document.getElementById('populationCap').innerHTML = 0;
        document.getElementById('foodCap').innerHTML = 0;
        document.getElementById('woodCap').innerHTML = 0;
        document.getElementById('stoneCap').innerHTML = 0;

    }
};

$(document).ready(function() {
    loadGame();
    });