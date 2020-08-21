function statisticCall(array, solveFor) {
  // Declaring Variables

  let sumOfArray = 0;
  var arrayInOrder = array.sort();

  // Declaring Variables

  // Declaring Functions

  // Find Mean

  let findMean = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
      sumOfArray += inputArray[i];
    }
    return sumOfArray / inputArray.length;
  };

  // Find Mean

  // Find Median

  let findMedian = () => {
    let medianP1 = 0;

    //If this doesnt work, make arrayInOrder a local variable and declare it here

    if (arrayInOrder.length & 1) {
      medianP1 = (arrayInOrder.length + 1) / 2;
      return arrayInOrder[medianP1 - 1];
    } else {
      medianP1 = (arrayInOrder.length + 1) / 2;
      medianP1 = medianP1 + 0.5;
      let num1 = arrayInOrder[medianP1 - 1]; // high val
      let num2 = arrayInOrder[medianP1 - 2]; // low val
      return (num1 + num2) / 2;
    }
  };

  // Find Median

  // Find Mode

  let findMode = () => {
    for (let j = 0; j < arrayInOrder.length; j++) {
      let num1 = arrayInOrder[j]; // low val
      let num2 = arrayInOrder[j + 1]; // high val
      if (num1 == num2) {
        return num1;
      }
    }
    return 'There is no mode. No numbers repeat.';
  };

  // Find Mode

  // Find Range

  let findRange = () => {
    let min = arrayInOrder[0];
    let max = arrayInOrder[arrayInOrder.length - 1];

    return max - min;
  };

  // Find Range

  // Find SD

  let findStandardDeviation = () => {
    let mean1 = findMean(arrayInOrder);
    let sumForSD = [];
    let squaredForSD = [];
    let pushForSD = 0;
    let sumOfSquared = 0;
    let mean2;

    for (let k = 0; k < arrayInOrder.length; k++) {
      pushForSD = arrayInOrder[k] - mean1;
      sumForSD.push(pushForSD);
    }
    for (let l = 0; l < arrayInOrder.length; l++) {
      pushForSD = sumForSD[l] * sumForSD[l];
      squaredForSD.push(pushForSD);
    }

    for (let z = 0; z < squaredForSD.length; z++) {
      sumOfSquared = sumOfSquared + squaredForSD[z];
    }
    mean2 = sumOfSquared / squaredForSD.length;

    return Math.sqrt(mean2);
  };

  // Find SD

  // Declaring Functions

  switch (solveFor) {
    case 'mean':
      return findMean(arrayInOrder);
      break;
    case 'median':
      return findMedian();
      break;
    case 'mode':
      return findMode();
      break;
    case 'range':
      return findRange();
      break;
    case 'standard deviation':
      return findStandardDeviation();
      break;
  }
}

console.log(
  statisticCall([2, 2, 4, 4, 4, 5, 6, 6, 8, 9], 'standard deviation')
);
