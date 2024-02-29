// destructuring object does not follow an index like array, it can be destructured based on their properties

// you can assign new variable name like this, propertyName: newVariableName. Ex. name: restoName;

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

const {name: restoName, menu:[a, b,c], openingHours:{mon, sat, sun}} = restaurant;
const restoInfo = `Welcome to ${restoName}, we are open Mondays to Fridays at ${mon} and ${sat} on Saturdays but we are ${sun} on Sundays. Come and enjoy our menus like ${a}, ${b} and ${c} dishes.`;

const div = document.querySelector(".root");
const h2 = document.createElement("h2");
h2.innerHTML = restoInfo;
h2.style.color = 'green';
div.insertAdjacentElement('afterend', h2)