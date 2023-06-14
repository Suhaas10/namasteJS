// reverse string

function reverseString(word) {
  const splitString = word.split("");
  const reverseArray = splitString.reverse();
  const reverseString = reverseArray.join("");

  return reverseString;
}

//console.log(reverseString("Suhaas"));

// two sum

function twoSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (number + arr[j] === sum) {
        return [i, j];
      }
    }
  }
}

//console.log(twoSum([2, 7, 11, 15], 9));
//console.log(twoSum([3, 2, 4], 6));

//remove duplicates

function removeDuplicates(arr) {
  let uniqueArr = [...new Set(arr)];
  console.log(typeof uniqueArr);
  console.log(typeof [1, 2]);
  return uniqueArr;
}

//console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5]));

//closure

//find index of element using binary search

function findIndex(arr, target, start, end) {
  let middleIndex = Math.floor((start + end) / 2);
  console.log(arr);
  console.log(middleIndex);

  if (start > end) {
    return middleIndex + 1;
  }

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return findIndex(arr, target, start, middleIndex - 1);
  }

  if (target > arr[middleIndex]) {
    return findIndex(arr, target, middleIndex + 1, end);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 3.5;

// console.log(findIndex(arr, target, 0, arr.length - 1));

let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let key = 3.5;

// console.log(binarySearch(sortedArray, key));

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  console.log(start);
  console.log(end);

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log("middle", middle);
    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

//moveworks problem

function longestCommonSuffix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let suffix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = suffix.length - 1;
    let k = strs[i].length - 1;

    while (j >= 0 && k >= 0 && suffix[j] === strs[i][k]) {
      j--;
      k--;
    }

    suffix = suffix.slice(j + 1);
    if (suffix === "") {
      return "";
    }
  }

  return suffix;
}

// Example usage:
const strs = ["aba", "ab", "abbccd"];
const result = longestCommonSuffix(strs);
// console.log(result);

var addTwoNumbers = function (l1, l2) {
  for (let i = l1.length - 1; i >= 0; i--) {
    let numberString = l1[i].toString() + l1[i - 1].toString();

    console.log(numberString);
  }
};

//console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

let nums1 = [1, 2];
let nums2 = [3, 4];
var findMedianSortedArrays = function (nums1, nums2) {
  let concatArr = [...nums1, ...nums2];

  let sortedArr = concatArr.sort((a, b) => a - b);

  if (sortedArr % 2 != 0) {
    return sortedArr[Math.floor(sortedArr.length / 2)];
  } else {
    let halfLength = sortedArr.length / 2;
    console.log(halfLength);
    return (sortedArr[halfLength - 1] + sortedArr[halfLength / 2]) / 2;
  }
};

//console.log(findMedianSortedArrays(nums1, nums2));

var maxArea = function (height) {
  let result = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    console.log("left", left);
    console.log("right", right);
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;

    if (area > result) result = area;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return result;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

var threeSum = function (nums) {
  let arrOfArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = (i = 1); j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arr = [];
          arr.push(nums[i]);
          arr.push(nums[j]);
          arr.push(nums[k]);
          arrOfArr.push(arr);
        }
      }
    }
  }
  return arrOfArr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
    } else {
      if (max < arr.length) max = arr.length;
      arr.length = 0;
    }
  }
  return max;
};

// console.log(lengthOfLongestSubstring("abcabcdbb"));

//3Sum Closest
var threeSumClosest = function (nums, target) {
  let minimum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        console.log("i", nums[i]);
        console.log("j", nums[j]);
        console.log("k", nums[k]);
        console.log("sum", sum);
        let diff = Math.abs(sum - target);

        if (diff < minimum) {
          minimum = sum;
        }
      }
    }
  }
  console.log(minimum);
  return minimum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
