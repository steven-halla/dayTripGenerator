//
// const destinations = ["Pike's Place", "1st street", "Space needle"];
//
// const restaurants = {
//   "Pike's Place": ["Wendy's", "Denny's", "Burger King"],
//   "1st street": ["Taco Bell", "Fancy Fish", "Local Pho"],
//   "Space needle": ["Spicy Shrimp", "Pumpkin Pies 'R Us"]
// }
//
// const entertainments = {
//   "Pike's Place": ["Shopping", "Bobbing 4 Fish", "Swimming"],
//   "1st street": ["Comic Con", "Sakura Con", "Hatsune Miku Expo"],
//   "Space needle": ["Sky Diving", "Street Performers", "Fireworks"]
// }
//
// const transportations = [ "Subway", "Uber", "Taxi"];
//
//
// function isYes(input) {
//   return input === "yes";
// }
//
// function getRandom(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   const item = array[randomIndex];
//   console.log(item);
//   return item;
// }
//
// function selectDestination() {
//   let destination = getRandom(destinations);
//   while (!isYes(prompt("Are you happy with your destination choice, " + destination + "? Type yes or no."))) {
//     destination = getRandom(destinations);
//   }
//   return destination;
// }
//
// function selectRestaurant(destination) {
//   const restaurantsForDestination = restaurants[destination];
//   let restaurant = getRandom(restaurantsForDestination);
//   while (!isYes(prompt("Are you happy with your food choice type, " + restaurant + "? Type yes or no."))) {
//     restaurant = getRandom(restaurantsForDestination);
//   }
//   return restaurant;
// }
//
// function selectTransportation() {
//   let transportation = getRandom(transportations);
//   while (!isYes(prompt("Are you happy with your transportation choice, " + transportation + "? Type yes or no."))) {
//     transportation = getRandom(transportations);
//   }
//   return transportation;
// }
//
// function selectEntertainment(destination) {
//   const entertainmentForDestination = entertainments[destination];
//   let entertainment = getRandom(entertainmentForDestination);
//   while (!isYes(prompt("Are you happy with your transportation choice, " + entertainment + "? Type yes or no"))) {
//     entertainment = getRandom(entertainmentForDestination);
//   }
//   return entertainment;
// }
//
// function completeTrip() {
//   const destination = selectDestination();
//   const restaurant = selectRestaurant(destination);
//   const transportation = selectTransportation();
//   const entertainment = selectEntertainment(destination);
//   console.log("Trip is confirmed. Please have a nice vacation. No Refunds.");
//   console.log(destination);
//   console.log(restaurant);
//   console.log(transportation);
//   console.log(entertainment);
// }
//
// completeTrip();
//
//
