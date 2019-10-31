const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//Rest

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3

// Spread

const user = {
  name: "Evandro",
  idade: 33,
  endereco: {
    cidade: "São José",
    uf: "SC",
    pais: "Brazil"
  }
};

const user2 = { ...user, name: "João" };
const user3 = {
  ...user,
  address: { ...user.address, city: "Davi" }
