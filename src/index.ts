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