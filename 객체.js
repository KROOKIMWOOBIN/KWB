// // 실습 1, 2
/*let product = {
제품명 : "망고",
종류 : "과일",
가격 : "1000",
print : function() {
    console.log(`${this.제품명}의 가격은 ${this.가격}입니다.`);
}
}

console.log(product.제품명);

product.print();

for(let key in product){
    console.log(`${key} : ${product[key]}`);
}*/
// 실습 3
// const student = {}
// student.이름 = "김우빈";
// student.나이 = "21";
// student.장래희망 = "개발자";

// for(let i in student){
//     console.log(`${i} : ${student[i]}`);
// }

// console.log("\n");
// delete student.장래희망;

// for(let i in student){
//     console.log(`${i} : ${student[i]}`);
// }
// // 실습 4
// const test = {
//     a : function() {
//         console.log(this);
//     },
//     b : () => {
//         console.log(this);
//     }
// }

// test.a();
// test.b();
// 문제 1
// const object = {
//     ko: "빵",
//     en : "bread",
//     ja : "일본빵",
//     fr : "pain",
//     es : "pan",
//     lang : {
//         ko : "한국어",
//         en : "영어",
//         ja : "일본어",
//         fr : "프랑스어",
//         es : "스페인어"
//     },
//     print : function (lang){
//         console.log(`${this.ko} 은/는 ${this.lang[lang]}로 ${this[lang]}입니다.`);
//     } 
// }

// object.print("en");

//  const data = [{
//      name : "혼자 공부하는 파이썬",
//      price : 18000,
//      publisher : "한빛미디어"
//  },
//  {
//      name :"HTML5 웹프로그래밍 입문",
//      price : 26000,
//      publisher : "한빛아카데미"
//  }]

// console.log(JSON.stringify(data));
// console.log("\n");
// console.log(JSON.stringify(data,null,2))

// const json = JSON.stringify(data);
// console.log(json);

// console.log(JSON>parseFloat(json));

// let products = [
//     {name : "바나나",price : 1200},
//     {name : "배",price : 1500}
// ]
// function print(product){
//         console.log(`${product.name}는 ${product.price}입니다.`);
// }

// for(let product of products){
//     print(product);
// }


// const objects = [
//     {name : "사과", price : 500},
//     {name : "배", price : 700},
//     {name : "포도", price : 800}
// ]

// function print(object){
//     console.log(`${object.name}의 가격은 ${object.price}입니다.`);
// }

// for(object of objects){
//     print(object);
// }

// 6 7 8 5

// const object = [
//     {이름 : "일벌레", 미네랄 : 50, 가스 : 0, 보급품 : 1},
//     {이름 : "여왕", 미네랄 : 150, 가스 : 0, 보급품 : 2},
//     {이름 : "바퀴", 미네랄 : 75, 가스 : 25, 보급품 : 2},
//     {이름 : "히드라리스크", 미네랄 : 100, 가스 : 50, 보급품 : 2},
//     {이름 : "타락귀", 미네랄 : 150, 가스 : 100, 보급품 : 2}
// ]

// console.log(JSON.stringify(object));


// 6
// const Book = {
//     이름 : "Nature of Code",
//     가격 : 30000,
//     저자 : "다니엘 쉬프만",
//     ISBN : 9788978491901,
//     페이지수 : "620" 
// }
// console.log(`이름 : ${Book.이름} 가격 : ${Book.가격}원 저자 : ${Book.저자} ISBN : ${Book.ISBN} 페이지 수 : ${Book.페이지수}페이지`);

// 7
// const Product = {
//     이름 : "돼지삼겹살",
//     무게 : 100,
//     가격 : 1690, 
//     calculrate : function(무게){
//     console.log(무게 / this.무게 * this.가격 + "원");
// }}
// Product.calculrate(200);

// 8

let object = {
    "더하기" : 1,
    "빼기" : 2,
    "곱하기" : 3,
    "나누기" : 4
}

console.log(object.더하기);
console.log(object.빼기);
console.log(object.곱하기);
console.log(object.나누기);
