function searchInGrid(inputArray, inputPattern) {
  let inputArrayLength = inputArray.length;
  let patternLength = inputPattern.length;

  let startElement = inputPattern[0][0];
  let isExists = false;
  for (let i = 0; i < inputArrayLength; i++) {
    for (let j = 0; j < inputArrayLength; j++) {
      let element = inputArray[i][j];
      //   console.log(element, startElement);
      if (element === startElement) {
        let mainI = i;
        let mainJ = j;
        for (let pI = 0; pI < patternLength; pI++, mainI++) {
          mainJ = j;
          for (let pJ = 0; pJ < pattern.length; pJ++, mainJ++) {
            // console.log(" Indexes ", pI, pJ, mainI, mainJ);
            // console.log(
            //   " Values ",
            //   inputPattern[pI][pJ],
            //   inputArray[mainI][mainJ]
            // );
            isExists = inputPattern[pI][pJ] === inputArray[mainI][mainJ];
          }
        }
        if (isExists === true) break;
      }
    }
    if (isExists === true) break;
  }
  return isExists;
}

let arr = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

let pattern = [["2", "3"], ["5", "6"]];

console.log(searchInGrid(arr, pattern));
