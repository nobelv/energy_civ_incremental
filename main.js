// save and load functions
function saveGame(){
    let saveVar = {
        wood:wood,
        stone:stone,
        food:food,
        humans:humans,
        house:house
    };
    localStorage.setItem("gameSaver",JSON.stringify(saveVar)); 
};

function loadGame(){
    let savegame = JSON.parse(localStorage.getItem("gameSaver")); 
    
    if(savegame != null){
        if (typeof savegame.wood !== "undefined") wood = savegame.wood; 
        if (typeof savegame.stone !== "undefined") stone = savegame.stone;
        if (typeof savegame.food !== "undefined") food = savegame.food;
        if (typeof savegame.humans !== "undefined") humans = savegame.humans;
    
        document.getElementById('wood').innerHTML = savegame.wood;
        document.getElementById('stone').innerHTML = savegame.stone;
        document.getElementById('food').innerHTML = savegame.food;
        document.getElementById('humans').innerHTML = savegame.humans;  
    }    
};

function deleteSave(){
    let confirmPlayerAction = confirm('Are you sure you want to delete your savegame?');
    if(confirmPlayerAction){
        localStorage.removeItem('gameSaver');
        autoSave = false;
        
        // reset resource counters
        document.getElementById('wood').innerHTML = 0;
        document.getElementById('stone').innerHTML = 0;
        document.getElementById('food').innerHTML = 0;
        document.getElementById('humans').innerHTML = 0;

        // reset costs


        // reset variables
        wood = 0;
        stone = 0;
        food = 0;
        humans = 0;
        nextCost = 5;
        
        // reset the game
        $("#welcomeMessage").show();
        $("#resourceTracker").hide();
        $("#resourceClicker").hide();
        $("#resourceSpender").hide();

    }
};

// start the game
function welcome(){   
    $("#welcomeMessage").hide();
    $("#resourceTracker").show();
    $("#resourceClicker").show();
    $("#resourceSpender").show();

    updateResources()
};

// restart the game
function gameRestart(){
    if(localStorage.getItem("gameSaver") === null){
        $("#resourceTracker").hide();
        $("#resourceClicker").hide();
        $("#resourceSpender").hide();
    }
    else {
        $("#welcomeMessage").hide();
    }
};

$(document).ready(function(){
    gameRestart();
    loadGame();
    });