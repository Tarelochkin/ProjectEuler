/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?*/

/*NOTE: running the script to test numbers in 6+ digits range is rather resource consuming.
Running it in console requires to disable infinite loop protection.*/

/*First we assign the range in which we're going to look for the 10 001 st prime.
It's a 'guesstimate', but obviously it should be a rather large number.
Personally I started with 1 mln and succesfully completed the task.
However lowering the exponent to 100 000 returned only 9592 prime numbers*/
var num = 1000000;
var dividers = [];
var primeNumbers = []
/*Next we begin to fill the dividers array with dividers with which we will test each number to be prime or not.
We can significantly narrow the amount of iterations needed considering the following:
1) The largest divider needn't be > sqrt(the larget number in the range)
2) We may also leave out multiples of 2 and 3 (but not 2 and 3 themselves).
*/
for (i = 2; i <= Math.sqrt(num); i++) {
  if ((i === 2 || i === 3) || (i % 2 !== 0 && i % 3 !== 0)) {
    dividers.push(i);
  }
}
/*Next we test the numbers in the range by dividing them by numbers from the dividers array.
*/
for (i = 2; i <= num; i++) {
  var j = 0;
  var brute = true;
  while (brute) {
    if (dividers[j] > Math.sqrt(i) || dividers[j] === i || j === dividers.length) {
      primeNumbers.push(i);
      brute = false;
      /*If we haven't found a divider up to sqrt of the number we're testing or the number itself or we've run out of the dividers,
       then the number we're testing is prime*/
    } else if (i % dividers[j] === 0) {
      brute = false;
      /*If the number has a divider then it is composite*/
    } else {
      j++;
    }
  }
  if (primeNumbers.length === 10001){
    i = num+1; /*Once we found the 10001st prime we quit the loop.*/
  }
}
if (primeNumbers.length >= 10001) {
  console.log(primeNumbers[primeNumbers.length-1]);
} else {
  console.log("Only " + primeNumbers.length + " prime numbers found");
}
