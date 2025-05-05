const sumAll = function(first, second) {
    let sum = 0;

    if (Math.sign(first) === 1 && Math.sign(second) === 1 && Number.isInteger(first) && Number.isInteger(second)) {
        let n = Math.min(first, second);
        while (n <= (end = Math.max(first, second))) {
            sum += n;
            n += 1;
        };
    } else {
        sum = 'ERROR';
    }

    return sum;
};

// Sum integer numbers between two arguments
// LOOP from first integer till last and sum
// IF non-integer OR negative OR NaN – ERROR

// Do not edit below this line
module.exports = sumAll;
