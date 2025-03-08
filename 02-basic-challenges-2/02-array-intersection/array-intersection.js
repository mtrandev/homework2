function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = [];
  
    for (let num of arr2) {
      if (set1.has(num)) {
        intersection.push(num);
      }
    }
  
    return intersection;
  }
  
  module.exports = arrayIntersection;