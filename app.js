
const destinations = ["Pike's Place", "1st street", "Space needle"];

const restaurants = {
  "Pike's Place": ["Wendy's", "Denny's", "Burger King"],
  "1st street": ["Taco Bell", "Fancy Fish", "Local Pho"],
  "Space needle": ["Spicy Shrimp", "Pumpkin Pies 'R Us"]
}

function isYes(input) {
  return input === "yes";
}

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  console.log(item);
  return item;
}

function selectDestination() {
  let destination = getRandom(destinations);
  while (!isYes(prompt("are you happy with your destination type yes or no"))) {
    destination = getRandom(destinations);
  }
  return destination;
}

function selectRestaurant(destination) {
  const restaurantsForDestination = restaurants[destination];
  let restaurant = getRandom(restaurantsForDestination);
  while (!isYes(prompt("are you happy with your food choice type yes or no"))) {
    restaurant = getRandom(restaurantsForDestination);
  }
  return restaurant;
}

function completeTrip() {
  const destination = selectDestination();
  const restaurant = selectRestaurant(destination);
  console.log("Trip is confirmed. Please have a nice vacation. No Refunds.");
  console.log(destination);
  console.log(restaurant);
}

completeTrip();


// function randomTransportation() {
//   let array = ["taxi", "rent a car", "uber"];
//   let transportMode = array[Math.floor(Math.random()*array.length)];
//   console.log(transportMode);
//
// }
//
//
// function randomEntertainment() {
//   let array = ["comic con", "sakura con", "hatsune miku expo"];
//   let con = array[Math.floor(Math.random()*array.length)];
//   console.log(con);
//   return con;
//
// }


// function randomRestaurant(incomingItems){
//
//   let index = [Math.floor(Math.random()*incomingItems.length)];
//   // console.log(eatery);
//   return eatery = incomingItems[index];
// }
// let restaurantArray = ["Wendy's", "Dennys", "BurgerKing"];
// let restResult = randomRestaurant(restaurantArray);
// console.log(restResult);


// function selectRestaurant(destination) {
//   let restaurantsArray = ["Wendy's", "Dennys", "BurgerKing"];
//   let restResult = randomArray(restaurantsArray);
//   let resHappy = false;
//   while (!resHappy) {
//     if (isYes(prompt("are you happy with your food choice type yes or no"))) {
//       resHappy = true;
//     } else {
//       restResult = randomArray(restaurantsArray);
//     }
//   }
//   return restResult;
// }
