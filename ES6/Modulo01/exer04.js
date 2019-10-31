const company = {
  name: "Rocketseat",
  address: {
    city: "Rio do Sul",
    state: "SC"
  }
};

const {
  name,
  address: { city, state }
} = company;

console.log(name); 
console.log(city); 
console.log(state); 


function infoShow({ name, age }) {
  return `${name} tem ${age} anos.`;
}

infoShow({ name: "Diego", age: 23 });
