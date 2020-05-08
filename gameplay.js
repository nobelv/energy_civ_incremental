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
    let foodCost = Math.floor(5 * Math.pow(1.1, humans));

    if(food >= foodCost && populationCap > humans){
        // reset message
        document.getElementById('noFood').innerHTML='';
        document.getElementById('maxPopCap').innerHTML='';

        humans = humans + 1;
        food = food - foodCost;

    }
    else{ // display error message
        if(foodCost > food){
            document.getElementById('noFood').innerHTML='Not enough food!';
        }
        if(populationCap == humans){
            document.getElementById('maxPopCap').innerHTML='Not enough houses!';
        }
    }

    nextCost = Math.floor(5 * Math.pow(1.1, humans));
    document.getElementById('foodCost').innerHTML = nextCost;
    updateResources()
};

function buildHouse(numBeds){
    let houseCost = 25;

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
    let storageCost = 30;

    if ((stone) && (wood) >= storageCost){
 
        wood = wood - storageCost;
        stone = stone - storageCost;
        
        if(type == "food"){
            foodCap = foodCap + storageAmt;
            foodStorage = foodStorage + 1;
        }
        if(type == "wood"){
            woodCap = woodCap + storageAmt;
            woodStorage = woodStorage + 1;
        }
        if(type == "stone"){
            stoneCap = stoneCap + storageAmt;
            stoneStorage = stoneStorage + 1;
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
