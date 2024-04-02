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
        return ((2 * Math.PI * (this.radius ** 2)));
    }

    circumference(){
        return (2 * Math.PI * this.radius);
    }
}

class Rectangle{
    name= "Rectangle";
    length = 1;
    width = 1;

    area(){
        return (this.width * this.length);
    }

    perimeter(){
        return ((2*this.length) + (2*this.width));
    }

    is_square(){
        if (this.length == this.width){
            return true;
        }
        return false;
    }
}

class Vehicle{
    type='';
    num_wheels;
    num_doors;
    num_seats;
    fuel='';
    can_fly= false;
}