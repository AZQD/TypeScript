console.log('Hello TypeScript!');

// -------------------华丽的分割线-----------------------
// TypeScript 基础类型
// //数字类型
// let bin:number = 1;
// console.log(bin);
//
// // 字符串
// let str:string = 'hello';
// console.log(str);
//
// //布尔类型
// let flag:boolean = true;
// console.log(flag);
//
// //数组类型
// let arr1:number[] = [1, 2];
// let arr2:Array<number> = [3, 4];
// console.log(arr1);
// console.log(arr2);
//
// //元组 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
// let arr3:[number, string] = [1, 'hello'];
// console.log(arr3);
//
// //枚举 枚举类型用于定义数值集合。
// enum Color {Red, Green=3, Blue};
// let c:Color = Color.Blue;
// console.log(c);
//
// //void 用于标识方法返回值的类型，表示该方法没有返回值。
// function testFun():void {
//   console.log('hello world');
// }
// testFun();
//
// //null 表示对象值缺失。
// let a:null = null;
// a = undefined;
// console.log(a);
//
// //undefined 用于初始化变量为一个未定义的值
// let b:undefined = undefined;
// b = null;
// console.log(b);
//
// let x:number | null | undefined;
// x = 1;
// x = null;
// x = undefined;
// console.log(x);
//
// //never never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// let n:never;
// n = (()=>{
//   throw new Error('报错提示');
// })();
//
// //any
// let arr4:any[] = ['1', 2, false];
// console.log(arr4);

// -------------------华丽的分割线-----------------------
// TypeScript 变量声明
// var str = '1';
// var str2:number = <number> <any> str;
// console.log(str2);
//
// var num = 2;
// num = '12';
// console.log(num);
// console.log(~5);

// -------------------华丽的分割线-----------------------
//TypeScript 函数
// 可选参数必须跟在必需参数后面
// function add(x: number, y: number, z?:number):number {
//   return x+y+z;
// }
// console.log(add(1, 2));
// console.log(add(1, 2, 3));
//
// // 不知道要向函数传入多少个参数
//
// function add2(...nums:number[]) {
//   console.log(nums);
// }
// add2(1, 2);

// 如果参数类型不同，则参数类型应设置为 any。
//
// 参数数量不同你可以将不同的参数设置为可选。

// -------------------华丽的分割线-----------------------
// TypeScript 接口

// interface IPerson {
//   firstName: string,
//   lastName: string,
//   sayHi: () => string
// }
//
// var customer:IPerson = {
//   firstName: 'jack',
//   lastName: 'rose',
//   sayHi: ():string=>'hello'
// };
//
// console.log(customer);
// console.log(customer.sayHi());

// 联合类型和接口

/*interface RunOptions{
  program: string;
  commandline: string[]|string|(()=>string)
}

// commandline是字符串
var option:RunOptions = {
  program: 'test1',
  commandline: 'hello'
};

// commandline是字符串数据
option = {
  program: 'test2',
  commandline: ['hello', 'world']
};

// commandline是函数表达式
option = {
  program: 'test4',
  commandline: ():string => {
    return 'hello world'
  }
};
console.log(option);*/

// 接口和数组
// interface Namelist {
//   [index: number]:string
// }
// var list2:Namelist = ['jack', 'rose'];

// 接口继承
// Typescript 允许接口继承多个接口
/*interface IParent1 {
  name: string
}

interface IParent2 {
  age: number
}

interface IChild extends IParent1, IParent2 {
  height: number
}

var userInfo: IChild = {
  name: '杨幂',
  age: 18,
  height: 180
};
console.log(userInfo);*/


// -------------------华丽的分割线-----------------------

// //普通函数返回值定义
// let fun1: Function = function(a: number):number{
//   return a;
// };
// //箭头函数返回值定义
// let fun2: Function = (a: number):string =>'str';

// -------------------华丽的分割线-----------------------

// TypeScript 类
// 类可以包含以下几个模块
/*
class Car {
  // 字段
  engine: string;
  // 构造方法
  constructor(engine: string){
    this.engine = engine;
  }
  // 方法
  disp():void{
    console.log('发动机为：' + this.engine);
  }
}

var obj = new Car('Enginer1');
obj.disp();*/

// -------------------华丽的分割线-----------------------
// 类的继承
// class Shape {
//   Area: number;
//   constructor(num: number){
//     this.Area = num;
//   }
// }
//
// class Circle extends Shape{
//   disp():void{
//     console.log('圆的面积为：' + this.Area);
//   }
// }
//
// var obj = new Circle(12);
// obj.disp();

// 需要注意的是子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承，如下实例：
/*
class Root {
  str: string
}
class Child extends Root{
  
}
class Leaf extends Child{
  
}
var obj = new Leaf();
obj.str = 'str';
console.log(obj);
console.log(obj.str);*/

// -------------------华丽的分割线-----------------------
// 继承类的方法重写
/*
class Parent {
  doPrint():void{
    console.log('调用父组件doPrint');
  }
}
class Child extends Parent{
  doPrint():void{
    super.doPrint(); // super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
    console.log('调用子组件doPrint');
  }
}
let obj = new Child();
obj.doPrint();*/

// -------------------华丽的分割线-----------------------
/*// static 关键字
// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
class StaticPerson {
  static num: number;
  static disp():void{
    console.log('num的值为：'+StaticPerson.num);
  }
}
StaticPerson.num = 12; // 初始化静态变量
StaticPerson.disp(); // 调用静态方法*/
// -------------------华丽的分割线-----------------------
// instanceof 运算符
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
/*class Parent {

}
let obj = new Parent();
console.log(obj instanceof Parent);*/

// -------------------华丽的分割线-----------------------
// 访问控制修饰符
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。(不能被实例使用)
// private : 私有，只能被其定义所在的类访问。
/*class Parent {
  public str1: string = 'hello';
  protected str2: string = 'world';
  private str3: string = '~~~';
}
class Child extends Parent{
  disp():void{
    console.log(this.str2);
  }
}
let obj = new Child();
obj.disp();
console.log(obj.str1);
// console.log(obj.str2); // 编译错误
// console.log(obj.str3); // 编译错误*/

// -------------------华丽的分割线-----------------------
// 类和接口
/*
interface ILoan {
  interest:number
}

class AgriLoan implements ILoan {
  interest:number
  rebate:number

  constructor(interest:number,rebate:number) {
    this.interest = interest
    this.rebate = rebate
  }
}

var obj = new AgriLoan(10,1)
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )*/
// -------------------华丽的分割线-----------------------
