//OBJECTLERE ULAŞIM
////? .notasyonu ile erisim
//? square bracket ile erisim

const car = new Object();
car.brand = "Volvo";
car.model = 1990;
car.color = "egean blue";

const car2 = new Object();
car2.brand = "BMW";
car2.model = 2023;
car2.color = "red";

console.log(car);
console.log(car.model); //? .notasyonu ile erisim
console.log(car["color"]); //? square bracket ile erisim
//--------------------------------------------------------------------------
//OBJECT OLUŞTURMA
//* 1- Object() class'ından new Operatoru ile

const car = new Object();
car.brand = "Volvo";
car.model = 1990;
car.color = "egean blue";

const car2 = new Object();
car2.brand = "BMW";
car2.model = 2023;
car2.color = "red";

console.log(car);
console.log(car.model);
console.log(car["color"]);
//* 2- object constructor'i kullanarak
function Personel(id, ad, maas) {
  this.tc = id;
  this.name = ad;
  this.salary = maas;
  //   console.log(this)
}

const p1 = new Personel("1234567890", "Selim", 40000);
console.log(p1);
const p2 = new Personel("2344567890", "Levent", 40000);
console.log(p2);
const p3 = new Personel("2344567894", "Murat");
console.log(p3);

//* 3- Object literal (En cok tercih edilen yontem)

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  languages: ["C++", "Go", "Java", "Javascript"],
  salary: 10000,
};

console.log(worker);

//? Write
worker.age += 1;
console.log({ worker });

worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
console.log(upperCaseLangs);

//? yeni bir property ve value eklenebilir.
worker.nationality = "T.C";
console.log(worker);
//--------------------------------------------------------------------------
//OBJECTLERDE İTERATİON

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.
console.log(people);
console.log(people.person2.name);
console.log(people.person2.salary);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)
//* 1- For in For of
for (let p in people) {
  console.log(p);
  console.log(people[p].salary);
  console.log(people[p].name);
}
for (let k of Object.keys(people)) {
  console.log(k);
}

for (let v of Object.values(people)) {
  console.log(v);
}

for (let [k, v] of Object.entries(people)) {
  console.log("KEY:", k, "VALUE:", v.job);
}

//* 2- Built-in metodları(Object Metodları) ile keys(),values,entries
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//* 3- Array Metodları ile
Object.keys(people).forEach((p) => console.log(p));
console.log("*********");

Object.values(people).forEach((p) => console.log(p.name));
//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//? job'i developer olanlarin dob degerlerini yazdiriniz.
console.log("*****");

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

console.log("*****");
const dobs = Object.values(people)
  .filter((p) => p.job === "developer")
  .map((p) => p.dob); //? (2) ['1990', '2000']

console.log(dobs);

//--------------------------------------------------------------------------
//JSON => JavaScript Object Notation
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON

console.log(team);
console.log(team[1]);

//? team dizisine veri ekledik
team.push({ name: "Ahmet", surname: "yilmaz", job: "developer", age: 22 });
console.log(team);

//--------------------------------------------------------------------------
//ÖRNEKLER

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const agesIncByOne = team.map((x) => x.age + 1);
console.log(agesIncByOne); //?(4) [31, 23, 21, 23]

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   }
// })

//? alternative yontem
const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName);

//* Ornek4: teamFullName dizisindeki 30 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const teamUnder22 = teamFullName
  .filter((p) => p.age < 30)
  .map((p) => p.fullName);
console.log(teamUnder22);

//* Ornek5: ortalama yasi hesaplayiniz.
const avgAges =
  teamFullName.reduce((sum, person) => sum + person.age, 0) /
  teamFullName.length;
console.log(avgAges);
//--------------------------------------------------------------------------
//SORULAR

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6,
    },
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "White",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4,
    },
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "Red",
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    year: 2017,
    color: "Black",
    mileage: 10000,
    engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4,
    },
  },
  {
    id: 5,
    make: "Dodge",
    model: "Challenger",
    year: 2016,
    color: "Blue",
    mileage: 5000,
    engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6,
    },
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2015,
    color: "Silver",
    mileage: 35000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 7,
    make: "Audi",
    model: "A4",
    year: 2014,
    color: "Black",
    mileage: 30000,
    engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4,
    },
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2013,
    color: "White",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6,
    },
  },
  {
    id: 9,
    make: "Volkswagen",
    model: "Golf",
    year: 2012,
    color: "Red",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4,
    },
  },
  {
    id: 10,
    make: "Tesla",
    model: "Model S",
    year: 2011,
    color: "Silver",
    mileage: 15000,
    engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4,
    },
  },
];

//SORULAR
// 1- Rengi gümüş olan arabaları bir listeye ata.

let dizi = [];
carData.forEach((car) => {
  console.log(
    car.color.toLocaleLowerCase() == "silver" ? dizi.push(car) : null
  );
});
console.log(dizi);

//2.yöntem
// const dizi1 = carData.filter((car) => car["color"] == "Silver");
// console.log(dizi1.forEach((c) => console.log(c.make)));

// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.

const newList = carData.filter((c) => c.year > 2015);
console.log(newList);

// 3- Arabaların ortalama kilometre değerini hesapla.

let sum = 0;
const newList1 = carData.map((car, i, dizi) => (sum += car.mileage));
console.log(sum / carData.length);

// 4- 8 silindirli araçları listele
// cevap
const eightCylinderCars = carData.filter((car) => car.engine.cylinders === 8);
console.log(eightCylinderCars);
// 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

// cevap
const createDict = (keys, values) => {
  const dict = {};
  keys.forEach((key, index) => {
    dict[key] = values[index] || null;
  });
  return dict;
};
let keys = ["a", "b", "c", "d"];
let values = [1, 2, 3];
console.log(createDict(keys, values));
createDict(keys, values); // returns {'a': 1, 'b': 2, 'c': 3}

// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.
// çözüm
let obj = { a: 1, b: 2, c: 3 };
function reverseDict(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(reverseDict(obj));

//7- Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
// Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
// örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// çözüm
let results = { Java: 10, Ruby: 80, Python: 95 };
function myLanguages(results) {
  let filteredObj = {};
  let arr = [];
  for (let key in results) {
    if (results[key] >= 60) {
      filteredObj[key] = results[key];
    }
  }
  arr = Object.values(filteredObj).sort((a, b) => b - a);
  let sortedObj = {};
  arr.forEach((value) => {
    for (let key in filteredObj) {
      if (filteredObj[key] === value) {
        sortedObj[key] = value;
      }
    }
  });
  return sortedObj;
}
console.log(myLanguages(results));
