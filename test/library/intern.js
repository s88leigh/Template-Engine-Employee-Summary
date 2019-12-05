class Intern {
    constructor(name, id, role, email, school) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
        this.school = school;
    }
}
const James = new Intern("Tony", 4, "Intern", "Tony@test.com", "UCLA");
const Kelly = new Intern("Kelly", 5, "Intern" "kelly@test.com", "UCLA");
const Jennifer = new Intern("Jennifer", 6, "Intern", "jen@test.com", "UCLA")
module.exports = Intern

