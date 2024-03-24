// 1 misol
// function BirinchiSozniOl(str, value) {
//   let index = str.indexOf(value);
//   if (index === -1) {
//     return str;
//   }
//   return str.slice(0, index) + str.slice(index + value.length);
// }
// console.log(BirinchiSozniOl("Uzbekistan", "istan"));
// console.log(BirinchiSozniOl("To be or not to be", "not"));
// console.log(BirinchiSozniOl("I like chicken legs", "en"));

// 2 misol
// function QavslarniOl(str) {
//   if (str.startsWith("<") && str.endsWith(">")) {
//     return str.slice(1, -1);
//   } else {
//     return str;
//   }
// }
// console.log(QavslarniOl("<p>"));
// console.log(QavslarniOl("<span>"));
// console.log(QavslarniOl("<div>"));

// 3 misol
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   if (n % 2 === 0 && n !== 2) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(42));
// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(13));

// 4 misol
// function group(array, keySelector, valueSelector) {
//   let Obj = {};
//   for (let item of array) {
//     let key = keySelector(item);
//     let value = valueSelector(item);
//     if (!Obj.hasOwnProperty(key)) {
//       Obj[key] = [];
//     }
//     Obj[key].push(value);
//   }
//   return Obj;
// }
// let country = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "France", city: "Paris" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];
// let groupedByCountry = group(
//   country,
//   (item) => item.country.toLowerCase(),
//   (item) => item.city
// );
// console.log(groupedByCountry);

// 5 misol
// function getSumBetweenNumbers(n1, n2) {
//   if (n1 > n2) {
//     return 0;
//   }
//   let n = n2 - n1 + 1;
//   return n * (n1 + n2);
// }
// console.log(getSumBetweenNumbers(5, 8));
// console.log(getSumBetweenNumbers(-4, 6));
// console.log(getSumBetweenNumbers(-1, 9));

// 6 misol
// function GetElementsOneTime(arr) {
//   let allElements = new Set();
//   let elementCounts = new Map();
//   for (let element of arr) {
//     allElements.add(element);
//     elementCounts.set(element, (elementCounts.get(element) || 0) + 1);
//   }
//   let elementsOneTime = [];
//   for (let element of allElements) {
//     if (elementCounts.get(element) === 1) {
//       elementsOneTime.push(element);
//     }
//   }
//   return elementsOneTime;
// }
// let arr = [11, 4, 8, 12, 5, 9, 18, 4, 11];
// let allElements = GetElementsOneTime(arr);
// console.log(allElements);

// 7 misol
// function deleteARRAY(arr) {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isUnique =
//       (i === 0 || arr[i] !== arr[i - 1]) &&
//       (i === arr.length - 1 || arr[i] !== arr[i + 1]);
//     if (isUnique) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// let arr = [11, 2, -2, 3, 3, 4, 5];
// let newArr = deleteARRAY(arr);
// console.log(newArr);

// 8 misol
// function endElements(arr, k, m) {
//   if (!(0 < k && k < m && m < arr.length)) {
//     throw new Error("Invalid indices: 0 < k < m < length of array");
//   }
//   arr.splice(k, m - k);
//   return { length: arr.length, arr };
// }
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = 2;
// let m = 5;
// let result = endElements(arr.slice(), k, m);
// console.log("Qolgan elementlar soni:", result.length);
// console.log("Result:", result.arr);

// 9 misol
// let books = [
//   {
//     title: "Sariq devni minib",
//     author: "Hudoyberdi Tohtaboyev",
//     alreadyRead: true,
//   },
//   { title: "Dunyo ishlari", author: "O'tkir Hoshimov", alreadyRead: false },
//   {
//     title: "Shum bola",
//     author: "G'afur G'ulom",
//     alreadyRead: true,
//   },
// ];
// function OqilganKitoblar(books) {
//   for (const book of books) {
//     const author = book.author;
//     const title = book.title;
//     const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${author}ning "${title}" kitobi ${readStatus}.`);
//   }
// }
// OqilganKitoblar(books);

// 10 misol
// function Mahsulotlar(products) {
//   let totalAmount = 0;
//   for (const product of products) {
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     const productTotal = discountedPrice * product.quantity;
//     totalAmount += productTotal;
//   }
//   return totalAmount;
// }
// const products = [
//   { name: "Product 1", price: 6000, discount: 4, quantity: 6 },
//   { name: "Product 2", price: 5000, discount: 14, quantity: 3 },
//   { name: "Product 3", price: 1500, discount: 2, quantity: 9 },
//   { name: "Product 4", price: 7000, discount: 7, quantity: 8 },
//   { name: "Product 5", price: 1000, discount: 8, quantity: 14 },
// ];
// const total = Mahsulotlar(products);
// console.log("Umumiy summa:", total);
