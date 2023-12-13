//Recursion coin counter

function coinCounter(amount) {
  const quarters = .25;
  const dimes = .10;
  const nickels = .05;
  const pennies = .01;

  if (amount === 0) {
    return {};
  }


let change = {};

if (amount >= quarters) {
  change.quarters = Math.floor(amount / quarters);
  amount %= quarters;
}

if (amount >= dimes) {
  change.dimes = Math.floor(amount / dimes);
  amount %= dimes;
}

if (amount >= nickels) {
  change.nickels = Math.floor(amount / nickels);
  amount %= nickels;
}

if (amount >= pennies) {
  change.pennies = Math.round(amount / pennies);
  amount %= pennies;
}

return change;
}

console.log(coinCounter(6.09));

//Closure individual coin counter


function coinCounterClosure() {
  const quarters = .25;
  const dimes = .10;
  const nickels = .05;
  const pennies = .01;

function calculateCoins(amount, coinValue) {
  const count = Math.floor(amount / coinValue);
  return { [coinValue]: count};
}

return {
  quarters: (amount) => calculateCoins(amount, quarters),
  dimes: (amount) => calculateCoins(amount, dimes),
  nickels: (amount) => calculateCoins(amount, nickels),
  pennies: (amount) => calculateCoins(amount, pennies),
};

}

const coinCounter = coinCounterClosure();

console.log(coinCounter.quarters(4.99));
console.log(coinCounter.dimes(4.99));
console.log(coinCounter.nickels(4.99));
console.log(coinCounter.pennies(4.99));

console.log(coinCounter.quarters(4.99), coinCounter.dimes(4.99), coinCounter.nickels(4.99), coinCounter.pennies(4.99));