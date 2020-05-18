// GAMEPLAY

// resource gathering
function gatherFood(number){
    if(caps.foodCap > resources.food){
        resources.food = resources.food + number;
    }
    if(resources.food > caps.foodCap){
        resources.food = caps.foodCap;
    }
    updateInnerHTML();
};


function gatherWood(number){
    if(caps.woodCap > resources.wood){
        resources.wood = resources.wood + number;
    }
    if(resources.wood > caps.woodCap){
        resources.wood = caps.woodCap;
    }
    updateInnerHTML(); 
};

function gatherStone(number){
    if(caps.stoneCap > resources.stone){
        resources.stone = resources.stone + number;
    }
    if(resources.stone > caps.stoneCap){
        resources.stone = caps.stoneCap;
    }
    updateInnerHTML();
};

// resource generator
class ResourceGenerator{
    constructor(name, basePrice, resourceType, numPurchase){
        this.name = name;
        this.basePrice = basePrice;
        this.resourceType = resourceType;
        this.numPurchase = numPurchase;
        this.nextPrice = basePrice;
    }

    pickResource(){
        var capMapResult = capMapping[this.name];

        var resourceInfo = {
            numResource: resources[this.resourceType],
            capResource: caps[capMapResult]
        };
        return resourceInfo;
    }

    spendResource(){
        resources[this.resourceType] -= this.nextPrice;
    }

    nextPriceCalc(){
        this.nextPrice = Math.floor(this.nextPrice * Math.pow(1.05, resourceGens[this.name]));
        document.getElementById('foodCost').innerHTML = this.nextPrice;
    }

    purchase(){
        var get_resource = this.pickResource();

        if(get_resource.numResource >= this.nextPrice && get_resource.capResource > resourceGens[this.name]){
            resourceGens[this.name] += this.numPurchase;
            this.spendResource();
            this.nextPriceCalc();
            updateInnerHTML();
        }
        else{
            console.log('not enough resources');
        }
    }
}


class ResourceSpender{
    constructor(name, priceFood, priceWood, priceStone, priceGrowth, numPurchase){
        this.name = name;
        this.priceFood = priceFood;
        this.priceWood =  priceWood;
        this.priceStone = priceStone;
        this.priceGrowth =  priceGrowth; // 0 = off, 1 = on
        this.numPurchase = numPurchase;
    }
    
    spendResource(){
        resources['food'] -= this.priceFood;
        resources['wood'] -= this.priceWood;
        resources['stone'] -= this.priceStone;
    }
    
    purchase(){
        var canPurchase = 1;
        
        if (this.priceFood > resources['food']){
            canPurchase = 0;
        }
        if (this.priceWood > resources['wood']){
            canPurchase = 0;
        }
        if (this.priceStone > resources['stone']){
            canPurchase = 0;
        }
        if (canPurchase == 1){
            this.spendResource();
            resourceSpenders[this.name] += this.numPurchase;
            updateInnerHTML();
        }
        else{
            console.log('not enough resources');
        }
        calculateCaps();
    }
}

buildHuman = new ResourceGenerator('humans', '5', 'food', 1);
buildHouse = new ResourceSpender('houses', 0, 25, 25, 0, 1);
buildFoodStorage = new ResourceSpender('foodStorage', 0, 30, 30, 0, 1);
buildWoodStorage = new ResourceSpender('woodStorage', 0, 30, 30, 0, 1);
buildStoneStorage = new ResourceSpender('stoneStorage', 0, 30, 30, 0, 1);


//game ticks
window.setInterval(function(){
    gatherFood(resourceGens.humans);
    gatherWood(resourceGens.humans);
    gatherStone(resourceGens.humans);
    calculateCaps();
    updateInnerHTML();
    }, 1000);
