function findLargestAnagram(inputArray) {
  let largestAnagramKey = "";
  let largestAnagramCount = 0;
  let objectArray = {};
  for (let word of inputArray) {
    let key = word
      .split("")
      .sort()
      .join("");

    if (objectArray[key]) {
      let newArray = [...objectArray[key], word];
      if (newArray.length > largestAnagramCount) {
        largestAnagramCount = newArray.length;
        largestAnagramKey = key;
      }
      objectArray[key] = newArray;
    } else {
      objectArray[key] = [word];
      if (largestAnagramCount === 0) {
        largestAnagramCount = 1;
        largestAnagramKey = key;
      }
    }
    // objectArray[key] = objectArray[key] ? [...objectArray[key], word] : [word];
  }
  return objectArray[largestAnagramKey];
  //   console.log(objectArray[largestAnagramKey]);
}

let arr = ["a", "abfr", "gkn", "cab", "frba", "aqgf", "gqf", "bac"];
console.log(findLargestAnagram(arr));
