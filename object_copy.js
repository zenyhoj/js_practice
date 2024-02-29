const joe = {
  name: 'Joe',
  gender: 'Male',
  dob: '1985-05-15',
  position: 'MIS-A',
  skills: ['Managing', 'Writing', 'Programming']
}


const eddie = Object.assign({}, joe); 
eddie.name = 'Eddie';
eddie.age = '45'
eddie.skills.push('Analysis');
console.log(eddie);
console.log(joe);

/** Key Takeaways: 100 - Primitives vs Objects in Practice 
 *
 * Object.assign({}, objectToCopy):
  - Copies the properties of the target Object. Object.assign can only copy first level object properties but not the nested objects.
 * 
 * 
*/



