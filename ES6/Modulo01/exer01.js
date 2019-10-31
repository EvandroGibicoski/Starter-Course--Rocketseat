class Users {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Users {
  constructor(email, password) {
    super(email, password);

    this.admin = true;
  }
}

const User1 = new Users("email@test.com", "senha123");
const Adm1 = new Admin("email@test.com", "senha1234");

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true
