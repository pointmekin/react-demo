// const, let

let a = 1
a = 2

const b = [0, 1, 2]
b[0] = 3
// b = [3, 1, 2]
// // console.log(b)


// // console.log(typeof(1))

a = 1
a = "1"
a = [1]
a = {
  'one': 1,
  'two': 'two'
}

// // console.log(a['two'])

// functions

// function add(x, y) {
//   return x + y;
// }

const newAdd = (x, y) => {
  return x + y;
}

// // console.log(newAdd(1, 2))

// Arrays

// Filter
const list = [1, 2, 3, 4, 5]

// const newList = list.forEach((current, index) => {
//   // console.log(current, index)
// })

const newList = list.filter((current) => {
  return current > 3
})

// console.log(newList)

const mixedArray = [1, "two", []]

const stringArray = mixedArray.filter((current) => {
  return typeof(current) === "number"
})

const intList = [1, 2, 3, 4, 5]
const newIntList = intList.map((current) => {
  return current + 5
})


const newIntList2 = []
intList.forEach((current) => {
  newIntList2.push(current + 5)
})


// console.log("newIntList", newIntList)
// console.log("newIntList2", newIntList2)
// console.log(stringArray)
// console.log(mixedArray.find((current) => current === "two"))
// console.log(mixedArray.findIndex((current) => current === "two"))
// console.log(mixedArray.includes("three"))
// console.log(mixedArray.includes("two"))

/////////////////

console.log(1 == "1")
console.log(null == undefined)
console.log(0 == false)

// falsy
0, '', null, undefined

console.log(0 == true)


const value = 0
if ([]) {
  console.log("it is 0")
} else {
  console.log("it is not 0")
}

const asdf = undefined

if (asdf) {

}

/////

