// const Employee = require("./employee");
// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         super(name, id, email);
        
//         this.github = github;
//     };

//     getGithub() {
//         return this.github;
//     }

//     getRole() {
//         return "Engineer";
//     }
// };

  
class Engineer {
    constructor(name, id, title, email, github) {
        this.name = name;
        this.id= id;
        this.title = title;
        this.email = email;
        this.github = github;
    }
    getRole() {
        console.log(`${Engineer}`);
    }
}

const engineer = new Engineer("Eleanor", 5667, "Engineer", "eleanorb@fakemail.com", "ellybaker");

module.exports = Engineer;