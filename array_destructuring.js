// nested destructuring

const arr = ['hello', 'there', ['joe','balingit'], {age: 27, height: 163}];

const [a, ,[c,d], {age, height}] = arr;
console.log(`${a} there ${c} ${d}, ${age}, ${height}`)
