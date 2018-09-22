/*var Person = require('./modules/Person.js');*/
import Person from "./modules/Person";


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
