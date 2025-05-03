const removeFromArray = function(arr, ...values) {
    const newArr = arr.filter((value) => !values.includes(value));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
