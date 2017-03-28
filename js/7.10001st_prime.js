/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

NOTE: the execution time of this is apx. 230ms and involves apx. 1mln iterations.
Running it in console requires to disable infinite loop protection.*/

var i = 2;
var j = 0;
var pp = 0;
var dividers = [2];

while (pp < 10001) {
		if (dividers[j] > Math.sqrt(i)) {
		pp++;
		i++;
		if (i === 3 || (i % 2 !== 0 && i % 3 !== 0)) { /*leaving out dividers which are multiples of 2 and 3 reduces the execution time by half without affecting the results*/
			dividers.push(i);
		}
		j = 0;
	} else if (i % dividers[j] === 0) {
		i++;
		if (i === 3 || (i % 2 !== 0 && i % 3 !== 0)) {
			dividers.push(i);
		}
		j = 0;
	} else {
		j++;
	}
}
console.log(i-1);
