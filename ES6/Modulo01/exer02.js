const users = [
  { name: "Diego", age: 23, company: "Rocketseat" },
  { name: "Gabriel", age: 15, company: "Rocketseat" },
  { name: "Lucas", age: 30, company: "Facebook" }
];

// MAP

const ages = users.map(user => user.age);
console.log(ages);

// FILTER

const rocketseat18 = users.filter(
  user=> user.company=== "Rocketseat" && user.age >= 18
);
console.log(rocketseat18);

// FIND

const google = users.find(user => user.company === "Google");
console.log(google);

//  UNINDO AS OPERAÇÕES

const result = users
  .map(user => ({ ...user, age: user.age * 2 }))
  .filter(user => user.age <= 50);

console.log(result);
