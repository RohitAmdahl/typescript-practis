import { API } from "./type";
console.log(API);
// import { myButtonClick } from "./type";
// myButtonClick();
import { discountPriceOfItem } from "./type";
const discountValue = discountPriceOfItem(10000, 20);
console.log("discountValue is ", discountValue);
class Person {
    name;
    constructor(theName) {
        this.name = theName;
    }
}
class Employee extends Person {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard = new Employee("Howard", "Sales");
console.log("howard", howard.getElevatorPitch());
function calculateAvrage(x, y, z) {
    const noOyer = 10;
    return (x + y + z) / noOyer;
}
console.log(calculateAvrage(2, 2, 15));
export function addNumbers(a, b) {
    return a + b;
}
export function function1(a, b) {
    return a + b;
}
addNumbers(10, 20);
