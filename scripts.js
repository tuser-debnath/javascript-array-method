// (1) Array filter()

//Example One
const ageOne = [25, 45, 12, 41, 18, 5, 55, 30];
function isVoter(vAge) {
  return vAge >= 18;
  //   return vAge == 45;
}
const voterList = ageOne.filter(isVoter);
console.log(voterList);

// Example Two
const productPrice = [144, 200, 88, 500, 400, 1000, 15, 130, 1300];
function lowerPrice(lPrice) {
  return lPrice < 700;
}
const lpProducts = productPrice.filter(lowerPrice);
console.log(lpProducts);

// (2) Array find()

const ageTwo = [25, 12, 50, 42, 18, 5, 55, 30, 45, 47, 50];
function findPerson(fPerson) {
  return fPerson > 40;
}
const findOne = ageTwo.find(findPerson);
console.log(findOne);

// (3) Array map

const numOne = [25, 12, 50, 42, 18, 5, 55, 30, 45];
function numberSum(n) {
  //   return n * 2;
  return n + 2;
}
const totalSum = numOne.map(numberSum);
console.log(totalSum);

// (4) Array reduce()

const numTwo = [25, 12, 50, 42, 18, 5, 55, 30, 45];
function getTotal(first, next) {
  //   return first + next;
  //   return first - next;
  return first * next;
}
const total = numTwo.reduce(getTotal);
console.log(total);

// (5) Array sort()

const fruit = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
fruit.sort();
console.log(fruit);
