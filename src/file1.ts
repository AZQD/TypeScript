const num: number = 1;
console.log(num);

let arr: string[] = ['dog', 'cat'];
console.log(arr);
let fist: string = arr[0];
console.log(arr, fist);

interface IStudent {
    name: string;
    age: number;
}

let student1: IStudent = {
    name: 'liming',
    age: 12
};
console.log(student1);

class Menu {
    item: Array<string>;
    pages: number;
}

console.log(Menu);
console.log(Menu.prototype);
