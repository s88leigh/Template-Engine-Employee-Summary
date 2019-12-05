class Engineer {
    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }
}
const engineer = new Engineer("Tim", 2, "Engineer", "tim@Test.com");
const engineer = new Engineer("Jill", 3, "Engineer", "jill@test.com");
const engineer = new Engineer("John", 4, "Engineer", "john@test.com");

module.exports = Engineer