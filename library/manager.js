class Manager {
    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }
}
const manager = new manager("Bob", 2, "Manager", "bob@Test.com");
const manager = new manager("Tammy", 3, "Manager", "tam@test.com");
const manager = new manager("Joe", 4, "Manager", "joe@test.com");

module.exports = Manager