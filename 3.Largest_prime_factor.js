/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*/

var num = 600851475143;
var factors = [];
var primeFactors = [];
/*In order to make factorization less resource consuming (making it only 775k iterations instead of 600bln) let's break it down in 2 parts.
First we only check the numbers below sqrt of the number being factorized.*/
for (i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    factors.push(i);
  }
}
/*console.log(factors); in case you'd like to check the factors found during stage 1*/
/*Stage 2: first we fix the length of the factors array.
Then look for additional factors by recursively dividing the factorized number by the factors achieved on stage 1*/
var preLength = factors.length;
for (i = preLength - 1; i >= 0; i--) {
    factors.push(num / factors[i]);
}
/*console.log(factors); if you'd like to check all possible factors for 600851475143*/
/*Prime testing the factors. We do this by dividing every factor by the numbers preceding it in the sequence.
We only need to test dividers that are not large than sqrt(factor).*/
for (i = 0; i < factors.length; i++) {
  var j = 0;
  var check = true;
  while (check) {
    if (factors[j] > Math.sqrt(factors[i]) || j === i) {
      primeFactors.push(factors[i]);
      check = false;
      /*If we haven't found a divider up to sqrt of the number we're testing, then the number is prime*/
    } else if (factors[i] % factors[j] === 0) {
      check = false;
      /*If the number has a divider then it is composite*/
    } else {
      j++;
    }
  }
}
/*console.log(primeFactors); to print out all the prime factors*/
console.log(primeFactors[primeFactors.length-1]);
