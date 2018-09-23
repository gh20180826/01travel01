/*
//var Person = require('./modules/Person.js');
import Person from "./modules/Person";


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
*/

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
