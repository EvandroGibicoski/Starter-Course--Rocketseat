const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

const user = { name: "Evandro", age: 34 };

const ageShow = user => user.age;

ageShow(user);

const name = "Diego";
const age = 23;

const userShow = (name = "Diego", age = 18) => ({
  name,
  age,
});

userShow(name, age);
userShow(name);


const promise = () => new Promise((resolve, reject) => resolve());
