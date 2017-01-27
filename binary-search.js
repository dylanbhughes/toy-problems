function binarySearch(array, target) {
  // inner function for recursion
  function subSearch(min, max){
    // if min and max are equal and the item at that index is not the item
    if(max === min) {
      if(array[max] === target) {
        return max;
      }
      else {
        return -1;
      }
    }
    // check the min and max, for form's sake
    else if(array[max] === target){
      return max;
    }
    else if(array[min] === target){
      return min;
    }
    else {
      // take the midpoint, round up
      let midpoint = Math.ceil((min+max)/2);
      // if the item at index midpoint is the item, set the index to output
      if(array[midpoint] === target) {
        return midpoint;
      }
      // if the item at index midpoint is greater than the item, call subSearch with midpoint as max
      else if(array[midpoint] > target){
        return subSearch(min, midpoint);
      }
      // if the item at index midpoint is less than than the item, call subSearch with midpoint as min
      else if(array[midpoint] < target) {
        return subSearch(midpoint, max);
      }
    }
  }
  return subSearch(0, array.length-1);
}
