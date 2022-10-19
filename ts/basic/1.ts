

/**
 * 字符串、数字类型、bool、数组类型的简单申明与定义
 */
// const hd:string = 'hello world'
// const more:number = 100
// const isChange:boolean = false
// const arr:string[] = ['information','hello world']
// const arr2:number[] = [1,2,1,1]
// console.log(hd,more,isChange,arr,arr2);


/**
 * 元组，泛型的简单申明与定义
 * 元组对每一个元素的类型都做了统一的规范与要求
 */
// const arr:Array<string> = ['information','example','others']
// const num:Array<number> = [1232,123,123]
// console.log(num[0]+num[1]);
// console.log(arr);
// const example:[string,number,boolean] = ['information',11,false]
// console.log(example);

/**
 * 对象类型规范
 */
// const obj:{} = {}
// obj.name = 'hello'
// console.log(obj);
// const obj1:{name:string,age:number}  = {name:'lihua',age:22}
// console.log(obj1);
// let exam:{name:string|number,age:number|string,other?:string}
// exam={name:'lihua',age:22}
// console.log(exam);

/**
 * type类型的使用
 */
// type HELLO = {name:string|number,age:string|number,other?:string}
// const exams:HELLO = {name:'lihua',age:22,other:'this is a demo'}
// console.log(exams);

//任意定义属性名
// type HELLO = {
//     [key :string]: keyof any
// }
// const exam:HELLO = {name:'others',other:1}
// console.log(exam);

//record工具类型定义
// type HELLO = Record<string , string>
// let a:HELLO = {name:'others',age:'22'}
// console.log(a);

// type OTHER = Record<'name'|'age'|'city',string>
// const a:OTHER = {name:'lihua',age:'22',city:'beijing'}
// console.log(a);


/**
 * unknown 类型 as 
 */
// let exam:unknown = 'string'
// let str:string = exam as string
// console.log(str);
// let info:string = 'infomation'
// let other:number = info as unknown as number
// console.log(info,other);


/**
 * void类型
 */
// let a:void = undefined
// console.log(a);
// function info(arg:number):void{
//     if(arg > 100){
//         return undefined
//     }
//     return undefined;
// }
// const a = info(200)
// console.log(a);

// let a:void = 
// let b:string = a as unknown as void


/**
 * never类型
 */
// function hd():never{
//     throw new Error('出错了')
// }
// hd()

// type STUDY = never extends string ? string : boolean

// const a:STUDY = string extends never
// console.log(a);
// let a:null = null
// console.log(a);

// function run():any{
//      let a :string,
//      getAll():string{
//         return a 
//      }

// }
// run()




