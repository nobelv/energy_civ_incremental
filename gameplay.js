// GAMEPLAY

// resource gathering
function gatherFood(number){
    food = food + number;
    document.getElementById('food').innerHTML = food;
};

function gatherWood(number){
    wood = wood + number;
    document.getElementById('wood').innerHTML = wood;
};

function gatherStone(number){
    stone = stone + number;
    document.getElementById('stone').innerHTML = stone;
};


// resource spending
function addHuman(){
    let foodCost = 5;

    if(food >= foodCost){
        // reset message
        document.getElementById('noFood').innerHTML='';
        humans = humans + 1;
        food = food - foodCost;

        // update values
        document.getElementById('humans').innerHTML = humans;
        document.getElementById('food').innerHTML = food;

    }
    else{ // display error message
        document.getElementById('noFood').innerHTML='Not enough food!';
    }

    if(humans % 5){
        nextCost = Math.floor(5 * Math.pow(1.05, humans));
        document.getElementById('foodCost').innerHTML = nextCost;
    }
};

//game ticks
window.setInterval(function(){
    gatherFood(humans);
    gatherWood(humans);
    gatherStone(humans);
    }, 1000);
