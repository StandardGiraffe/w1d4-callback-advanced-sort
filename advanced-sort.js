/*
Goal:
Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

Plan:



*/

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 400 }
];

var customSort = function (array) {
  array.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    } else
    if (a.name > b.name) {
      return 1;
    } else if (a.name == b.name){
      return (b.age - a.age);
    }
  })

  return array;
}

console.log(customSort(students));