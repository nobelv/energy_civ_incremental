// define the resources we can use here
// start every variable on 0

let wood = 0;
let stone = 0;
let food = 0;
let humans = 0;
let house = 0;

function updateResources(){
    document.getElementById('food').innerHTML = food;
    document.getElementById('humans').innerHTML = humans;
    document.getElementById('wood').innerHTML = wood;
    document.getElementById('stone').innerHTML = stone;
}