// const, letの変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "daiki",
//   age: 28
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat']
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 *  テンプレート文字列
 */
const name = "じゃけぇ";
const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("fuc1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10, 4));

/**
 * 分割代入
 */

// const myProfile = {
//   namae: "じゃけぇ",
//   nenrei: 28
// };

// const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// const { namae, nenrei } = myProfile;

// const msg2 = `名前は${namae}です。年齢は${nenrei}歳です。`;
// console.log(msg2);

// const myProfile1 = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`;
// console.log(message3);

// const [nm, ag] = myProfile1;
// const message4 = `${nm}と${ag}です`;

// console.log(message4);

// /**
//  * デフォルト値, 引数など
//  */

// const sayHello = (name = "ゲスト") => console.log(`hi! ${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 *
 */

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 * num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//　まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、　結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

// arr6[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った入れるの処理
 */
const nameArr = ["田中", "山田", "大樹"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "大樹") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの時 : falseの時
//  const val1 = 1> 0 ? 'true' : 'false';
//  console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 * num2 > 100 ? '100を超えています。' : '許容範囲内です。';
// }

// const sum = checkSum(100, 4);
// console.log(sum);

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }

// if (flag1 && flag2) {
//   console.log("1か2はtrueになります。");
// }

// || は左側がfalseとなるなら右側を返す。

// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// // && は左側がtrueなら右側を返す。
// const num2 = null;
// const fee2 = num2 && "なにか設定されました。";
// console.log(fee2);
