const num:number = 1;
console.log(num);

let arr:string[] = ['dog', 'cat'];
console.log(arr);
var fist:string = arr[0];
console.log(arr, fist);

interface Student {
  name: string,
  age: number
};

let student1:Student = {
  name: 'liming',
  age: 12
};
console.log(student1);

class Menu {
  item: Array<string>
  pages: number
}

console.log(Menu);
console.log(Menu.prototype);