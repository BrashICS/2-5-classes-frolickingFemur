/*
 * ICS4U - Mr. Brash 🐿️
 * 2.5 - Classes
 *
 * Classes are BLUEPRINTS of an abstract data type.
 * To create a copy of one (called an instance) we use "new"
 * See the README.md file.
 * 
 * Author: Kate Boyd
 */

'use strict';

class Circle{
    name = "Circle";
    radius = 1;


    area(){
        console.log((Math.PI * (this.radius ** 2)));
        return ((2 * Math.PI * (this.radius ** 2)));
    }

    circ(){
        console.log(2 * Math.PI * this.radius);
        return (2 * Math.PI * this.radius);
    }
}

class Rectangle{
    name= "Rectangle";
    length = 1;
    width = 1;
}

class Vehicle{
    type='';
    num_wheels;
    num_doors;
    num_seats;
    fuel='';
    can_fly= false;
}

let newCirc = new Circle();
newCirc.radius = 3;
newCirc.circ();