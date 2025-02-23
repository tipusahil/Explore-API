
/* 
1. JSON = JavaScript Object Notation

2. JSON.stringify er kaj: kuno object kinba array er property,value,element sob gulo string e conveert kore fele even object er porperty k shuddo quetion eer vitore rakee.ortat string kore fele 
3. JSON.parse er kaj: kuno json.string e thaka objeect kinba array k main object & main array er rope pirai ane , ortat jodi kuno object json string e thake tkn to tar property shuddo string e akare take sei  quetion theke ber kore mol/main objeect er rop dei hosse (JSON.parse(json.string_taka_obj_array_name))
*/


const object1 = {name:'tipu' , roll:34, age:22};

console.log(object1)

const jsonString = JSON.stringify(object1);// {"name":"tipu","roll":34,"age":22}  ekane obj/kinba arrya er property namee k shuddo string e convert kore fele json stringify ejonnoi propertry shuddo qutetion er vitore j
console.log(jsonString)

// array e json string e convert:
const array = [2,3,4,5,6];
console.log(array);//[ 2, 3, 4, 5, 6 ] main array howai space ase sob element er maje

const jsonStringEconvertArrayK = JSON.stringify(array);
console.log(jsonStringEconvertArrayK)// [2,3,4,5,6] eta string hoye gece.tai space cole gece majkaner



// (JSON.parse()) er kaj:

// example 1:
