// destructuring object does not follow an index like array, it can be destructured based on their properties

// can assign new variable name like this, propertyName: newVariableName. Ex. name: restoName;

// destructuring can also occur on the object method as parameters, ex. orderDelivery: function({time, address, menu}) { // code here}
// restaurant.orderDelivery = {time: '10:00 AM', address: 'some address', menu: [Pizza, etc]}

// can also assign default value, ex. time = '8:00 PM', if time argument has no value, then the default will be used.


const restaurant = {
  name: 'Italian Pizza Hauz',
  menu: ['Pizza', 'Burgerz', 'Anything Italian'],
  openingHours: {
    mon: '10:00AM - 10:PM',
    tue: '10:00AM - 10:PM',
    wed: '10:00AM - 10:PM',
    thu: '10:00AM - 10:PM',
    fri: '10:00AM - 10:PM',
    sat: '5:00PM - 10:PM',
    sun: 'closed'
  }

}

function order({name, menu, openingHours: {mon}}) {
  return `${name} ${menu}, ${mon}`

}

console.log(order(restaurant))

const {name: restoName, menu:[a, b,c], openingHours:{mon, sat, sun}} = restaurant;
const restoInfo = `Welcome to ${restoName}, we are open Mondays to Fridays at ${mon} and ${sat} on Saturdays but we are ${sun} on Sundays. Come and enjoy our menus like ${a}, ${b} and ${c} dishes.`;

const div = document.querySelector(".root");
const h2 = document.createElement("h2");
h2.innerHTML = restoInfo;
h2.style.color = 'green';
div.insertAdjacentElement('afterend', h2)
div.classList.add('root');

