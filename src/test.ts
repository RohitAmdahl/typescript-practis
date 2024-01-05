import { API } from "./type";
console.log(API);

// import { myButtonClick } from "./type";
// myButtonClick();

import { discountPriceOfItem } from "./type";
const discountValue = discountPriceOfItem(10000, 20);
console.log("discountValue is ", discountValue);

class Person {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class Employee extends Person {
  department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

const howard = new Employee("Howard", "Sales");
console.log("howard", howard.getElevatorPitch());

function calculateAvrage(x: number, y: number, z: number) {
  const noOyer: number = 10;
  return (x + y + z) / noOyer;
}

console.log(calculateAvrage(2, 2, 15));

export function addNumbers(a: number, b: number): number {
  return a + b;
}

export function function1(a: number, b: number): number {
  return a + b;
}

addNumbers(10, 20);
