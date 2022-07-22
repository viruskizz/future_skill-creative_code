let fruits = ['Apple', 'Banana'];
console.log('0: ', fruits[0]);
console.log('size: ', fruits.length);
fruits.push('Orange');
console.log('0: ', fruits[2]);
console.log('size: ', fruits.length);
for (let i = 0; i < fruits.length; i += 1) {
  console.log(i, ':', fruits[i]);
}
