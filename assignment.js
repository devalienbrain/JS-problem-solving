/*--------------------------*
 *       ASSIGNMENT-4       *         
 *--------------------------*/

/*Author: WEB8-1908 (HASSAN)*/

/* PROBLEM-01 */
function cubeNumber(number) {
  if (typeof number !== 'number') {
    return "Invalid input! Please input a number."
  }
  else {
    let result = 1;
    for (let c = 1; c <= 3; c++) {
      result *= number;
    }
    return result;
  }
}


/* PROBLEM-02 */
function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Invalid input! Please input valid string."
  }
  else {
    if (string1.includes(string2))
      return true;
    else
      return false;
  }
}


/* PROBLEM-03 */
function sortMaker(arr) {
  const n1 = arr[0];
  const n2 = arr[1];
  if (n1 < 0 || n2 < 0) {
    return "Invalid Input";
  }
  else {
    if (n1 === n2) {
      return "equal";
    }
    else {
      if (n1 < n2) {
        const tempo = arr[0];
        arr[0] = arr[1];
        arr[1] = tempo;
      }
      return arr;
    }
  }
}


/* PROBLEM-04 */
function findAddress(obj) {
  const strPart1 = obj.street || '__';
  const strPart2 = obj.house || '__';
  const strPart3 = obj.society || '__';
  return strPart1 + ',' + strPart2 + ',' + strPart3;

}


/* PROBLEM-05 */
function canPay(changeArray, totalDue) {
  const arrLength = changeArray.length;
  if (arrLength === 0) {
    return "The array is empty! Please input valid array with elements.";
  }
  else {
    let totalChange = 0;
    for (let i = 0; i < arrLength; i++) {
      totalChange += changeArray[i];
    }
    if (totalChange >= totalDue) {
      return true;
    }
    else {
      return false;
    }
  }
}

/*Ends Of Assignment-4*/


// problem-1
console.log(cubeNumber('fatiha'));
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(10));
console.log(cubeNumber(-3));
console.log(cubeNumber(0));
console.log(cubeNumber(true));
console.log(cubeNumber([3]));
console.log(cubeNumber({}));

// problem-2
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
console.log(matchFinder('FatihaSabbir', 'Sabbir'));
console.log(matchFinder('I Love You', 'e Y'));
console.log(matchFinder('I Love You', 'I l'));
console.log(matchFinder('I Love You', ' Y'));
console.log(matchFinder('I Love You', 7));
console.log(matchFinder(8, 'Love'));
console.log(matchFinder(4, 6));

// problem-3
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
console.log(sortMaker([-4, -2]));
console.log(sortMaker([0, 2]));
console.log(sortMaker([0, 0]));
console.log(sortMaker([0, 1]));
console.log(sortMaker([100, 1009]));
console.log(sortMaker([-900, 0]));
console.log(sortMaker([30, 21]));


// problem-4
console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));
console.log(findAddress({ street: 99, house: "FATIHA", society: "SABBIR" }));
console.log(findAddress({}));

// problem-5
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));
console.log(canPay([], 10));
console.log(canPay([0], 10));
console.log(canPay([5, 7], 10));