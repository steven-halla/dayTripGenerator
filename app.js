function randomDestination(){
  let array = ["park", "eagle's stadium", "pike's place"];
  let item = array[Math.floor(Math.random()*array.length)];
  console.log(item);
  document.getElementById("destination").innerHTML = `your current destination is ${item}`;

}

randomDestination();

function randomRestaurant(){
  let array = ["wendys", "mc donalds", "taco bell"];
  let item = array[Math.floor(Math.random()*array.length)];
  console.log(item);
  document.getElementById("restaurant").innerHTML = `your current eatery is ${item}`;
}

randomRestaurant();

function randomTransportation() {
  let array = ["taxi", "rent a car", "uber"];
  let item = array[Math.floor(Math.random()*array.length)];
  console.log(item);
  document.getElementById("transportation").innerHTML = `your current mode of transport is ${item}`;

}

randomTransportation();

function randomEntertainment() {
  let array = ["comic con", "sakura con", "hatsune miku expo"];
  let item = array[Math.floor(Math.random()*array.length)];
  console.log(item);
  document.getElementById("convention").innerHTML = `your current eatery is ${item}`;

}

randomEntertainment();

