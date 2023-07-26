function sumRange(n) {
  if (n === 1) {
    return n;
  } else {
    return sumRange(n - 1) + n;
  }
}
// console.log(sumRange(2));

function power(n, x) {
  if (x === 0) {
    return 1;
  } else {
    return power(n, x - 1) * n;
  }
}
// console.log(power(2, 4));

function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

// function all(arr,callback) {
//   if (callback == true)
// }

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  // let num = arr.shift();
  return arr.shift() * productOfArray(arr);
}
// console.log(productOfArray([1, 2, 3, 4, 5]));

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
  data2: {
    info2: {
      numero: 42,
      wordy: "dog",
    },
  },
};

function contains(object, search) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], search);
    }
    if (object[key] === search) {
      return true;
    }
  }
  return false;
}
// console.log(contains(nestedObject, 44));

function fibs(n) {
  let a = 0;
  let b = 1;
  let arr = [0];
  for (let i = 1; i < n; i++) {
    let c = a + b;
    b = a;
    a = c;
    arr.push(c);
  }
  console.log(arr);
}

// console.log(fibs(8));

// let arr = [0];
// let a = 0;
// let b = 1;
// let c;
// function fibsRec(n) {
//   if (n === 1) {
//     return console.log(arr);
//   } else {
//     c = a + b;
//     b = a;
//     a = c;
//     arr.push(c);
//     fibsRec(n - 1);
//   }
// }

// fibsRec(8);

function fibsRec2(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec2(n - 1) + fibsRec2(n - 2);
  }
}
function fibsArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(fibsRec2(i));
  }
  return array;
}
console.log(fibsRec2(8));
console.log(fibsArray(8));
