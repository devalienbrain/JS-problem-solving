/* PROBLEM-04 */
function findAddress(obj) {
  obj.street = '__';
  obj.house = '__';
  obj.society = '__';
  return obj.street + ',' + obj.house + ',' + obj.society;

}

// problem-4
console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));
console.log(findAddress({ street: 99, house: "FATIHA", society: "SABBIR" }));
console.log(findAddress({}));