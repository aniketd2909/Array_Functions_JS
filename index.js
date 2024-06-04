arr = [2, 5, 1, 3];

// ForEach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
arr.myForEach(function (ele, i, self) {
  console.log(ele, i, self);
});

// Includes
Array.prototype.myIncludes = function (ele, start = 0) {
  for (let i = start; i < this.length; i++) {
    if (this[i] === ele) {
      return true;
    }
  }
  return false;
};
console.log(arr.myIncludes(2));

// Filter
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] >= 3) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log(arr.myFilter(function (ele, i, self) {}));

// indexof
Array.prototype.myIndexOf = function (ele, start = 0) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === ele) {
      return i;
    }
  }
  return -1;
};
console.log(arr.myIndexOf(3));

// myReduce
Array.prototype.myReduce = function (cb, initial = 0) {
  total = initial;
  for (let i = 0; i < this.length; i++) {
    total = this[i] + total;
    cb(total, this[i], i, this);
  }
  return total;
};

console.log(arr.myReduce(function (total, curr, index, self) {}, 0));

//slice
let str = "Hello World";
String.prototype.mySlice = function (start = 0, end = this.length) {
  let result = "";
  if (start < 0) {
    start = start + this.length;
  }
  if (end < 0) {
    end = end + this.length;
  }
  while (start < end) {
    result += this[start];
    start += 1;
  }

  return result;
};
console.log(str.mySlice(-4, -1));

//splice
Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let removedElements = [];

  if (start < 0) {
    start = this.length + start;
  }

  for (let i = 0; i < deleteCount; i++) {
    if (start + i < this.length) {
      removedElements.push(this[start + i]);
      if (i === deleteCount - 1) {
        for (let j = start + i + 1; j < this.length; j++) {
          this[j - 1] = this[j];
        }
      }
    }
  }

  for (let i = 0; i < items.length; i++) {
    this[start + i] = items[i];
  }

  this.length = this.filter((element) => element !== null).length;

  return removedElements;
};

console.log(arr.mySplice(2, 2, "a", "b"));
console.log(arr);
