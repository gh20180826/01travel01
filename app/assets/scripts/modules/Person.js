/*
function Person(fullName, favColor) {
   this.name = fullName;
   this.favoriteColor = favColor;
   this.greet = function() {
      console.log("Darkbark, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
   }
}

module.exports = Person;
*/


class Person {
   constructor(fullName, favColor) {
      this.name = fullName;
      this.favoriteColor = favColor;
   }

   greet() {
      console.log("Yellow-mon Yellow-mon, my name is " + this.name + ", and my favorite color is " + this.favoriteColor +".");
   }
}

/*module.exports = Person;*/
export default Person;
