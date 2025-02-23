
/* 
@1.. JSON = 'J'ava'S'cript   'O'bject   'N'otation
@2.. CRUD = 'C'reate   'R'ead   'U'pdate   'D'elete

JSON.stringify() ডাটা সংরক্ষণ ও ট্রান্সমিট করতে কাজে লাগে।
JSON.parse() API থেকে ডাটা রিড করতে ব্যবহৃত হয়।
CRUD অপারেশনে JSON মেথডগুলো খুব দরকারি।


1. JSON.stringify er kaj: kuno object kinba array er property,value,element sob gulo string e conveert kore fele even object er porperty k shuddo quetion eer vitore rakee.ortat string kore fele 
2. JSON.parse er kaj: kuno json.string e thaka objeect kinba array k main object & main array er rope pirai ane , ortat jodi kuno object json string e thake tkn to tar property shuddo string e akare take sei  quetion theke ber kore mol/main objeect er rop dei hosse (JSON.parse(json.string_taka_obj_array_name))
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
const object = {brand:"tesla" , owner:'elon musk'};

const jsonString2 = JSON.stringify(object);// {"brand":"tesla","owner":"elon musk"}
console.log(jsonString2);
/* (jsonString2) ei variable e  object ta string akare ase  seta k ager rope pirai anai holo (JSON.parse()) er kaj jmn:*/

const jsonParse= JSON.parse(jsonString2);// { brand: 'tesla', owner: 'elon musk' }
/*  ekn (jsonString2) ei  varaible e thaka (json.stringify) er maddome (json.string) e convert howa object k abr sei ager rope pirai ana hoise (JSON.parse()) */
console.log(jsonParse)
