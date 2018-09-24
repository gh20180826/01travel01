/*
//var Person = require('./modules/Person.js');
import Person from "./modules/Person";


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "orange");
jane.greet();
*/




// below (in color) is active:

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
