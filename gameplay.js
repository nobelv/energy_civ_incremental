// GAMEPLAY

// resource gathering
function gatherFood(number){
    if(foodCap > food){
        food = food + number;
    }
    if(food > foodCap){
        food = foodCap;
    }
    updateResources()
};

function gatherWood(number){
    if(woodCap > wood){
        wood = wood + number;
    }
    if(wood > woodCap){
        wood = woodCap;
    }
    updateResources()      
};

function gatherStone(number){
    if(stoneCap > stone){
        stone = stone + number;
    }
    if(stone > stoneCap){
        stone = stoneCap;
    }
    updateResources()
};


// resource spending
function addHuman(){
    let foodCost = 5;

    if(food >= foodCost && populationCap > humans){
        // reset message
        document.getElementById('noFood').innerHTML='';
        document.getElementById('maxPopCap').innerHTML='';

        humans = humans + 1;
        food = food - foodCost;
    }
    else{ // display error message
        if(food >= foodCost){
            document.getElementById('noFood').innerHTML='Not enough food!';
        }
        if(populationCap > humans){
            document.getElementById('maxPopCap').innerHTML='Not enough houses!';
        }
    }

    if(humans % 2){
        nextCost = Math.floor(5 * Math.pow(1.1, humans));
        document.getElementById('foodCost').innerHTML = nextCost;
    }
    updateResources()
};

function buildHouse(numBeds){
    let houseCost = 10;

    if ((stone) && (wood) >= houseCost){

        houses = houses + 1;
        populationCap = populationCap + numBeds;

        wood = wood - houseCost;
        stone = stone - houseCost;

        // update values
        updateResources()

    }
};

function buildStorage(storageAmt, type){
    let storageCost = 20;

    if ((stone) && (wood) >= storageCost){
        storage = storage + 1;

        wood = wood - storageCost;
        stone = stone - storageCost;

        if(type == "wood"){
            woodCap = woodCap + storageAmt;
        }
        if(type == "stone"){
            stoneCap = stoneCap + storageAmt;
        }
    }
    updateResources()
};

//game ticks
window.setInterval(function(){
    gatherFood(humans);
    gatherWood(humans);
    gatherStone(humans);
    }, 3000);
